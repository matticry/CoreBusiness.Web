import type { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { SILENT_ERROR } from '../config/http-context';
import { NotificationService } from '../services/notification.service';
import { extractErrorMessage } from '../utils/http-error.util';

const LOGIN_ENDPOINT = '/auth/login';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const notify = inject(NotificationService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (req.context.get(SILENT_ERROR)) {
                return throwError(() => error);
            }

            const isLoginRequest = req.url.includes(LOGIN_ENDPOINT);
            const isHandledByRefresh = error.status === 401 && !isLoginRequest;

            if (!isHandledByRefresh) {
                notify.error(extractErrorMessage(error));
            }

            return throwError(() => error);
        })
    );
};
