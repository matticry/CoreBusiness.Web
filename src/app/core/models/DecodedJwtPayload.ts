export interface DecodedJwtPayload {
    iss?: string;
    aud?: string | string[];
    sub?: string;
    email?: string;
    roles?: string[];
    permissions?: string[];
    iat?: number;
    exp?: number;
    jti?: string;
}
