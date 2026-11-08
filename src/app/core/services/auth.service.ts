import { HttpClient, HttpContext } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, finalize, map, Observable, of, shareReplay, tap, throwError } from 'rxjs';
import { API_URL } from '../config/api.config';
import { SILENT_ERROR, SKIP_AUTH } from '../config/http-context';
import { ApiResponse } from '../models/ApiResponse';
import { AuthUser } from '../models/AuthUser';
import { LoginRequestDto } from '../models/LoginRequestDto';
import { RefreshTokenRequestDto } from '../models/RefreshTokenRequestDto';
import { TokenResponseDto } from '../models/TokenResponseDto';
import { NotificationService } from './notification.service';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = inject(API_URL);
    private readonly tokens = inject(TokenService);
    private readonly notify = inject(NotificationService);

    private refreshRequest$: Observable<TokenResponseDto> | null = null;
    private sessionVersion = 0;
    private sessionExpiredNotified = false;

    private readonly userState = signal<AuthUser | null>(null);
    readonly user = this.userState.asReadonly();
    readonly roles = computed(() => this.userState()?.roles ?? []);
    readonly permissions = computed(() => this.userState()?.permissions ?? []);
    readonly isAuthenticated = computed(() => this.userState() !== null);

    login(email: string, password: string): Observable<TokenResponseDto> {
        const body: LoginRequestDto = { email, password };
        const version = ++this.sessionVersion;
        this.refreshRequest$ = null;

        return this.http
            .post<ApiResponse<TokenResponseDto>>(`${this.apiUrl}/auth/login`, body, {
                context: new HttpContext().set(SKIP_AUTH, true)
            })
            .pipe(
                map((response) => this.requireData(response)),
                tap((tokens) => this.startSession(tokens, version))
            );
    }

    refresh(): Observable<TokenResponseDto> {
        if (this.refreshRequest$) {
            return this.refreshRequest$;
        }

        const refreshToken = this.tokens.getRefreshToken();

        if (!refreshToken) {
            this.expireSession();

            return throwError(() => new Error('No hay un refresh token disponible.'));
        }

        const body: RefreshTokenRequestDto = { refreshToken };
        const version = this.sessionVersion;
        const request$ = this.http
            .post<ApiResponse<TokenResponseDto>>(`${this.apiUrl}/auth/refresh`, body, {
                context: new HttpContext().set(SKIP_AUTH, true).set(SILENT_ERROR, true)
            })
            .pipe(
                map((response) => this.requireData(response)),
                tap((tokens) => this.startSession(tokens, version)),
                catchError((error) => {
                    if (version === this.sessionVersion) {
                        this.expireSession();
                    }

                    return throwError(() => error);
                }),
                finalize(() => {
                    if (this.refreshRequest$ === request$) {
                        this.refreshRequest$ = null;
                    }
                }),
                shareReplay({ bufferSize: 1, refCount: false })
            );

        this.refreshRequest$ = request$;

        return this.refreshRequest$;
    }

    ensureSession(): Observable<boolean> {
        if (this.tokens.isAccessTokenUsable()) {
            if (!this.userState()) {
                this.userState.set(this.buildUser());
            }

            return of(true);
        }

        if (!this.tokens.hasValidRefreshToken()) {
            this.clearSession();

            return of(false);
        }

        return this.refresh().pipe(
            map(() => true),
            catchError(() => of(false))
        );
    }

    logout(): void {
        const refreshToken = this.tokens.getRefreshToken();
        this.sessionVersion++;
        this.refreshRequest$ = null;
        this.clearSession();

        if (!refreshToken) {
            return;
        }

        const body: RefreshTokenRequestDto = { refreshToken };

        this.http
            .post<void>(`${this.apiUrl}/auth/logout`, body, {
                context: new HttpContext().set(SKIP_AUTH, true).set(SILENT_ERROR, true)
            })
            .subscribe({ error: () => undefined });
    }

    hasPermission(permission: string): boolean {
        return this.permissions().includes(permission);
    }

    hasAnyPermission(permissions: string[]): boolean {
        return permissions.some((permission) => this.hasPermission(permission));
    }

    hasAllPermissions(permissions: string[]): boolean {
        return permissions.every((permission) => this.hasPermission(permission));
    }

    hasRole(role: string): boolean {
        return this.roles().includes(role);
    }

    hasAnyRole(roles: string[]): boolean {
        return roles.some((role) => this.hasRole(role));
    }

    shouldRefresh(): boolean {
        return this.tokens.hasValidRefreshToken() && !this.tokens.isAccessTokenUsable(60);
    }

    expireSession(): void {
        const hadSession = !!this.userState() || !!this.tokens.getRefreshToken();
        this.clearSession();

        if (!hadSession || this.sessionExpiredNotified) {
            return;
        }

        this.sessionExpiredNotified = true;
        this.notify.warn('Tu sesión ha expirado. Inicia sesión nuevamente.');
    }

    private startSession(tokens: TokenResponseDto, version: number): void {
        if (version !== this.sessionVersion) {
            return;
        }

        this.tokens.setTokens(tokens);
        this.userState.set(this.buildUser());
        this.sessionExpiredNotified = false;
    }

    private clearSession(): void {
        this.tokens.clear();
        this.userState.set(null);
    }

    private buildUser(): AuthUser | null {
        const payload = this.tokens.decodeAccessToken();

        if (!payload) {
            return null;
        }

        const id = Number(payload.sub);

        return {
            id: Number.isFinite(id) ? id : 0,
            email: payload.email ?? '',
            roles: payload.roles ?? [],
            permissions: payload.permissions ?? []
        };
    }

    private requireData<T>(response: ApiResponse<T>): T {
        if (!response.success || response.data === null) {
            throw new Error(response.message || 'La operación no fue exitosa.');
        }

        return response.data;
    }
}
