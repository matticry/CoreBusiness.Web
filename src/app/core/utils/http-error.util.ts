import { HttpErrorResponse } from '@angular/common/http';

export function extractErrorMessage(error: HttpErrorResponse, fallback = 'Ocurrió un error inesperado.'): string {
    if (error.status === 0) {
        return 'Sin conexión con el servidor.';
    }

    const apiMessage = error.error?.message ?? error.error?.Message;

    if (apiMessage) {
        return apiMessage;
    }

    switch (error.status) {
        case 400:
            return 'Revisa los datos ingresados.';
        case 403:
            return 'No tienes permisos para ejecutar esta acción.';
        case 404:
            return 'El recurso solicitado no existe.';
        case 409:
            return 'El correo o DNI ya se encuentra registrado.';
        case 500:
            return 'Ocurrió un error en el servidor. Por favor intenta más tarde.';
        default:
            return fallback;
    }
}
