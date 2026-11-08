# Pages, componentes y templates

Ruta de trabajo: `C:\Users\mateo\WebStormProjects\angular-facturacion-electronica\src\app\pages`

## Índice
1. Crear el componente con Angular CLI
2. Qué genera el CLI (Angular 20)
3. Ciclo de vida y estado (reglas)
4. Componente de página completo (ejemplo verificado)
5. Control flow en templates: `@if`, `@for`, `@switch`, `@defer`
6. Componentes reutilizables en `shared/`
7. Ruta lazy y menú
8. Verificación

---

## 1. Crear el componente con Angular CLI

**Siempre** con el CLI, nunca creando los archivos a mano. El CLI toma la carpeta actual como destino, así que se ejecuta DENTRO de `pages`:

```powershell
cd C:\Users\mateo\WebStormProjects\angular-facturacion-electronica\src\app\pages
ng generate component product/product-list
```

Equivalente desde la raíz del proyecto:

```powershell
ng generate component pages/product/product-list
```

- Si Claude tiene acceso al shell del proyecto (Claude Code), ejecuta el comando él mismo.
- Si no lo tiene, le da al usuario el comando exacto, espera/continúa asumiendo los nombres que el CLI generará (sección 2) y entrega el contenido de cada archivo por separado.
- Estructura: `pages/<feature>/<nombre>` (ej. `pages/product/product-list`). Un nombre en kebab-case.
- Componentes reutilizables (usados en 2+ páginas) se generan en `shared`:

```powershell
cd C:\Users\mateo\WebStormProjects\angular-facturacion-electronica\src\app\shared\components
ng generate component page-header
```

## 2. Qué genera el CLI (Angular 20, probado)

```
product-list/
├── product-list.ts        # class ProductList  (SIN sufijo "Component")
├── product-list.html      # template SEPARADO
├── product-list.scss      # estilos SEPARADOS (angular.json fija style: scss)
└── product-list.spec.ts
```

- **TypeScript y HTML siempre separados**: usar `templateUrl` / `styleUrl`. Prohibido el `template:` inline (con backticks) (aunque el repo tenga login y otros inline; son restos de la plantilla).
- Respetar el nombre que genera el CLI (`ProductList`, selector `app-product-list`); no renombrar a `ProductListComponent`.
- El componente nace standalone: sólo agregar a `imports: []` lo que el template use.

## 3. Ciclo de vida y estado (reglas)

1. **Constructor = sólo DI**, y con `inject()` en campos `private readonly`. La carga inicial va en `ngOnInit`, nunca en el constructor.
2. **Cada `subscribe()` debe tener teardown**: `takeUntilDestroyed(this.destroyRef)` como ÚLTIMO operador del `pipe`. Es obligatorio en streams largos (`valueChanges`, `fromEvent`, `interval`, `router.events`) y en cadenas con `switchMap`.
3. Para datos sólo de lectura preferir `toSignal(obs$)` o el `async` pipe en lugar de `subscribe` manual.
4. `ngOnDestroy` sólo para limpiezas que no son RxJS (timers, listeners del DOM); aun así preferir `this.destroyRef.onDestroy(() => ...)`.
5. **`changeDetection: ChangeDetectionStrategy.OnPush`** en todos los componentes nuevos, y estado en **signals** (`signal`, `computed`). Estado derivado = `computed`, nunca una segunda variable sincronizada a mano. `effect` sólo para efectos secundarios reales.
6. `loading` se apaga con `finalize(() => this.loading.set(false))`, no repitiendo `loading = false` en `next` y `error`.
7. Inputs/outputs con la API de señales: `input()`, `input.required()`, `output()`, `model()`; no `@Input()`/`@Output()`.
8. Miembros usados sólo por el template: `protected`; lo demás `private`.
9. No lógica HTTP ni de storage en el componente: se delega al servicio de `core/services`. El componente orquesta estado y UI.
10. Sin métodos pesados en el template; para derivar datos usar `computed`. (Sólo se permiten referencias a funciones puras y baratas, como `fieldError`.)

## 4. Componente de página completo (verificado)

### `src/app/pages/product/product-list/product-list.ts`

