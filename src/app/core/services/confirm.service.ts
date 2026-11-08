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
