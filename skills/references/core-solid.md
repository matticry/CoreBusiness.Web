# Core: modelos, servicios, interceptores y utilidades (SOLID)

Código **verificado**: compila con `strictTemplates` en Angular 20. Ruta de trabajo: `C:\Users\mateo\WebStormProjects\angular-facturacion-electronica\src\app\core`.

## Índice
1. Principios y qué clase cumple cada uno
2. Configuración y utilidades
3. Modelos
4. Servicios (base genérica, concretos, transversales)
5. Interceptores
6. Registro en `app.config.ts`
7. Cómo sobrescribir la base para APIs con rutas atípicas

---

## 1. Principios y dónde se ven

| Principio | Aplicación en el core |
|---|---|
| **S**ingle Responsibility | `TokenService` sólo maneja el JWT; `NotificationService` sólo toasts; `ConfirmService` sólo confirmaciones; cada interceptor hace UNA cosa; `extractErrorMessage` es la única función que conoce el formato de error de la API. |
| **O**pen/Closed | `BaseApiService` se extiende (hereda y sobrescribe) sin modificarse. |
| **L**iskov | Todo `XxxService extends BaseApiService` puede usarse donde se espera la base; los `override` conservan firma y tipo de retorno. |
| **I**nterface Segregation | DTOs separados (`ProductDto`, `CreateProductDto`); los componentes sólo inyectan el servicio que necesitan. Si un recurso es de sólo lectura, no extender la base completa: crear una `ReadOnlyApiService` con `getAll/getById`. |
| **D**ependency Inversion | La URL viene del token `API_URL` (no se importa `environment` en los servicios); los componentes dependen de `NotificationService`/`ConfirmService`, no de `MessageService`/`ConfirmationService` de PrimeNG; nadie toca `localStorage` salvo `TokenService`. |
| **DRY** | CRUD escrito una sola vez en `BaseApiService`; mensajes de validación en `form-errors.util.ts`; header/skeleton en `shared/`. |

Reglas de clean code del core: nombres que revelan intención, funciones cortas de un solo nivel de abstracción, `readonly` por defecto, sin `any` salvo en el borde del parseo de errores, sin código muerto (se eliminó `cacheInterceptor` porque era un passthrough), sin números/strings mágicos repetidos (constantes).

---

## 2. Configuración y utilidades

### `src/app/core/config/api.config.ts`

```ts
import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

/** Única fuente de la URL base de la API (Dependency Inversion: nadie importa `environment` directamente). */
export const API_URL = new InjectionToken<string>('API_URL', {
    providedIn: 'root',
    factory: () => environment.apiUrl
});
```

### `src/app/core/utils/http-error.util.ts`

```ts
import { HttpErrorResponse } from '@angular/common/http';

/** Extrae el mensaje legible de un error HTTP. Es la única función que conoce el formato de error de la API. */
export function extractErrorMessage(error: HttpErrorResponse, fallback = 'Ocurrió un error inesperado.'): string {
    if (error.status === 0) {
        return 'Sin conexión con el servidor.';
    }

    return error.error?.message ?? error.error?.Message ?? fallback;
}
```

### `src/app/core/utils/form-errors.util.ts`

```ts
import { AbstractControl } from '@angular/forms';

const ERROR_MESSAGES: Record<string, (error: any) => string> = {
    required: () => 'Este campo es requerido',
    email: () => 'Email inválido',
    minlength: (e) => `Mínimo ${e.requiredLength} caracteres`,
    maxlength: (e) => `Máximo ${e.requiredLength} caracteres`,
    pattern: () => 'Formato inválido',
    min: (e) => `Valor mínimo: ${e.min}`,
    max: (e) => `Valor máximo: ${e.max}`
};

/** Devuelve el primer mensaje de error de un control (o '' si es válido). Reutilizable en cualquier formulario. */
export function getControlError(control: AbstractControl | null): string {
    const errors = control?.errors;

    if (!errors) {
        return '';
    }
    const key = Object.keys(errors).find((k) => k in ERROR_MESSAGES);

    return key ? ERROR_MESSAGES[key](errors[key]) : 'Valor inválido';
}
```

---

## 3. Modelos — `core/models/`

Un archivo por tipo, el nombre del archivo es el nombre del tipo (convención del repo: PascalCase). Derivar los DTO de creación/edición del DTO base en vez de copiar campos:

### `src/app/core/models/ProductDto.ts`

```ts
export interface ProductDto {
    id: number;
    code: string;
    name: string;
    price: number;
}
```

### `src/app/core/models/CreateProductDto.ts`

```ts
import { ProductDto } from './ProductDto';

export type CreateProductDto = Omit<ProductDto, 'id'>;
```