```ts
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { filter, finalize, switchMap } from 'rxjs';
import { ProductDto } from '@/core/models/ProductDto';
import { ConfirmService } from '@/core/services/confirm.service';
import { NotificationService } from '@/core/services/notification.service';
import { ProductService } from '@/core/services/product.service';
import { getControlError } from '@/core/utils/form-errors.util';
import { PageHeader } from '@/shared/components/page-header/page-header';
import { TableSkeleton } from '@/shared/components/table-skeleton/table-skeleton';

@Component({
    selector: 'app-product-list',
    imports: [ReactiveFormsModule, TableModule, ButtonModule, DialogModule, InputTextModule, InputNumberModule, IconFieldModule, InputIconModule, PageHeader, TableSkeleton],
    templateUrl: './product-list.html',
    styleUrl: './product-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList implements OnInit {
    private readonly productService = inject(ProductService);
    private readonly notify = inject(NotificationService);
    private readonly confirm = inject(ConfirmService);
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly destroyRef = inject(DestroyRef);

    // Estado como signals: con OnPush la vista se actualiza sola al cambiar.
    protected readonly products = signal<ProductDto[]>([]);
    protected readonly loading = signal(false);
    protected readonly dialogOpen = signal(false);
    protected readonly editingId = signal<number | null>(null);

    // Estado derivado: nunca se duplica ni se sincroniza a mano.
    protected readonly total = computed(() => this.products().length);
    protected readonly isEditMode = computed(() => this.editingId() !== null);

    protected readonly form = this.fb.group({
        code: ['', [Validators.required, Validators.minLength(2)]],
        name: ['', [Validators.required, Validators.minLength(2)]],
        price: [0, [Validators.required, Validators.min(0)]]
    });

    protected readonly fieldError = getControlError;

    ngOnInit(): void {
        this.load();
    }

    protected openNew(): void {
        this.editingId.set(null);
        this.form.reset();
        this.dialogOpen.set(true);
    }

    protected openEdit(product: ProductDto): void {
        this.editingId.set(product.id);
        this.form.patchValue(product);
        this.dialogOpen.set(true);
    }

    protected closeDialog(): void {
        this.dialogOpen.set(false);
    }

    protected save(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notify.warn('Completa correctamente todos los campos requeridos');

            return;
        }

        const dto = this.form.getRawValue();
        const id = this.editingId();
        const request$ = id === null ? this.productService.create(dto) : this.productService.update(id, dto);

        request$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            this.notify.success(id === null ? 'Producto creado correctamente' : 'Producto actualizado correctamente');
            this.closeDialog();
            this.load();
        });
    }

    protected remove(product: ProductDto): void {
        this.confirm
            .confirm({ header: 'Confirmar eliminación', message: `¿Eliminar el producto <strong>${product.name}</strong>?`, acceptLabel: 'Sí, eliminar' })
            .pipe(
                filter(Boolean),
                switchMap(() => this.productService.delete(product.id)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(() => {
                this.notify.success('Producto eliminado correctamente');
                this.load();
            });
    }

    protected applyGlobalFilter(table: Table, event: Event): void {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    private load(): void {
        this.loading.set(true);
        this.productService
            .getAll()
            .pipe(
                finalize(() => this.loading.set(false)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe((products) => this.products.set(products));
    }
}
```

### `src/app/pages/product/product-list/product-list.html`

