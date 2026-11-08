---
name: corebusiness-web
description: Guía obligatoria para desarrollar en el frontend Angular 20 (standalone + PrimeNG 20 + Tailwind 4) de CoreBusiness.Web / angular-facturacion-electronica. Usar SIEMPRE que el usuario pida crear o modificar una página, componente, servicio, modelo/DTO, interceptor, guard, ruta, ítem de menú, formulario o tabla en este proyecto (ej. "crea el módulo de clientes", "agrega una pantalla de facturas", "otro CRUD como usuarios", "refactoriza este servicio"), o hable de SOLID, clean code, ciclo de vida, @if/@for o ng generate en este repo, aunque no nombre el proyecto. Impone ng generate component en src/app/pages, ts y html separados, core en src/app/core con SOLID/DRY, signals + OnPush + takeUntilDestroyed y control flow nuevo.
---

# CoreBusiness.Web — guía de desarrollo

SPA Angular 20 (componentes standalone, zone.js) con PrimeNG 20 (tema Aura, dark mode con clase `.app-dark`), Tailwind 4 y la plantilla Sakai-NG como shell. Consume una API REST en `environment.apiUrl` con JWT.

**Rutas locales del proyecto (Windows):**

| Qué | Ruta |
|---|---|
| Raíz | `C:\Users\mateo\WebStormProjects\angular-facturacion-electronica` |
| Páginas | `…\src\app\pages` |
| Core (modelos, servicios, interceptores, guards, utils) | `…\src\app\core` |
| Reutilizables de UI | `…\src\app\shared` |

Alias de imports: `@/*` → `src/app/*`. Prettier: 4 espacios, comillas simples, sin trailing comma.

## Reglas innegociables

1. **Todo componente nuevo se crea con Angular CLI**, ejecutado en la carpeta de destino:
   ```powershell
   cd C:\Users\mateo\WebStormProjects\angular-facturacion-electronica\src\app\pages
   ng generate component <feature>/<nombre>
   ```
   Nunca crear a mano los archivos de un componente. Si Claude no tiene shell sobre el proyecto, entrega ese comando al usuario y rellena los archivos que el CLI genera.
2. **`.ts` y `.html` (y `.scss`) siempre separados**: `templateUrl` + `styleUrl`. Nada de `template:` inline.
3. **El core vive en `../../src/app/core`**: modelos en `core/models`, **todos** los servicios en `core/services`, interceptores en `core/interceptors`, guards en `core/guards`, utilidades en `core/utils`, config/tokens en `core/config`. Nada de servicios dentro de `pages/`.
4. **SOLID + clean code + DRY**: un servicio CRUD nuevo hereda de `BaseApiService` (5 líneas); nada de copiar y pegar métodos HTTP, headers, toasts, skeletons o cabeceras. Si algo se repite 2 veces, se extrae a `core/` o `shared/`.
5. **Ciclo de vida correcto**: constructor sólo para DI (`inject()`), carga inicial en `ngOnInit`, todo `subscribe` con `takeUntilDestroyed(this.destroyRef)`, `OnPush` + signals.
6. **Control flow nuevo en templates**: `@if / @else`, `@for … track`, `@switch`, `@defer`. Prohibido `*ngIf`, `*ngFor`, `CommonModule`.

## Flujo para un módulo nuevo (en este orden)

1. **Modelos** en `core/models` (`XxxDto.ts`, `CreateXxxDto.ts` derivado con `Omit<>`).
2. **Servicio** en `core/services/xxx.service.ts` extendiendo `BaseApiService` (sobrescribir sólo si la API tiene rutas atípicas).
3. **Componente** con `ng generate component` en `pages/<feature>/<nombre>` (regla 1).
4. **Implementar** `.ts` (estado con signals, DestroyRef) y `.html` (control flow) reutilizando `PageHeader`, `TableSkeleton`, `NotificationService`, `ConfirmService`, `getControlError`.
5. **Ruta lazy** con `loadComponent` + `title` en `pages/pages.routes.ts`.
6. **Menú**: ítem en `layout/component/app.menu.ts` con `isAuthenticated: true`.
7. **Verificar**: `npm run format` y `ng build --configuration development` (`strictTemplates` está activo).

