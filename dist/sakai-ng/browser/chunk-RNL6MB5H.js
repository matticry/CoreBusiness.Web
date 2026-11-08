import {
  Injectable,
  Subject,
  computed,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-I57DOXJD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/layout/service/layout.service.ts
var LayoutService = class _LayoutService {
  _config = {
    preset: "Aura",
    primary: "emerald",
    surface: null,
    darkTheme: false,
    menuMode: "static"
  };
  _state = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
  };
  layoutConfig = signal(this._config, ...ngDevMode ? [{ debugName: "layoutConfig" }] : []);
  layoutState = signal(this._state, ...ngDevMode ? [{ debugName: "layoutState" }] : []);
  configUpdate = new Subject();
  overlayOpen = new Subject();
  menuSource = new Subject();
  resetSource = new Subject();
  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();
  configUpdate$ = this.configUpdate.asObservable();
  overlayOpen$ = this.overlayOpen.asObservable();
  theme = computed(() => this.layoutConfig()?.darkTheme ? "light" : "dark", ...ngDevMode ? [{ debugName: "theme" }] : []);
  isSidebarActive = computed(() => this.layoutState().overlayMenuActive || this.layoutState().staticMenuMobileActive, ...ngDevMode ? [{ debugName: "isSidebarActive" }] : []);
  isDarkTheme = computed(() => this.layoutConfig().darkTheme, ...ngDevMode ? [{ debugName: "isDarkTheme" }] : []);
  getPrimary = computed(() => this.layoutConfig().primary, ...ngDevMode ? [{ debugName: "getPrimary" }] : []);
  getSurface = computed(() => this.layoutConfig().surface, ...ngDevMode ? [{ debugName: "getSurface" }] : []);
  isOverlay = computed(() => this.layoutConfig().menuMode === "overlay", ...ngDevMode ? [{ debugName: "isOverlay" }] : []);
  transitionComplete = signal(false, ...ngDevMode ? [{ debugName: "transitionComplete" }] : []);
  initialized = false;
  constructor() {
    effect(() => {
      const config = this.layoutConfig();
      if (config) {
        this.onConfigUpdate();
      }
    });
    effect(() => {
      const config = this.layoutConfig();
      if (!this.initialized || !config) {
        this.initialized = true;
        return;
      }
      this.handleDarkModeTransition(config);
    });
  }
  handleDarkModeTransition(config) {
    if (document.startViewTransition) {
      this.startViewTransition(config);
    } else {
      this.toggleDarkMode(config);
      this.onTransitionEnd();
    }
  }
  startViewTransition(config) {
    const transition = document.startViewTransition(() => {
      this.toggleDarkMode(config);
    });
    transition.ready.then(() => {
      this.onTransitionEnd();
    }).catch(() => {
    });
  }
  toggleDarkMode(config) {
    const _config = config || this.layoutConfig();
    if (_config.darkTheme) {
      document.documentElement.classList.add("app-dark");
    } else {
      document.documentElement.classList.remove("app-dark");
    }
  }
  onTransitionEnd() {
    this.transitionComplete.set(true);
    setTimeout(() => {
      this.transitionComplete.set(false);
    });
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { overlayMenuActive: !this.layoutState().overlayMenuActive }));
      if (this.layoutState().overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { staticMenuDesktopInactive: !this.layoutState().staticMenuDesktopInactive }));
    } else {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { staticMenuMobileActive: !this.layoutState().staticMenuMobileActive }));
      if (this.layoutState().staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isMobile() {
    return !this.isDesktop();
  }
  onConfigUpdate() {
    this._config = __spreadValues({}, this.layoutConfig());
    this.configUpdate.next(this.layoutConfig());
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LayoutService
};
//# sourceMappingURL=chunk-RNL6MB5H.js.map