```html
<div class="card">
    <div class="flex flex-col gap-8 w-full">
        <app-page-header title="Gestión de Productos" subtitle="Administración del catálogo de productos" icon="pi pi-box" />

        <div class="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm rounded-xl border border-surface-200/50 dark:border-surface-700/50 p-6">
            <div class="bg-surface-0 dark:bg-surface-900 rounded-lg shadow-sm border border-surface-200 dark:border-surface-700">
                @if (loading()) {
                    <app-table-skeleton [rows]="6" [columns]="4" />
                } @else {
                    <p-table #dt [value]="products()" dataKey="id" [rows]="10" [paginator]="true" [rowHover]="true" [globalFilterFields]="['code', 'name']" styleClass="p-datatable-sm">
                        <ng-template #caption>
                            <div class="flex justify-between items-center p-4">
                                <p-button label="Nuevo producto" icon="pi pi-plus" severity="success" size="small" (onClick)="openNew()" />
                                <p-iconfield iconPosition="left">
                                    <p-inputicon class="pi pi-search" />
                                    <input pInputText type="text" placeholder="Buscar..." (input)="applyGlobalFilter(dt, $event)" />
                                </p-iconfield>
                            </div>
                        </ng-template>

                        <ng-template #header>
                            <tr>
                                <th>CÓDIGO</th>
                                <th>NOMBRE</th>
                                <th>PRECIO</th>
                                <th class="text-center">ACCIONES</th>
                            </tr>
                        </ng-template>

                        <ng-template #body let-product>
                            <tr>
                                <td>{{ product.code }}</td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.price }}</td>
                                <td class="text-center">
                                    <p-button icon="pi pi-pencil" [text]="true" size="small" (onClick)="openEdit(product)" />
                                    <p-button icon="pi pi-trash" [text]="true" severity="danger" size="small" (onClick)="remove(product)" />
                                </td>
                            </tr>
                        </ng-template>

                        <ng-template #emptymessage>
                            <tr>
                                <td colspan="4" class="text-center p-4">No hay productos registrados</td>
                            </tr>
                        </ng-template>
                    </p-table>
                }
            </div>
        </div>
    </div>
</div>

<p-dialog [header]="isEditMode() ? 'Editar producto' : 'Nuevo producto'" [(visible)]="dialogOpen" [modal]="true" [style]="{ width: '28rem' }">
    <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <label for="code">Código</label>
            <input pInputText id="code" formControlName="code" />
            @if (form.controls.code.touched && form.controls.code.invalid) {
                <small class="text-red-500">{{ fieldError(form.controls.code) }}</small>
            }
        </div>

        <div class="flex flex-col gap-1">
            <label for="name">Nombre</label>
            <input pInputText id="name" formControlName="name" />
            @if (form.controls.name.touched && form.controls.name.invalid) {
                <small class="text-red-500">{{ fieldError(form.controls.name) }}</small>
            }
        </div>

        <div class="flex flex-col gap-1">
            <label for="price">Precio</label>
            <p-inputnumber inputId="price" formControlName="price" mode="currency" currency="USD" [fluid]="true" />
            @if (form.controls.price.touched && form.controls.price.invalid) {
                <small class="text-red-500">{{ fieldError(form.controls.price) }}</small>
            }
        </div>

        <div class="flex justify-end gap-2">
            <p-button label="Cancelar" severity="secondary" [outlined]="true" (onClick)="closeDialog()" />
            <p-button label="Guardar" type="submit" />
        </div>
    </form>
</p-dialog>
```

Qué demuestra: estado con signals, `computed`, `finalize` + `takeUntilDestroyed`, confirmación como Observable (`filter(Boolean)` + `switchMap`), formulario tipado con `NonNullableFormBuilder`, errores de validación reutilizables, y cero duplicación de toasts, headers o skeletons.

## 5. Control flow en templates

Usar **siempre** la sintaxis nueva. Prohibido `*ngIf`, `*ngFor`, `*ngSwitch`, `ngTemplateOutlet` para lo que el control flow resuelve, e importar `CommonModule`/`NgIf`/`NgFor`.

```html
<!-- Condicional (con alias del resultado) -->
@if (user(); as u) {
    <span>{{ u.name }}</span>
} @else if (loading()) {
    <app-table-skeleton />
} @else {
    <p>Sin datos</p>
}

<!-- Lista: track OBLIGATORIO. Usar un id único y estable; `$index` sólo en listas estáticas -->
@for (item of items(); track item.id; let i = $index, last = $last) {
    <li [class.border-b]="!last">{{ i + 1 }}. {{ item.name }}</li>
} @empty {
    <li>No hay elementos</li>
}

<!-- Switch (p. ej. estados A/I/P/D) -->
@switch (item.status) {
    @case ('A') { <p-tag value="Activo" severity="success" /> }
    @case ('P') { <p-tag value="Pendiente" severity="warn" /> }
    @default { <p-tag [value]="item.status" severity="secondary" /> }
}

<!-- Variable local -->
@let total = items().length;

<!-- Carga diferida de bloques pesados (gráficos, tablas grandes) -->
@defer (on viewport) {
    <app-heavy-chart />
} @placeholder {
    <div class="h-40 animate-pulse bg-surface-100"></div>
}
```