Leer antes de escribir código:
- **`../references/core-solid.md`** — modelos, `BaseApiService`, `TokenService`, `NotificationService`, `ConfirmService`, `AuthService`, interceptores, utilidades, y cómo sobrescribir la base para `/users/createUser`, etc. Leer al tocar cualquier cosa de `core/`.
- **`../references/pages-y-templates.md`** — comando CLI y archivos generados, reglas de ciclo de vida, página completa de ejemplo, guía de `@if/@for/@switch/@defer`, componentes `shared`, rutas y menú. Leer al crear o modificar una página.

## Arquitectura (resumen)

```
src/
├── app.config.ts · app.routes.ts · app.component.ts   # <router-outlet/> + <p-toast/> + <p-confirmDialog/> + <app-loading/>
├── environments/                                      # environment.ts / environment.development.ts
└── app/
    ├── core/
    │   ├── config/        api.config.ts (token API_URL)
    │   ├── guards/        auth.guard.ts
    │   ├── interceptors/  loading · token · error     (una responsabilidad cada uno)
    │   ├── models/        ApiResponse, *Dto
    │   ├── services/      base-api · token · auth · notification · confirm · loading · <recurso>.service
    │   └── utils/         http-error.util · form-errors.util
    ├── shared/components/ page-header · table-skeleton · loading   # reutilizables
    ├── layout/            shell Sakai (menú, topbar, sidebar)
    └── pages/<feature>/<nombre>/   nombre.ts · nombre.html · nombre.scss · nombre.spec.ts
```

Flujo: `/` → `/auth/login` → `AuthService.login` guarda el JWT vía `TokenService` → `/pages/...` protegido por `authGuard`. Interceptores en orden: `loading` → `token` (Bearer) → `error` (toast único). Contrato de API: toda respuesta es `ApiResponse<T>`; los servicios devuelven `Observable<T>` ya desenvuelto (`unwrap`). Estados de work item: `A` activo, `I` inactivo, `P` pendiente, `D` disponible.

## Antipatrones: no escribir ni replicar

El código existente del repo (`user-list`, `work-items`, `UserService`, `login`) los contiene; al tocarlos, refactorizar hacia estas reglas, y en código nuevo nunca usarlos:

- `*ngIf` / `*ngFor` / `CommonModule` / `NgClass` para algo que `@if` / `@for` / `[class.x]` resuelve.
- `@for` sin `track`, o `track $index` en listas dinámicas.
- `template:` inline; clases `XxxComponent` renombradas cuando el CLI generó `Xxx`.
- `.subscribe()` sin `takeUntilDestroyed`; lógica en el constructor; `loading = false` repetido en `next` y `error` (usar `finalize`).
- Estado en propiedades mutables (`users: UserDto[] = []`, `this.users.push(...)`) en vez de `signal` + `computed`; `totalRecords` sincronizado a mano.
- `getHeaders()` manual en servicios (el `tokenInterceptor` ya pone el Bearer); `localStorage` fuera de `TokenService`.
- Toast de error HTTP dentro del componente (el `errorInterceptor` ya lo muestra; antes se duplicaba, y además leía `Message` vs `message`).
- Usar `MessageService` / `ConfirmationService` directo en páginas: usar `NotificationService` / `ConfirmService`.
- Un servicio por recurso que reescribe `getAll/create/update/delete` en vez de heredar de `BaseApiService`; mezclar recursos distintos en un mismo servicio (work items dentro de `UserService`).
- Copiar la cabecera con icono, el skeleton, `getStatusLabel/getStatusSeverity` o los mensajes de validación en cada página.
- Mostrar contraseñas en tablas; `any` salvo en el borde de parseo de errores; código muerto (`cacheInterceptor` era un passthrough).
- Constructor con parámetros para DI: preferir `inject()`.

## Deuda técnica del repo (informar, no corregir sin que lo pidan)

`../../node_modules` y `../../.angular` están commiteados y no hay `.gitignore`; `environment.ts` (prod) apunta a `localhost:3000`; `defaultUserImage` sólo existe en el environment de desarrollo; `../../angular.json` referencia una carpeta `public/` que no existe; `../../eslint.config.js` está en formato legacy y exige prefijo `p` aunque el proyecto usa `app`; el login enlaza a `/auth/register` y `/auth/forgot-password`, que no existen; `UserDto.lastname` vs `CreateUserDto.lastName`; restos de la plantilla Sakai (`uikit`, `landing`, `crud`, `dashboard`, `pages/service/*`, `assets/demo`) que no pertenecen al dominio.
