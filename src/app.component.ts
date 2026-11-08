import { Loading } from '@/shared/loading/loading';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, Loading, ToastModule, ConfirmDialogModule],
    template: ` <router-outlet></router-outlet>
        <p-toast></p-toast>
        <p-confirmDialog></p-confirmDialog>
        <app-loading></app-loading>`
})
export class AppComponent {}
