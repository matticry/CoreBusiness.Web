import { Injectable } from '@angular/core';
import { DecodedJwtPayload } from '../models/DecodedJwtPayload';
import { TokenResponseDto } from '../models/TokenResponseDto';

const REFRESH_TOKEN_KEY = 'corebusiness.refreshToken';
const REFRESH_TOKEN_EXPIRES_KEY = 'corebusiness.refreshTokenExpiresAt';

@Injectable({ providedIn: 'root' })
export class TokenService {
    private accessToken: string | null = null;
    private accessTokenExpiresAt = 0;

    setTokens(tokens: TokenResponseDto): void {
        this.accessToken = tokens.accessToken;
        this.accessTokenExpiresAt = this.resolveAccessTokenExpiry(tokens);

        localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
        localStorage.setItem(REFRESH_TOKEN_EXPIRES_KEY, tokens.refreshTokenExpiresAt);
    }

    getAccessToken(): string | null {
        return this.accessToken;
    }

    getRefreshToken(): string | null {
        return localStorage.getItem(REFRESH_TOKEN_KEY);
    }

    isAccessTokenUsable(marginSeconds = 0): boolean {
        return !!this.accessToken && this.accessTokenExpiresAt > Date.now() + marginSeconds * 1000;
    }

    isAccessTokenExpired(): boolean {
        return !this.isAccessTokenUsable();
    }

    hasValidRefreshToken(): boolean {
        const refreshToken = this.getRefreshToken();

        if (!refreshToken) {
            return false;
        }

        const expiresAt = localStorage.getItem(REFRESH_TOKEN_EXPIRES_KEY);
        const expiresAtMs = expiresAt ? Date.parse(expiresAt) : Number.NaN;

        return Number.isNaN(expiresAtMs) || expiresAtMs > Date.now();
    }

    decodeAccessToken(): DecodedJwtPayload | null {
        return this.decode(this.accessToken);
    }

    clear(): void {
        this.accessToken = null;
        this.accessTokenExpiresAt = 0;
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_EXPIRES_KEY);
    }

    private resolveAccessTokenExpiry(tokens: TokenResponseDto): number {
        const expiresAt = Date.parse(tokens.accessTokenExpiresAt);

        if (!Number.isNaN(expiresAt)) {
            return expiresAt;
        }

        const jwtExpiration = this.decode(tokens.accessToken)?.exp;

        return jwtExpiration ? jwtExpiration * 1000 : 0;
    }

    private decode(token: string | null): DecodedJwtPayload | null {
        if (!token) {
            return null;
        }

        try {
            const payload = token.split('.')[1];
            const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
            const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');

            return JSON.parse(atob(padded)) as DecodedJwtPayload;
        } catch {
            return null;
        }
    }
}
