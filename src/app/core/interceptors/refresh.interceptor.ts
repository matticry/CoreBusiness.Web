import type { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { SKIP_AUTH } from '../config/http-context';
import { AuthService } from '../services/auth.service';

const AUTH_ENDPOINTS = ['/auth/login', '/auth/refresh', '/auth/logout'];

export const refreshInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.context.get(SKIP_AUTH) || AUTH_ENDPOINTS.some((endpoint) => req.url.includes(endpoint))) {
        return next(req);
    }

    const auth = inject(AuthService);
    const router = inject(Router);

    const retryWithNewToken = (accessToken: string) => next(req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } }));

    const handleRefreshFailure = (error: unknown) => {
        auth.expireSession();
        const returnUrl = router.url.startsWith('/auth/') ? '/pages/users' : router.url;
        router.navigate(['/auth/login'], { queryParams: { returnUrl } });

        return throwError(() => error);
    };

    if (auth.shouldRefresh()) {
        return auth.refresh().pipe(
            switchMap((tokens) => retryWithNewToken(tokens.accessToken)),
            catchError(handleRefreshFailure)
        );
    }

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status !== 401) {
                return throwError(() => error);
            }

            return auth.refresh().pipe(
                switchMap((tokens) => retryWithNewToken(tokens.accessToken)),
                catchError(handleRefreshFailure)
            );
        })
    );
};
