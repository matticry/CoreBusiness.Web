import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const permissionGuard: CanActivateFn = (route) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (!auth.isAuthenticated()) {
        return router.createUrlTree(['/auth/login']);
    }

    const requiredPermission = route.data['permission'] as string | string[] | undefined;

    if (!requiredPermission) {
        return true;
    }

    const allowed = Array.isArray(requiredPermission) ? auth.hasAnyPermission(requiredPermission) : auth.hasPermission(requiredPermission);

    return allowed ? true : router.createUrlTree(['/auth/access']);
};