`ApiResponse<T>` ya existe en `core/models/ApiResponse.ts`. No inventar otro envoltorio.

---

## 4. Servicios — `core/services/`

**Todos** los servicios (de negocio y transversales) viven aquí, no dentro de `pages/`.

### 4.1 Base genérica (se escribe UNA vez)

### `src/app/core/services/base-api.service.ts`

```ts
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import { ApiResponse } from '../models/ApiResponse';

/**
 * CRUD genérico sobre un recurso REST. Cada servicio concreto sólo declara `resource`
 * (DRY + Open/Closed): se extiende sin modificar la base, y los métodos pueden sobrescribirse
 * si la API usa rutas atípicas (ej. `/users/createUser`).
 */
export abstract class BaseApiService<TEntity, TCreate = Partial<TEntity>, TUpdate = TCreate, TId extends string | number = number> {
    protected readonly http = inject(HttpClient);
    private readonly apiUrl = inject(API_URL);

    /** Nombre del recurso, sin barras. Ej: 'products'. */
    protected abstract readonly resource: string;

    getAll(): Observable<TEntity[]> {
        return this.unwrap(this.http.get<ApiResponse<TEntity[]>>(this.url()));
    }

    getById(id: TId): Observable<TEntity> {
        return this.unwrap(this.http.get<ApiResponse<TEntity>>(this.url(id)));
    }

    create(dto: TCreate): Observable<TEntity> {
        return this.unwrap(this.http.post<ApiResponse<TEntity>>(this.url(), dto));
    }

    update(id: TId, dto: TUpdate): Observable<TEntity> {
        return this.unwrap(this.http.put<ApiResponse<TEntity>>(this.url(id), dto));
    }

    delete(id: TId): Observable<TEntity> {
        return this.unwrap(this.http.delete<ApiResponse<TEntity>>(this.url(id)));
    }

    protected url(...segments: (string | number)[]): string {
        return [this.apiUrl, this.resource, ...segments].join('/');
    }

    protected unwrap<T>(source$: Observable<ApiResponse<T>>): Observable<T> {
        return source$.pipe(map((response) => response.data));
    }
}
```

### 4.2 Servicio concreto = 5 líneas

### `src/app/core/services/product.service.ts`

```ts
import { Injectable } from '@angular/core';
import { CreateProductDto } from '../models/CreateProductDto';
import { ProductDto } from '../models/ProductDto';
import { BaseApiService } from './base-api.service';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseApiService<ProductDto, CreateProductDto> {
    protected readonly resource = 'products';
}
```

### 4.3 Transversales

### `src/app/core/services/token.service.ts`

```ts
import { Injectable } from '@angular/core';

interface JwtPayload {
    exp?: number;
    userId?: number;
}

/** Responsabilidad única: leer/escribir/interpretar el JWT. Nadie más toca `localStorage['token']`. */
@Injectable({ providedIn: 'root' })
export class TokenService {
    private readonly tokenKey = 'token';

    get(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    set(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    clear(): void {
        localStorage.removeItem(this.tokenKey);
    }

    decode(token: string | null = this.get()): JwtPayload | null {
        if (!token) {
            return null;
        }

        try {
            const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');

            return JSON.parse(atob(base64)) as JwtPayload;
        } catch {
            return null;
        }
    }

    isExpired(): boolean {
        const exp = this.decode()?.exp;

        return !exp || Date.now() >= exp * 1000;
    }
}
```

### `src/app/core/services/notification.service.ts`

```ts
import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

type Severity = 'success' | 'info' | 'warn' | 'error';

/** Fachada sobre MessageService: los textos/severidades se definen en un solo lugar. */
@Injectable({ providedIn: 'root' })
export class NotificationService {
    private readonly messages = inject(MessageService);

    success(detail: string, summary = 'Éxito'): void {
        this.show('success', summary, detail);
    }

    info(detail: string, summary = 'Información'): void {
        this.show('info', summary, detail);
    }

    warn(detail: string, summary = 'Advertencia'): void {
        this.show('warn', summary, detail);
    }

    error(detail: string, summary = 'Error'): void {
        this.show('error', summary, detail);
    }

    private show(severity: Severity, summary: string, detail: string): void {
        this.messages.add({ severity, summary, detail });
    }
}
```

### `src/app/core/services/confirm.service.ts`

