import { AbstractControl } from '@angular/forms';

const ERROR_MESSAGES: Record<string, (error: any) => string> = {
    required: () => 'Este campo es requerido',
    email: () => 'Email inválido',
    minlength: (error) => `Mínimo ${error.requiredLength} caracteres`,
    maxlength: (error) => `Máximo ${error.requiredLength} caracteres`,
    pattern: () => 'Formato inválido',
    min: (error) => `Valor mínimo: ${error.min}`,
    max: (error) => `Valor máximo: ${error.max}`,
    server: (error) => error.server ?? 'Valor inválido'
};

export function getControlError(control: AbstractControl | null): string {
    const errors = control?.errors;

    if (!errors) {
        return '';
    }

    const key = Object.keys(errors).find((errorKey) => errorKey in ERROR_MESSAGES);

    return key ? ERROR_MESSAGES[key](errors[key]) : 'Valor inválido';
}
