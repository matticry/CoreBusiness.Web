---
name: core-business-frontend
description: Guía de integración frontend para la API CoreBusiness (Next.js, React, Vue, Angular, TypeScript). Define cómo gestionar el ciclo de vida de tokens (access token JWT con claims de roles y permisos, refresh token opaco con rotación, detección de expiración), interceptores HTTP con cola de refresco concurrente, flujos de autenticación (login, refresh, logout), control de acceso RBAC por roles y permisos granulares, y consumo del CRUD de usuarios condicionado por permisos sobre el envelope ApiResponse. Úsala siempre que se desarrolle, modifique o audite código frontend que interactúe con el microservicio CoreBusiness.
---

# CoreBusiness - Guía de Integración Frontend (Autenticación, RBAC y Consumo de API)

Esta skill proporciona los estándares, arquitecturas de cliente HTTP, contratos de datos (TypeScript) y buenas prácticas para integrar cualquier aplicación frontend (React, Next.js, Vue, Angular o vanilla TypeScript) con el backend **CoreBusiness** (`com.matticry.corebusiness`).

---

## 1. Contexto de la API Backend

### 1.1. Arquitectura y Seguridad del Microservicio
* **Backend:** Spring Boot con OAuth2 Resource Server y Spring Security stateless.
* **Firma de Token:** JWT firmado con HMAC-SHA256 (HS256).
* **Duración de Tokens:**
    * **Access Token:** Corto (~15 minutos).
    * **Refresh Token:** Opaco (aleatorio Base64URL de 64 bytes), larga duración (~7 días), rotativo y almacenado con hash SHA-256 en base de datos.
* **Modelo de Autorización:** Role-Based Access Control (RBAC) con permisos granulares (`ACCION.RECURSO.PERMISSION`).

### 1.2. Envelope Estándar de Respuesta (`ApiResponse<T>`)
Todas las respuestas exitosas y de error con cuerpo HTTP devuelven el envoltorio estándar:

```json
{
  "success": true,
  "status": 200,
  "message": "Operación exitosa.",
  "data": { ... },
  "errors": null,
  "correlationId": "6f1c9e0a-5b12-4a88-9d22-123456789abc",
  "timestamp": "2026-11-06T18:30:00Z"
}
```

* **Nota importante para DELETE y LOGOUT:** Retornan código HTTP `204 No Content` sin cuerpo de respuesta. El cliente no debe intentar parsear JSON en respuestas 204.
* **Respuestas de Error:** `success` es `false`, `data` es `null`. En errores de validación (HTTP 400), el mapa `errors` contiene pares `{ [campo]: "mensaje de error" }`.

---

## 2. Inventario de Endpoints del Backend

### 2.1. Módulo de Autenticación (`/api/v1/auth`)

| Método | Endpoint | Permiso Requerido | Request Body | Respuesta Exitosa | Descripción |
|---|---|---|---|---|---|
| `POST` | `/api/v1/auth/login` | Público | `LoginRequestDto` | `200 OK` → `ApiResponse<TokenResponseDto>` | Inicio de sesión con credenciales. |
| `POST` | `/api/v1/auth/refresh` | Público | `RefreshTokenRequestDto` | `200 OK` → `ApiResponse<TokenResponseDto>` | Rotación de tokens (nuevo par access/refresh). |
| `POST` | `/api/v1/auth/logout` | Público | `RefreshTokenRequestDto` | `204 No Content` (sin body) | Revocación del refresh token. |
| `POST` | `/api/v1/auth/register` | Público | `CreateUserRequestDto` | `201 Created` → `ApiResponse<UserResponseDto>` | Auto-registro de usuario. |

### 2.2. Módulo de Usuarios (`/api/v1/users`) - Protegido

| Método | Endpoint | Permiso Requerido | Request Body | Respuesta Exitosa | Descripción |
|---|---|---|---|---|---|
| `GET` | `/api/v1/users` | `READ.USER.PERMISSION` | Ninguno | `200 OK` → `ApiResponse<UserResponseDto[]>` | Listar todos los usuarios. |
| `GET` | `/api/v1/users/{id}` | `READ.USER.PERMISSION` | Ninguno | `200 OK` → `ApiResponse<UserResponseDto>` | Obtener usuario por ID. |
| `POST` | `/api/v1/users` | `CREATE.USER.PERMISSION` | `CreateUserRequestDto` | `201 Created` → `ApiResponse<UserResponseDto>` | Crear nuevo usuario administrativo. |
| `PUT` | `/api/v1/users/{id}` | `UPDATE.USER.PERMISSION` | `UpdateUserRequestDto` | `200 OK` → `ApiResponse<UserResponseDto>` | Actualizar datos completos del usuario. |
| `DELETE` | `/api/v1/users/{id}` | `DELETE.USER.PERMISSION` | Ninguno | `204 No Content` (sin body) | Eliminación permanente del usuario. |

