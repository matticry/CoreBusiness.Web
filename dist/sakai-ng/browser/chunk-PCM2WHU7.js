import {
  API_URL
} from "./chunk-INDSNBJL.js";
import {
  HttpClient,
  HttpContext,
  HttpContextToken,
  MessageService
} from "./chunk-2J5W32J3.js";
import {
  Injectable,
  catchError,
  computed,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-I57DOXJD.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  messages = inject(MessageService);
  success(detail, summary = "\xC9xito") {
    this.show("success", summary, detail);
  }
  info(detail, summary = "Informaci\xF3n") {
    this.show("info", summary, detail);
  }
  warn(detail, summary = "Advertencia") {
    this.show("warn", summary, detail);
  }
  error(detail, summary = "Error") {
    this.show("error", summary, detail);
  }
  show(severity, summary, detail) {
    this.messages.add({ severity, summary, detail });
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/config/http-context.ts
var SKIP_AUTH = new HttpContextToken(() => false);
var SILENT_ERROR = new HttpContextToken(() => false);

// src/app/core/services/token.service.ts
var REFRESH_TOKEN_KEY = "corebusiness.refreshToken";
var REFRESH_TOKEN_EXPIRES_KEY = "corebusiness.refreshTokenExpiresAt";
var TokenService = class _TokenService {
  accessToken = null;
  accessTokenExpiresAt = 0;
  setTokens(tokens) {
    this.accessToken = tokens.accessToken;
    this.accessTokenExpiresAt = this.resolveAccessTokenExpiry(tokens);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
    localStorage.setItem(REFRESH_TOKEN_EXPIRES_KEY, tokens.refreshTokenExpiresAt);
  }
  getAccessToken() {
    return this.accessToken;
  }
  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }
  isAccessTokenUsable(marginSeconds = 0) {
    return !!this.accessToken && this.accessTokenExpiresAt > Date.now() + marginSeconds * 1e3;
  }
  isAccessTokenExpired() {
    return !this.isAccessTokenUsable();
  }
  hasValidRefreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return false;
    }
    const expiresAt = localStorage.getItem(REFRESH_TOKEN_EXPIRES_KEY);
    const expiresAtMs = expiresAt ? Date.parse(expiresAt) : Number.NaN;
    return Number.isNaN(expiresAtMs) || expiresAtMs > Date.now();
  }
  decodeAccessToken() {
    return this.decode(this.accessToken);
  }
  clear() {
    this.accessToken = null;
    this.accessTokenExpiresAt = 0;
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_EXPIRES_KEY);
  }
  resolveAccessTokenExpiry(tokens) {
    const expiresAt = Date.parse(tokens.accessTokenExpiresAt);
    if (!Number.isNaN(expiresAt)) {
      return expiresAt;
    }
    const jwtExpiration = this.decode(tokens.accessToken)?.exp;
    return jwtExpiration ? jwtExpiration * 1e3 : 0;
  }
  decode(token) {
    if (!token) {
      return null;
    }
    try {
      const payload = token.split(".")[1];
      const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
      const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
      return JSON.parse(atob(padded));
    } catch {
      return null;
    }
  }
  static \u0275fac = function TokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  apiUrl = inject(API_URL);
  tokens = inject(TokenService);
  notify = inject(NotificationService);
  refreshRequest$ = null;
  sessionVersion = 0;
  sessionExpiredNotified = false;
  userState = signal(null, ...ngDevMode ? [{ debugName: "userState" }] : []);
  user = this.userState.asReadonly();
  roles = computed(() => this.userState()?.roles ?? [], ...ngDevMode ? [{ debugName: "roles" }] : []);
  permissions = computed(() => this.userState()?.permissions ?? [], ...ngDevMode ? [{ debugName: "permissions" }] : []);
  isAuthenticated = computed(() => this.userState() !== null, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  login(email, password) {
    const body = { email, password };
    const version = ++this.sessionVersion;
    this.refreshRequest$ = null;
    return this.http.post(`${this.apiUrl}/auth/login`, body, {
      context: new HttpContext().set(SKIP_AUTH, true)
    }).pipe(map((response) => this.requireData(response)), tap((tokens) => this.startSession(tokens, version)));
  }
  refresh() {
    if (this.refreshRequest$) {
      return this.refreshRequest$;
    }
    const refreshToken = this.tokens.getRefreshToken();
    if (!refreshToken) {
      this.expireSession();
      return throwError(() => new Error("No hay un refresh token disponible."));
    }
    const body = { refreshToken };
    const version = this.sessionVersion;
    const request$ = this.http.post(`${this.apiUrl}/auth/refresh`, body, {
      context: new HttpContext().set(SKIP_AUTH, true).set(SILENT_ERROR, true)
    }).pipe(map((response) => this.requireData(response)), tap((tokens) => this.startSession(tokens, version)), catchError((error) => {
      if (version === this.sessionVersion) {
        this.expireSession();
      }
      return throwError(() => error);
    }), finalize(() => {
      if (this.refreshRequest$ === request$) {
        this.refreshRequest$ = null;
      }
    }), shareReplay({ bufferSize: 1, refCount: false }));
    this.refreshRequest$ = request$;
    return this.refreshRequest$;
  }
  ensureSession() {
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
    return this.refresh().pipe(map(() => true), catchError(() => of(false)));
  }
  logout() {
    const refreshToken = this.tokens.getRefreshToken();
    this.sessionVersion++;
    this.refreshRequest$ = null;
    this.clearSession();
    if (!refreshToken) {
      return;
    }
    const body = { refreshToken };
    this.http.post(`${this.apiUrl}/auth/logout`, body, {
      context: new HttpContext().set(SKIP_AUTH, true).set(SILENT_ERROR, true)
    }).subscribe({ error: () => void 0 });
  }
  hasPermission(permission) {
    return this.permissions().includes(permission);
  }
  hasAnyPermission(permissions) {
    return permissions.some((permission) => this.hasPermission(permission));
  }
  hasAllPermissions(permissions) {
    return permissions.every((permission) => this.hasPermission(permission));
  }
  hasRole(role) {
    return this.roles().includes(role);
  }
  hasAnyRole(roles) {
    return roles.some((role) => this.hasRole(role));
  }
  shouldRefresh() {
    return this.tokens.hasValidRefreshToken() && !this.tokens.isAccessTokenUsable(60);
  }
  expireSession() {
    const hadSession = !!this.userState() || !!this.tokens.getRefreshToken();
    this.clearSession();
    if (!hadSession || this.sessionExpiredNotified) {
      return;
    }
    this.sessionExpiredNotified = true;
    this.notify.warn("Tu sesi\xF3n ha expirado. Inicia sesi\xF3n nuevamente.");
  }
  startSession(tokens, version) {
    if (version !== this.sessionVersion) {
      return;
    }
    this.tokens.setTokens(tokens);
    this.userState.set(this.buildUser());
    this.sessionExpiredNotified = false;
  }
  clearSession() {
    this.tokens.clear();
    this.userState.set(null);
  }
  buildUser() {
    const payload = this.tokens.decodeAccessToken();
    if (!payload) {
      return null;
    }
    const id = Number(payload.sub);
    return {
      id: Number.isFinite(id) ? id : 0,
      email: payload.email ?? "",
      roles: payload.roles ?? [],
      permissions: payload.permissions ?? []
    };
  }
  requireData(response) {
    if (!response.success || response.data === null) {
      throw new Error(response.message || "La operaci\xF3n no fue exitosa.");
    }
    return response.data;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SKIP_AUTH,
  SILENT_ERROR,
  NotificationService,
  TokenService,
  AuthService
};
//# sourceMappingURL=chunk-PCM2WHU7.js.map
