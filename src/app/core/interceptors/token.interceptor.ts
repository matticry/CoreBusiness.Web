import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SKIP_AUTH } from '../config/http-context';
import { TokenService } from '../services/token.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.context.get(SKIP_AUTH)) {
        return next(req);
    }

    const tokens = inject(TokenService);
    const token = tokens.getAccessToken();

    if (!token || tokens.isAccessTokenExpired()) {
        return next(req);
    }

    return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
};