Reglas:
- Los signals se leen con paréntesis: `products()`, `loading()`.
- Clases condicionales con `[class.nombre]="cond"` en vez de `[ngClass]` (así no se importa `NgClass`).
- Etiquetas autocerradas para componentes sin contenido: `<app-page-header ... />`.
- Los `<ng-template #body let-x>`, `#header`, `#caption`, `#emptymessage` de `p-table` **no son control flow**: son la API de plantillas de PrimeNG y se mantienen. PrimeNG ya itera las filas, no envolver el `#body` en `@for`.
- Skeletons, chips, tabs, opciones estáticas → `@for` con `track`. Si una lista de apoyo es solo para pintar N cajas, derivar el array en un `computed` (ver `TableSkeleton`).
- Estado vacío con `@empty` o `#emptymessage`, no con un `@if (items().length === 0)` aparte.

## 6. Componentes reutilizables en `shared/components/`

Si un bloque de UI aparece en 2+ páginas, se extrae (no se copia). Ya implementados y verificados:

### `src/app/shared/components/page-header/page-header.ts`

```ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.html',
    styleUrl: './page-header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeader {
    readonly title = input.required<string>();
    readonly subtitle = input('');
    readonly icon = input('pi pi-file');
}
```

### `src/app/shared/components/page-header/page-header.html`

```html
<div class="flex items-center gap-2 min-w-0">
    <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 via-primary-200/60 to-primary-300/40 dark:from-primary-900/50 dark:via-primary-800/70 dark:to-primary-700/50 border border-primary-200/60 dark:border-primary-600/40 shadow-lg">
        <i [class]="icon() + ' text-primary-600 dark:text-primary-300 text-xl'"></i>
    </div>
    <div class="min-w-0">
        <p class="text-gray-800 dark:text-white text-xl sm:text-2xl font-bold leading-snug tracking-tight">{{ title() }}</p>
        @if (subtitle()) {
            <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-snug">{{ subtitle() }}</p>
        }
    </div>
</div>
```

### `src/app/shared/components/table-skeleton/table-skeleton.ts`

```ts
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
    selector: 'app-table-skeleton',
    templateUrl: './table-skeleton.html',
    styleUrl: './table-skeleton.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSkeleton {
    readonly rows = input(6);
    readonly columns = input(5);

    protected readonly rowItems = computed(() => Array.from({ length: this.rows() }, (_, i) => i));
    protected readonly columnItems = computed(() => Array.from({ length: this.columns() }, (_, i) => i));
    protected readonly gridColumns = computed(() => `repeat(${this.columns()}, minmax(0, 1fr))`);
}
```

### `src/app/shared/components/table-skeleton/table-skeleton.html`

```html
<div class="p-4 space-y-3">
    @for (row of rowItems(); track row) {
        <div class="grid gap-2 p-3 border-b border-surface-100 dark:border-surface-800" [style.grid-template-columns]="gridColumns()">
            @for (col of columnItems(); track col) {
                <div class="h-4 bg-surface-100 dark:bg-surface-800 rounded animate-pulse"></div>
            }
        </div>
    }
</div>
```

Candidatos a extraer cuando se repitan: etiqueta de estado (`A/I/P/D` → texto + severidad) como componente o pipe con un mapa constante en `core/constants/`, cabecera de tabla con buscador, diálogo de formulario. El repo actual repite los métodos `getStatusLabel/getStatusSeverity` y el HTML de cabecera/skeleton en cada página: **no copiarlos**.

## 7. Ruta lazy y menú

`pages/pages.routes.ts` — cargar con `loadComponent` (no importar la clase arriba del archivo) y poner `title`:

```ts
{ path: 'product-list', loadComponent: () => import('./product/product-list/product-list').then((m) => m.ProductList), title: 'Productos' },
```

Queda en `/pages/product-list`, protegida por `authGuard` heredado del padre `AppLayout`.

`layout/component/app.menu.ts`:

```ts
{ label: 'Gestion Productos', isAuthenticated: true, icon: 'pi pi-fw pi-box', routerLink: ['/pages/product-list'] },
```

## 8. Verificación

```powershell
npm run format
ng build --configuration development
```

`strictTemplates` está activo: un binding mal tipado rompe el build, así que compilar antes de dar la tarea por terminada.
