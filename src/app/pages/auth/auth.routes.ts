import { Routes } from '@angular/router';

export default [
    { path: 'access', loadComponent: () => import('./access').then((m) => m.Access), title: 'Acceso denegado' },
    { path: 'error', loadComponent: () => import('./error').then((m) => m.Error), title: 'Error' },
    { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login), title: 'Iniciar sesión' },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
] as Routes;
