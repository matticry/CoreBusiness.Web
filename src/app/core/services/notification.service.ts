import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

type Severity = 'success' | 'info' | 'warn' | 'error';

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