```ts
import { inject, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

export interface ConfirmOptions {
    message: string;
    header?: string;
    icon?: string;
    acceptLabel?: string;
    rejectLabel?: string;
}

/** Convierte el diálogo de confirmación basado en callbacks en un Observable<boolean> componible con RxJS. */
@Injectable({ providedIn: 'root' })
export class ConfirmService {
    private readonly confirmation = inject(ConfirmationService);

    confirm(options: ConfirmOptions): Observable<boolean> {
        return new Observable<boolean>((subscriber) => {
            const answer = (value: boolean): void => {
                subscriber.next(value);
                subscriber.complete();
            };

            this.confirmation.confirm({
                header: 'Confirmar',
                icon: 'pi pi-exclamation-triangle',
                acceptLabel: 'Sí',
                rejectLabel: 'Cancelar',
                acceptButtonStyleClass: 'p-button-danger p-button-sm',
                rejectButtonStyleClass: 'p-button-secondary p-button-outlined p-button-sm',
                ...options,
                accept: () => answer(true),
                reject: () => answer(false)
            });
        });
    }
}
```

### `src/app/core/services/auth.service.ts`

```ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_URL } from '../config/api.config';
import { LoginDto } from '../models/LoginDto';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = inject(API_URL);
    private readonly tokens = inject(TokenService);

    private readonly userIdState = signal<number | null>(this.tokens.decode()?.userId ?? null);
    readonly userId = this.userIdState.asReadonly();

    login(email: string, password: string): Observable<LoginDto> {
        return this.http.post<LoginDto>(`${this.apiUrl}/auth`, { email, password }).pipe(
            tap((response) => {
                if (response.success && response.data) {
                    this.tokens.set(response.data.token);
                    this.userIdState.set(this.tokens.decode()?.userId ?? null);
                }
            })
        );
    }

    isAuthenticated(): boolean {
        return !!this.tokens.get() && !this.tokens.isExpired();
    }

    logOut(): void {
        this.tokens.clear();
        this.userIdState.set(null);
    }
}
```

---

## 5. Interceptores — `core/interceptors/`

Funciones `HttpInterceptorFn`, cada una con una sola responsabilidad. `loading.interceptor.ts` y `LoadingService` ya existen y están bien (contador de peticiones); no tocarlos.

### `src/app/core/interceptors/token.interceptor.ts`

```ts
import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const token = inject(TokenService).get();

    return next(token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req);
};
```

### `src/app/core/interceptors/error.interceptor.ts`

```ts
import type { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { extractErrorMessage } from '../utils/http-error.util';

/** Único lugar que muestra el toast de error HTTP. Los componentes NO deben duplicarlo. */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const notify = inject(NotificationService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            notify.error(extractErrorMessage(error));

            return throwError(() => error);
        })
    );
};
```

Consecuencias: **los servicios no pasan headers** y **los componentes no muestran toast de error HTTP** (lo hace el interceptor). El componente sólo reacciona al estado (`finalize` para apagar `loading`).

---

## 6. Registro — `src/app.config.ts`

```ts
provideHttpClient(withInterceptors([loadingInterceptor, tokenInterceptor, errorInterceptor]), withFetch()),
```

`MessageService` y `ConfirmationService` ya están en `providers`. Colocar `<p-toast />` y `<p-confirmDialog />` **una sola vez** en `app.component.ts` (no repetir `<p-confirmDialog>` en cada página).

---

## 7. APIs con rutas atípicas

El backend de usuarios no es REST puro (`/users/createUser`, `/users/updateUserById/{id}`, `/users/deleteLogicUserById/{id}`). Se respeta heredando y sobrescribiendo sólo lo distinto, reutilizando `url()` y `unwrap()`:

```ts
@Injectable({ providedIn: 'root' })
export class UserService extends BaseApiService<UserDto, CreateUserDto, UpdateUserDto> {
    protected readonly resource = 'users';

    override create(dto: CreateUserDto): Observable<UserDto> {
        return this.unwrap(this.http.post<ApiResponse<UserDto>>(this.url('createUser'), dto));
    }

    override update(id: number, dto: UpdateUserDto): Observable<UserDto> {
        return this.unwrap(this.http.put<ApiResponse<UserDto>>(this.url('updateUserById', id), dto));
    }

    override delete(id: number): Observable<UserDto> {
        return this.unwrap(this.http.delete<ApiResponse<UserDto>>(this.url('deleteLogicUserById', id)));
    }

    deleteForce(id: number): Observable<UserDto> {
        return this.unwrap(this.http.delete<ApiResponse<UserDto>>(this.url('deleteForceUserById', id)));
    }

    getWorkItems(userId: number): Observable<WorkItemDto[]> {
        return this.unwrap(this.http.get<ApiResponse<WorkItemDto[]>>(this.url(userId, 'work-items')));
    }
}
```

Los work items por estado (`/users/status/{status}`) pertenecen a otro recurso: moverlos a un `WorkItemService` propio (SRP) en vez de dejarlos en `UserService`.