---

## 3. Contratos TypeScript (DTOs e Interfaces)

Define estos tipos en tu capa de modelos o API client del frontend (`src/types/api.ts`):

```typescript
// Envelope genérico de respuesta
export interface ApiResponse<T = unknown> {
  success: boolean;
  status: number;
  message: string;
  data: T | null;
  errors?: Record<string, string> | null;
  correlationId?: string;
  timestamp: string;
}

// Payload emitido en Login y Refresh
export interface TokenResponseDto {
  accessToken: string;
  accessTokenExpiresAt: string; // ISO-8601 UTC (ej: "2026-10-28T16:45:00Z")
  refreshToken: string;
  refreshTokenExpiresAt: string; // ISO-8601 UTC (ej: "2026-11-04T16:30:00Z")
}

// Credenciales de login
export interface LoginRequestDto {
  email: string;
  password: string;
}

// Solicitud de renovación / cierre de sesión
export interface RefreshTokenRequestDto {
  refreshToken: string;
}

// Claims contenidos dentro del Access Token JWT
export interface DecodedJwtPayload {
  iss: string;             // Emisor: ej. "corebusiness-auth"
  aud: string | string[];  // Audiencia: ej. "corebusiness-api"
  sub: string;             // ID del usuario (número en string, ej. "1")
  email: string;           // Correo del usuario
  roles: string[];         // Roles asignados (ej. ["ADMIN", "SUPER_ADMIN"])
  permissions: string[];   // Permisos asignados (ej. ["CREATE.USER.PERMISSION", ...])
  iat: number;             // Timestamp de emisión (segundos)
  exp: number;             // Timestamp de expiración (segundos)
  jti: string;             // ID único del token
}

// Usuario autenticado en el estado del frontend
export interface AuthUser {
  id: number;
  email: string;
  roles: string[];
  permissions: string[];
}

// DTOs de Usuario (CRUD)
export interface CreateUserRequestDto {
  name: string;        // 2 a 100 caracteres
  lastname: string;    // 2 a 100 caracteres
  dni: string;         // 8 a 20 caracteres
  email: string;       // Formato email válido, máx 255
  password: string;    // 8 a 100 caracteres
}

export interface UpdateUserRequestDto {
  name: string;        // 2 a 100 caracteres
  lastname: string;    // 2 a 100 caracteres
  dni: string;         // 8 a 20 caracteres
  email: string;       // Formato email válido, máx 255
  password: string;    // 8 a 100 caracteres
}

export interface UserResponseDto {
  id: number;
  name: string;
  lastname: string;
  dni: string;
  email: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  passwordChangedAt: string;
  emailVerified: boolean;
}
```

---

## 4. Gestión del Token y Ciclo de Vida

### 4.1. Decodificación del Access Token (JWT)
El access token es un JWT estándar firmado con HS256. El frontend **no necesita verificar la firma criptográfica** (eso lo hace el backend en cada petición), pero sí debe decodificar el payload en base64 para extraer claims, roles y permisos:


