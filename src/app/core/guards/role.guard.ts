import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (!auth.isAuthenticated()) {
        return router.createUrlTree(['/auth/login']);
    }

    const requiredRoles = route.data['roles'] as string | string[] | undefined;
    const roles = typeof requiredRoles === 'string' ? [requiredRoles] : requiredRoles;

    if (!roles?.length) {
        return true;
    }

    return auth.hasAnyRole(roles) ? true : router.createUrlTree(['/auth/access']);
};
