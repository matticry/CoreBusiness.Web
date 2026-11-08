import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (_route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    return auth.ensureSession().pipe(map((authenticated) => (authenticated ? true : router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } }))));
};