```

### 4.2. Detección Proactiva de Expiración
El access token tiene una vigencia corta (~15 min). Para evitar enviar peticiones condenadas a fallar con 401, el frontend puede validar la expiración antes de disparar llamadas o renovarlo con anticipación (margen de 60 segundos):


### 4.3. Estrategia de Almacenamiento
* **Recomendada:** Almacenar el `accessToken` en memoria (variable de estado o store reactivo) y el `refreshToken` en una cookie `HttpOnly; Secure; SameSite=Strict` gestionada por el servidor/BFF si se usa SSR (Next.js / Nuxt).
  * Almacenar `accessToken`, `refreshToken`, `accessTokenExpiresAt` y `refreshTokenExpiresAt` en `localStorage` o `sessionStorage`.
  * Limpiar inmediatamente todos los datos de sesión al detectar refresh token expirado o en logout.

---

## 5. Implementación del Cliente HTTP e Interceptor con Cola

Uno de los problemas más comunes en el frontend ocurre cuando múltiples peticiones concurrentes reciben un 401: si todas intentan llamar a `/api/v1/auth/refresh` simultáneamente, la primera tendrá éxito y rotará el token, pero las demás fallarán porque el refresh token ya fue invalidado por la rotación del backend.

Para evitar esto, se implementa una **cola de peticiones en espera (Mutex / Queue Pattern)** en el interceptor de Axios (o Fetch equivalente).



---


---

## 7. Manejo de Roles y Permisos (RBAC en Frontend)

En el backend CoreBusiness:
* Los **roles** son identidades como `ADMIN` o `SUPER_ADMIN`.
* Los **permisos** son autorizaciones granulares con formato `ACCION.RECURSO.PERMISSION`:
  * `CREATE.USER.PERMISSION`
  * `READ.USER.PERMISSION`
  * `UPDATE.USER.PERMISSION`
  * `DELETE.USER.PERMISSION`






---

## 8. Servicio y UI del CRUD de Usuarios por Permisos

El módulo de usuarios (`/api/v1/users`) exige permisos exactos para cada operación. A continuación se define el servicio API y la lógica condicional para el frontend.



### 8.2. Mapeo Permisos <-> Controles de UI para el CRUD

| Acción UI | Permiso Requerido | Endpoint Backend | Comportamiento si el usuario NO tiene permiso |
|---|---|---|---|
| **Ver vista o menú de Usuarios** | `READ.USER.PERMISSION` | N/A (Frontend Router) | Ocultar del menú lateral y redirigir con 403 / Unauthorized en el Route Guard. |
| **Cargar tabla / listado** | `READ.USER.PERMISSION` | `GET /api/v1/users` | No ejecutar la petición; mostrar mensaje "Sin autorización para consultar usuarios". |
| **Botón "+ Nuevo Usuario"** | `CREATE.USER.PERMISSION` | N/A (UI) | Ocultar el botón o deshabilitarlo con tooltip explicativo. |
| **Modal / Formulario de Registro** | `CREATE.USER.PERMISSION` | `POST /api/v1/users` | Bloquear submit; manejar errores 403 con toast de notificación. |
| **Botón "Editar" en fila** | `UPDATE.USER.PERMISSION` | N/A (UI) | Ocultar o deshabilitar botón de edición en la tabla. |
| **Enviar actualización** | `UPDATE.USER.PERMISSION` | `PUT /api/v1/users/{id}` | Si se intenta llamar, capturar 403 y mostrar error "No tiene permisos para actualizar este usuario". |
| **Botón "Eliminar" en fila** | `DELETE.USER.PERMISSION` | N/A (UI) | Ocultar o deshabilitar botón rojo de eliminación. |
| **Confirmar eliminación** | `DELETE.USER.PERMISSION` | `DELETE /api/v1/users/{id}` | Validar confirmación y enviar DELETE; recordar que la respuesta es 204 No Content. |


## 9. Manejo de Errores Comunes de la API

| Código | Significado en CoreBusiness | Acción Recomendada en Frontend |
|---|---|---|
| **400 Bad Request** | Fallo de validación (`errors` con campos específicos). | Mostrar errores directamente debajo de cada input correspondiente en el formulario usando el mapa `error.response.data.errors`. |
| **401 Unauthorized** | Token ausente, firma no válida o token expirado. | El interceptor intenta renovar con `/api/v1/auth/refresh`. Si el refresh falla, redirigir a `/login`. |
| **403 Forbidden** | Usuario autenticado pero sin rol o permiso suficiente (`hasAuthority`). | Mostrar notificación o pantalla de acceso denegado ("No tiene permisos para ejecutar esta acción"). **No desloguear** al usuario. |
| **404 Not Found** | Usuario o recurso solicitado no existe. | Mostrar pantalla/mensaje de recurso no encontrado. |
| **409 Conflict** | Correo electrónico o DNI ya registrado (`UserAlreadyExistsException`). | Marcar el input de email o DNI en rojo con mensaje: "El correo o DNI ya se encuentra registrado". |
| **500 Internal Error** | Error inesperado en el servidor. | Mostrar toast genérico: "Ocurrió un error en el servidor. Por favor intente más tarde." |

---

## 10. Checklist de Implementación en el Frontend

- [ ] Contratos TypeScript agregados (`ApiResponse<T>`, `TokenResponseDto`, `UserResponseDto`, etc.).
- [ ] Interceptor de Axios configurado para inyectar `Authorization: Bearer <token>`.
- [ ] Interceptor de respuesta con manejo de concurrencia / cola en 401 para rotación de `refresh_token`.
- [ ] Función de logout que llame a `POST /api/v1/auth/logout` con `{ refreshToken }` y limpie el almacenamiento local sin importar si la red falla.
- [ ] Decodificador de JWT para extraer claims `sub`, `email`, `roles` y `permissions`.
- [ ] Hooks o helpers de RBAC (`hasPermission`, `hasRole`, `<Can>`).
- [ ] Vistas y botones del CRUD de usuarios protegidos y condicionados por `CREATE.USER.PERMISSION`, `READ.USER.PERMISSION`, `UPDATE.USER.PERMISSION` y `DELETE.USER.PERMISSION`.
- [ ] Manejo especial para respuestas `204 No Content` en DELETE y LOGOUT (no llamar a `.json()`).
