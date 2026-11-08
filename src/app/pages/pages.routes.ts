import { USER_PERMISSIONS } from '@/core/constants/permissions';
import { permissionGuard } from '@/core/guards/permission.guard';
import { Routes } from '@angular/router';

export default [
    { path: 'documentation', loadComponent: () => import('./documentation/documentation').then((m) => m.Documentation), title: 'Documentación' },
    { path: 'crud', loadComponent: () => import('./crud/crud').then((m) => m.Crud), title: 'CRUD' },
    { path: 'empty', loadComponent: () => import('./empty/empty').then((m) => m.Empty), title: 'Vacío' },
    {
        path: 'users',
        canActivate: [permissionGuard],
        data: { permission: USER_PERMISSIONS.READ },
        loadComponent: () => import('./user/user-list/user-list').then((m) => m.UserList),
        title: 'Usuarios'
    },
    { path: 'work-items', loadComponent: () => import('./work-items/work-items').then((m) => m.WorkItemsComponent), title: 'Items de trabajo' },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
