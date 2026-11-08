import {
  AppConfigurator,
  AppFloatingConfigurator,
  Qr,
  StyleClass,
  StyleClassModule
} from "./chunk-TBU7MZSA.js";
import {
  Documentation
} from "./chunk-HISKIYFX.js";
import {
  ChartModule,
  Divider,
  DividerModule,
  Menu,
  MenuModule,
  UIChart
} from "./chunk-MJWBBMDU.js";
import {
  LayoutService
} from "./chunk-RNL6MB5H.js";
import {
  DomRendererFactory2,
  DomSanitizer,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling
} from "./chunk-5RZFN4DP.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-SME66JCD.js";
import {
  ProductService,
  Toast,
  ToastModule
} from "./chunk-IHO37IIH.js";
import {
  USER_PERMISSIONS
} from "./chunk-ONTYLXLW.js";
import {
  AuthService,
  NotificationService,
  SILENT_ERROR,
  SKIP_AUTH,
  TokenService
} from "./chunk-PCM2WHU7.js";
import "./chunk-SEWUGS4X.js";
import "./chunk-INDSNBJL.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-XMHTXQJQ.js";
import "./chunk-2WWKO7OF.js";
import "./chunk-PERVHQN2.js";
import {
  Button,
  ButtonDirective,
  ButtonModule,
  Ripple,
  RippleModule,
  providePrimeNG
} from "./chunk-2IMBOICD.js";
import {
  ConfirmationService,
  HTTP_INTERCEPTORS,
  MessageService,
  provideHttpClient,
  withFetch,
  withInterceptors
} from "./chunk-2J5W32J3.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-7WUWB5XB.js";
import {
  CommonModule,
  CurrencyPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-MA4JJ4RV.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  SkipSelf,
  ViewChild,
  catchError,
  computed,
  debounceTime,
  filter,
  finalize,
  inject,
  makeEnvironmentProviders,
  map,
  performanceMarkFeature,
  setClassMetadata,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-I57DOXJD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-C6IH26ZD.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/layout/component/app.topbar.ts
var _c0 = (a0, a1) => ({ "pi ": true, "pi-moon": a0, "pi-sun": a1 });
var AppTopbar = class _AppTopbar {
  layoutService;
  items;
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state2) => __spreadProps(__spreadValues({}, state2), { darkTheme: !state2.darkTheme }));
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)(\u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["app-topbar"]], decls: 23, vars: 6, consts: [[1, "layout-topbar"], [1, "layout-topbar-logo-container"], [1, "layout-menu-button", "layout-topbar-action", 3, "click"], [1, "pi", "pi-bars"], ["routerLink", "/", 1, "layout-topbar-logo"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "layout-topbar-actions"], [1, "layout-config-menu"], ["type", "button", 1, "layout-topbar-action", 3, "click"], [3, "ngClass"], [1, "relative"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-action", "layout-topbar-action-highlight", 3, "hideOnOutsideClick"], [1, "pi", "pi-palette"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-menu-button", "layout-topbar-action", 3, "hideOnOutsideClick"], [1, "pi", "pi-ellipsis-v"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_2_listener() {
        return ctx.layoutService.onMenuToggle();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementStart(7, "mask", 7);
      \u0275\u0275element(8, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "g", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "MATEO ERAS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "button", 13);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_15_listener() {
        return ctx.toggleDarkMode();
      });
      \u0275\u0275element(16, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 15)(18, "button", 16);
      \u0275\u0275element(19, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-configurator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 18);
      \u0275\u0275element(22, "i", 19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c0, ctx.layoutService.isDarkTheme(), !ctx.layoutService.isDarkTheme()));
      \u0275\u0275advance(2);
      \u0275\u0275property("hideOnOutsideClick", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("hideOnOutsideClick", true);
    }
  }, dependencies: [RouterModule, RouterLink, CommonModule, NgClass, StyleClassModule, StyleClass, AppConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppTopbar, [{
    type: Component,
    args: [{
      selector: "app-topbar",
      standalone: true,
      imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
      template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                        fill="var(--primary-color)"
                    />
                    <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                        <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                    </mask>
                    <g mask="url(#mask0_1413_1551)">
                        <path
                            d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                            fill="var(--primary-color)"
                        />
                    </g>
                </svg>
                <span>MATEO ERAS</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>
        </div>
    </div>`
    }]
  }], () => [{ type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "src/app/layout/component/app.topbar.ts", lineNumber: 67 });
})();

// src/app/layout/component/app.menuitem.ts
var _c02 = ["app-menuitem", ""];
var _c1 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
function AppMenuitem_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.label);
  }
}
function AppMenuitem_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitem_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function AppMenuitem_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_2_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.styleClass);
    \u0275\u0275attribute("href", ctx_r0.item.url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitem_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function AppMenuitem_a_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_3_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.styleClass)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(14, _c1))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams);
    \u0275\u0275attribute("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r4["badgeClass"]);
    \u0275\u0275property("item", child_r4)("index", i_r5)("parentKey", ctx_r0.key);
  }
}
function AppMenuitem_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, AppMenuitem_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@children", ctx_r0.submenuAnimation);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.item.items);
  }
}
var AppMenuitem = class _AppMenuitem {
  router;
  layoutService;
  item;
  index;
  root;
  parentKey;
  active = false;
  menuSourceSubscription;
  menuResetSubscription;
  key = "";
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + "-") ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + "-")) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + "-" + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
    if (activeRoute) {
      this.layoutService.onMenuStateChange({ key: this.key, routeEvent: true });
    }
  }
  itemClick(event) {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }
    if (this.item.items) {
      this.active = !this.active;
    }
    this.layoutService.onMenuStateChange({ key: this.key });
  }
  get submenuAnimation() {
    return this.root ? "expanded" : this.active ? "expanded" : "collapsed";
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, features: [\u0275\u0275ProvidersFeature([LayoutService])], attrs: _c02, decls: 5, vars: 4, consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275template(1, AppMenuitem_div_1_Template, 2, 1, "div", 0)(2, AppMenuitem_a_2_Template, 5, 6, "a", 1)(3, AppMenuitem_a_3_Template, 5, 15, "a", 2)(4, AppMenuitem_ul_4_Template, 2, 2, "ul", 3);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.root && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  }, dependencies: [_AppMenuitem, CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, RippleModule, Ripple], encapsulation: 2, data: { animation: [
    trigger("children", [
      state("collapsed", style({
        height: "0"
      })),
      state("expanded", style({
        height: "*"
      })),
      transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenuitem, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[app-menuitem]",
      imports: [CommonModule, RouterModule, RippleModule],
      template: `
        <ng-container>
            <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">{{ item.label }}</div>
            <a *ngIf="(!item.routerLink || item.items) && item.visible !== false" [attr.href]="item.url" (click)="itemClick($event)" [ngClass]="item.styleClass" [attr.target]="item.target" tabindex="0" pRipple>
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>
            <a
                *ngIf="item.routerLink && !item.items && item.visible !== false"
                (click)="itemClick($event)"
                [ngClass]="item.styleClass"
                [routerLink]="item.routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [queryParams]="item.queryParams"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>

            <ul *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child['badgeClass']"></li>
                </ng-template>
            </ul>
        </ng-container>
    `,
      animations: [
        trigger("children", [
          state("collapsed", style({
            height: "0"
          })),
          state("expanded", style({
            height: "*"
          })),
          transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
        ])
      ],
      providers: [LayoutService]
    }]
  }], () => [{ type: Router }, { type: LayoutService }], { item: [{
    type: Input
  }], index: [{
    type: Input
  }], root: [{
    type: Input
  }, {
    type: HostBinding,
    args: ["class.layout-root-menuitem"]
  }], parentKey: [{
    type: Input
  }], activeClass: [{
    type: HostBinding,
    args: ["class.active-menuitem"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "src/app/layout/component/app.menuitem.ts", lineNumber: 72 });
})();

// src/app/layout/component/app-menu/app-menu.ts
var _forTrack0 = ($index, $item) => $item.label;
function AppMenu_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const \u0275$index_3_r3 = ctx_r0.$index;
    \u0275\u0275property("item", item_r2)("index", \u0275$index_3_r3)("root", true);
  }
}
function AppMenu_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 2);
  }
}
function AppMenu_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppMenu_For_2_Conditional_0_Template, 1, 3, "li", 1)(1, AppMenu_For_2_Conditional_1_Template, 1, 0, "li", 2);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(!item_r2.separator ? 0 : 1);
  }
}
var AppMenu = class _AppMenu {
  auth = inject(AuthService);
  router = inject(Router);
  model = computed(() => this.buildMenu(), ...ngDevMode ? [{ debugName: "model" }] : []);
  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }
  buildMenu() {
    const groups = [
      {
        label: "Gesti\xF3n",
        items: [
          {
            label: "Usuarios",
            icon: "pi pi-fw pi-users",
            routerLink: ["/pages/users"],
            isAuthenticated: true,
            requiredPermissions: [USER_PERMISSIONS.READ]
          },
          {
            label: "Items de trabajo",
            icon: "pi pi-fw pi-list-check",
            routerLink: ["/pages/work-items"],
            isAuthenticated: true
          }
        ]
      },
      {
        label: "Sesi\xF3n",
        items: [
          {
            label: "Cerrar sesi\xF3n",
            icon: "pi pi-fw pi-sign-out",
            isAuthenticated: true,
            command: () => this.logout()
          }
        ]
      }
    ];
    return groups.map((group) => __spreadProps(__spreadValues({}, group), { items: group.items?.filter((item) => this.isVisible(item)) })).filter((group) => !!group.items?.length);
  }
  isVisible(item) {
    const customItem = item;
    if (customItem.isAuthenticated && !this.auth.isAuthenticated()) {
      return false;
    }
    if (customItem.requiredPermissions?.length && !this.auth.hasAnyPermission(customItem.requiredPermissions)) {
      return false;
    }
    if (customItem.requiredRoles?.length && !this.auth.hasAnyRole(customItem.requiredRoles)) {
      return false;
    }
    return true;
  }
  static \u0275fac = function AppMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], decls: 3, vars: 0, consts: [[1, "layout-menu"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275repeaterCreate(1, AppMenu_For_2_Template, 2, 1, null, null, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.model());
    }
  }, dependencies: [AppMenuitem], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenu, [{
    type: Component,
    args: [{ selector: "app-menu", imports: [AppMenuitem], changeDetection: ChangeDetectionStrategy.OnPush, template: '<ul class="layout-menu">\n    @for (item of model(); track item.label; let i = $index) { @if (!item.separator) {\n    <li app-menuitem [item]="item" [index]="i" [root]="true"></li>\n    } @else {\n    <li class="menu-separator"></li>\n    } }\n</ul>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "src/app/layout/component/app-menu/app-menu.ts", lineNumber: 16 });
})();

// src/app/layout/component/app.sidebar.ts
var AppSidebar = class _AppSidebar {
  el;
  constructor(el) {
    this.el = el;
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["app-sidebar"]], decls: 2, vars: 0, consts: [[1, "layout-sidebar"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-menu");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [AppMenu], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebar, [{
    type: Component,
    args: [{
      selector: "app-sidebar",
      standalone: true,
      imports: [AppMenu],
      template: ` <div class="layout-sidebar">
        <app-menu></app-menu>
    </div>`
    }]
  }], () => [{ type: ElementRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/layout/component/app.sidebar.ts", lineNumber: 12 });
})();

// src/app/layout/component/app.footer.ts
var AppFooter = class _AppFooter {
  static \u0275fac = function AppFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppFooter)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFooter, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "layout-footer"], ["href", "https://primeng.org", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "font-bold", "hover:underline"]], template: function AppFooter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1, " SAKAI by ");
      \u0275\u0275domElementStart(2, "a", 1);
      \u0275\u0275text(3, "PrimeNG");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppFooter, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-footer",
      template: `<div class="layout-footer">
        SAKAI by
        <a href="https://primeng.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">PrimeNG</a>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFooter, { className: "AppFooter", filePath: "src/app/layout/component/app.footer.ts", lineNumber: 11 });
})();

// src/app/layout/component/app.layout.ts
var AppLayout = class _AppLayout {
  layoutService;
  renderer;
  router;
  overlayMenuOpenSubscription;
  menuOutsideClickListener;
  appSidebar;
  appTopBar;
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          if (this.isOutsideClicked(event)) {
            this.hideMenu();
          }
        });
      }
      if (this.layoutService.layoutState().staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
    });
  }
  isOutsideClicked(event) {
    const sidebarEl = document.querySelector(".layout-sidebar");
    const topbarEl = document.querySelector(".layout-menu-button");
    const eventTarget = event.target;
    return !(sidebarEl?.isSameNode(eventTarget) || sidebarEl?.contains(eventTarget) || topbarEl?.isSameNode(eventTarget) || topbarEl?.contains(eventTarget));
  }
  hideMenu() {
    this.layoutService.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  get containerClass() {
    return {
      "layout-overlay": this.layoutService.layoutConfig().menuMode === "overlay",
      "layout-static": this.layoutService.layoutConfig().menuMode === "static",
      "layout-static-inactive": this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === "static",
      "layout-overlay-active": this.layoutService.layoutState().overlayMenuActive,
      "layout-mobile-active": this.layoutService.layoutState().staticMenuMobileActive
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], viewQuery: function AppLayout_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(AppSidebar, 5);
      \u0275\u0275viewQuery(AppTopbar, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appSidebar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appTopBar = _t.first);
    }
  }, decls: 8, vars: 1, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask", "animate-fadein"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-topbar")(2, "app-sidebar");
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-footer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass);
    }
  }, dependencies: [CommonModule, NgClass, AppTopbar, AppSidebar, RouterModule, RouterOutlet, AppFooter], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayout, [{
    type: Component,
    args: [{
      selector: "app-layout",
      standalone: true,
      imports: [CommonModule, AppTopbar, AppSidebar, RouterModule, AppFooter],
      template: `<div class="layout-wrapper" [ngClass]="containerClass">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-outlet></router-outlet>
            </div>
            <app-footer></app-footer>
        </div>
        <div class="layout-mask animate-fadein"></div>
    </div> `
    }]
  }], () => [{ type: LayoutService }, { type: Renderer2 }, { type: Router }], { appSidebar: [{
    type: ViewChild,
    args: [AppSidebar]
  }], appTopBar: [{
    type: ViewChild,
    args: [AppTopbar]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "src/app/layout/component/app.layout.ts", lineNumber: 26 });
})();

// src/app/pages/dashboard/components/notificationswidget.ts
var NotificationsWidget = class _NotificationsWidget {
  items = [
    { label: "Add New", icon: "pi pi-fw pi-plus" },
    { label: "Remove", icon: "pi pi-fw pi-trash" }
  ];
  static \u0275fac = function NotificationsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsWidget, selectors: [["app-notifications-widget"]], decls: 65, vars: 2, consts: [["menu", ""], [1, "card"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "font-semibold", "text-xl"], ["pButton", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "p-button-plain", 3, "click"], [3, "popup", "model"], [1, "block", "text-muted-color", "font-medium", "mb-4"], [1, "p-0", "mx-0", "mt-0", "mb-6", "list-none"], [1, "flex", "items-center", "py-2", "border-b", "border-surface"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-blue-100", "dark:bg-blue-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-dollar", "text-xl!", "text-blue-500"], [1, "text-surface-900", "dark:text-surface-0", "leading-normal"], [1, "text-surface-700", "dark:text-surface-100"], [1, "text-primary", "font-bold"], [1, "flex", "items-center", "py-2"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-orange-100", "dark:bg-orange-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-download", "text-xl!", "text-orange-500"], [1, "text-surface-700", "dark:text-surface-100", "leading-normal"], [1, "p-0", "m-0", "list-none", "mb-6"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-pink-100", "dark:bg-pink-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-question", "text-xl!", "text-pink-500"], [1, "p-0", "m-0", "list-none"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-green-100", "dark:bg-green-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-arrow-up", "text-xl!", "text-green-500"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-purple-100", "dark:bg-purple-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-heart", "text-xl!", "text-purple-500"]], template: function NotificationsWidget_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "button", 4);
      \u0275\u0275listener("click", function NotificationsWidget_Template_button_click_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        const menu_r2 = \u0275\u0275reference(7);
        return \u0275\u0275resetView(menu_r2.toggle($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "p-menu", 5, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "TODAY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 7)(11, "li", 8)(12, "div", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "Richard Jones ");
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17, "has purchased a blue t-shirt for ");
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "$79.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "li", 14)(21, "div", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 17);
      \u0275\u0275text(24, "Your request for withdrawal of ");
      \u0275\u0275elementStart(25, "span", 13);
      \u0275\u0275text(26, "$2500.00");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " has been initiated.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "span", 6);
      \u0275\u0275text(29, "YESTERDAY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "ul", 18)(31, "li", 8)(32, "div", 9);
      \u0275\u0275element(33, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 11);
      \u0275\u0275text(35, "Keyser Wick ");
      \u0275\u0275elementStart(36, "span", 12);
      \u0275\u0275text(37, "has purchased a black jacket for ");
      \u0275\u0275elementStart(38, "span", 13);
      \u0275\u0275text(39, "$59.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "li", 8)(41, "div", 19);
      \u0275\u0275element(42, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 11);
      \u0275\u0275text(44, "Jane Davis ");
      \u0275\u0275elementStart(45, "span", 12);
      \u0275\u0275text(46, "has posted a new questions about your product.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "span", 6);
      \u0275\u0275text(48, "LAST WEEK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "ul", 21)(50, "li", 8)(51, "div", 22);
      \u0275\u0275element(52, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 11);
      \u0275\u0275text(54, "Your revenue has increased by ");
      \u0275\u0275elementStart(55, "span", 13);
      \u0275\u0275text(56, "%25");
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, ".");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li", 8)(59, "div", 24);
      \u0275\u0275element(60, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 11)(62, "span", 13);
      \u0275\u0275text(63, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " users have added your products to their wishlist.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("popup", true)("model", ctx.items);
    }
  }, dependencies: [ButtonModule, ButtonDirective, MenuModule, Menu], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-notifications-widget",
      imports: [ButtonModule, MenuModule],
      template: `<div class="card">
        <div class="flex items-center justify-between mb-6">
            <div class="font-semibold text-xl">Notifications</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>

        <span class="block text-muted-color font-medium mb-4">TODAY</span>
        <ul class="p-0 mx-0 mt-0 mb-6 list-none">
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-dollar text-xl! text-blue-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal"
                    >Richard Jones
                    <span class="text-surface-700 dark:text-surface-100">has purchased a blue t-shirt for <span class="text-primary font-bold">$79.00</span></span>
                </span>
            </li>
            <li class="flex items-center py-2">
                <div class="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-download text-xl! text-orange-500"></i>
                </div>
                <span class="text-surface-700 dark:text-surface-100 leading-normal">Your request for withdrawal of <span class="text-primary font-bold">$2500.00</span> has been initiated.</span>
            </li>
        </ul>

        <span class="block text-muted-color font-medium mb-4">YESTERDAY</span>
        <ul class="p-0 m-0 list-none mb-6">
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-dollar text-xl! text-blue-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal"
                    >Keyser Wick
                    <span class="text-surface-700 dark:text-surface-100">has purchased a black jacket for <span class="text-primary font-bold">$59.00</span></span>
                </span>
            </li>
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-pink-100 dark:bg-pink-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-question text-xl! text-pink-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal"
                    >Jane Davis
                    <span class="text-surface-700 dark:text-surface-100">has posted a new questions about your product.</span>
                </span>
            </li>
        </ul>
        <span class="block text-muted-color font-medium mb-4">LAST WEEK</span>
        <ul class="p-0 m-0 list-none">
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-arrow-up text-xl! text-green-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal">Your revenue has increased by <span class="text-primary font-bold">%25</span>.</span>
            </li>
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-heart text-xl! text-purple-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal"><span class="text-primary font-bold">12</span> users have added your products to their wishlist.</span>
            </li>
        </ul>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsWidget, { className: "NotificationsWidget", filePath: "src/app/pages/dashboard/components/notificationswidget.ts", lineNumber: 75 });
})();

// src/app/pages/dashboard/components/statswidget.ts
var StatsWidget = class _StatsWidget {
  static \u0275fac = function StatsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsWidget, selectors: [["app-stats-widget"]], decls: 56, vars: 0, consts: [[1, "col-span-12", "lg:col-span-6", "xl:col-span-3"], [1, "card", "mb-0"], [1, "flex", "justify-between", "mb-4"], [1, "block", "text-muted-color", "font-medium", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl"], [1, "flex", "items-center", "justify-center", "bg-blue-100", "dark:bg-blue-400/10", "rounded-border", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-shopping-cart", "text-blue-500", "text-xl!"], [1, "text-primary", "font-medium"], [1, "text-muted-color"], [1, "flex", "items-center", "justify-center", "bg-orange-100", "dark:bg-orange-400/10", "rounded-border", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-dollar", "text-orange-500", "text-xl!"], [1, "flex", "items-center", "justify-center", "bg-cyan-100", "dark:bg-cyan-400/10", "rounded-border", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-users", "text-cyan-500", "text-xl!"], [1, "flex", "items-center", "justify-center", "bg-purple-100", "dark:bg-purple-400/10", "rounded-border", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-comment", "text-purple-500", "text-xl!"]], template: function StatsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "span", 3);
      \u0275\u0275text(5, "Orders");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 4);
      \u0275\u0275text(7, "152");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 5);
      \u0275\u0275domElement(9, "i", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "span", 7);
      \u0275\u0275text(11, "24 new ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "span", 8);
      \u0275\u0275text(13, "since last visit");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "div", 0)(15, "div", 1)(16, "div", 2)(17, "div")(18, "span", 3);
      \u0275\u0275text(19, "Revenue");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 4);
      \u0275\u0275text(21, "$2.100");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 9);
      \u0275\u0275domElement(23, "i", 10);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "span", 7);
      \u0275\u0275text(25, "%52+ ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "span", 8);
      \u0275\u0275text(27, "since last week");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(28, "div", 0)(29, "div", 1)(30, "div", 2)(31, "div")(32, "span", 3);
      \u0275\u0275text(33, "Customers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "div", 4);
      \u0275\u0275text(35, "28441");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "div", 11);
      \u0275\u0275domElement(37, "i", 12);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "span", 7);
      \u0275\u0275text(39, "520 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "span", 8);
      \u0275\u0275text(41, "newly registered");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(42, "div", 0)(43, "div", 1)(44, "div", 2)(45, "div")(46, "span", 3);
      \u0275\u0275text(47, "Comments");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "div", 4);
      \u0275\u0275text(49, "152 Unread");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(50, "div", 13);
      \u0275\u0275domElement(51, "i", 14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(52, "span", 7);
      \u0275\u0275text(53, "85 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "span", 8);
      \u0275\u0275text(55, "responded");
      \u0275\u0275domElementEnd()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatsWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-stats-widget",
      imports: [CommonModule],
      template: `<div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Orders</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">24 new </span>
                <span class="text-muted-color">since last visit</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Revenue</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-orange-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">%52+ </span>
                <span class="text-muted-color">since last week</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Customers</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-cyan-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">520 </span>
                <span class="text-muted-color">newly registered</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Comments</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">85 </span>
                <span class="text-muted-color">responded</span>
            </div>
        </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsWidget, { className: "StatsWidget", filePath: "src/app/pages/dashboard/components/statswidget.ts", lineNumber: 69 });
})();

// src/app/pages/dashboard/components/recentsaleswidget.ts
function RecentSalesWidget_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 5);
    \u0275\u0275text(4, "Name ");
    \u0275\u0275element(5, "p-sortIcon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 7);
    \u0275\u0275text(7, "Price ");
    \u0275\u0275element(8, "p-sortIcon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "View");
    \u0275\u0275elementEnd()();
  }
}
function RecentSalesWidget_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275element(2, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 13);
    \u0275\u0275element(9, "button", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", \u0275\u0275interpolate1("https://primefaces.org/cdn/primevue/images/product/", product_r1.image), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275interpolate(product_r1.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, product_r1.price, "USD"));
  }
}
var RecentSalesWidget = class _RecentSalesWidget {
  productService;
  products;
  constructor(productService) {
    this.productService = productService;
  }
  ngOnInit() {
    this.productService.getProductsSmall().then((data) => this.products = data);
  }
  static \u0275fac = function RecentSalesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecentSalesWidget)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentSalesWidget, selectors: [["app-recent-sales-widget"]], features: [\u0275\u0275ProvidersFeature([ProductService])], decls: 8, vars: 3, consts: [["header", ""], ["body", ""], [1, "card", "mb-8!"], [1, "font-semibold", "text-xl", "mb-4"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], [2, "width", "15%", "min-width", "5rem"], ["width", "50", 1, "shadow-lg", 3, "src", "alt"], [2, "width", "35%", "min-width", "7rem"], [2, "width", "35%", "min-width", "8rem"], [2, "width", "15%"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button", "p-component", "p-button-text", "p-button-icon-only"]], template: function RecentSalesWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275text(2, "Recent Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p-table", 4);
      \u0275\u0275template(4, RecentSalesWidget_ng_template_4_Template, 11, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, RecentSalesWidget_ng_template_6_Template, 10, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.products)("paginator", true)("rows", 5);
    }
  }, dependencies: [CommonModule, TableModule, Table, SortableColumn, SortIcon, ButtonModule, ButtonDirective, RippleModule, Ripple, CurrencyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentSalesWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-recent-sales-widget",
      imports: [CommonModule, TableModule, ButtonModule, RippleModule],
      template: `<div class="card mb-8!">
        <div class="font-semibold text-xl mb-4">Recent Sales</div>
        <p-table [value]="products" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Image</th>
                    <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                    <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 15%; min-width: 5rem;">
                        <img src="https://primefaces.org/cdn/primevue/images/product/{{ product.image }}" class="shadow-lg" alt="{{ product.name }}" width="50" />
                    </td>
                    <td style="width: 35%; min-width: 7rem;">{{ product.name }}</td>
                    <td style="width: 35%; min-width: 8rem;">{{ product.price | currency: 'USD' }}</td>
                    <td style="width: 15%;">
                        <button pButton pRipple type="button" icon="pi pi-search" class="p-button p-component p-button-text p-button-icon-only"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
      providers: [ProductService]
    }]
  }], () => [{ type: ProductService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentSalesWidget, { className: "RecentSalesWidget", filePath: "src/app/pages/dashboard/components/recentsaleswidget.ts", lineNumber: 39 });
})();

// src/app/pages/dashboard/components/bestsellingwidget.ts
var BestSellingWidget = class _BestSellingWidget {
  menu = null;
  items = [
    { label: "Add New", icon: "pi pi-fw pi-plus" },
    { label: "Remove", icon: "pi pi-fw pi-trash" }
  ];
  static \u0275fac = function BestSellingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BestSellingWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BestSellingWidget, selectors: [["app-best-selling-widget"]], decls: 75, vars: 2, consts: [["menu", ""], [1, "card"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "font-semibold", "text-xl"], ["pButton", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "p-button-plain", 3, "click"], [3, "popup", "model"], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "mr-2", "mb-1", "md:mb-0"], [1, "mt-1", "text-muted-color"], [1, "mt-2", "md:mt-0", "flex", "items-center"], [1, "bg-surface-300", "dark:bg-surface-500", "rounded-border", "overflow-hidden", "w-40", "lg:w-24", 2, "height", "8px"], [1, "bg-orange-500", "h-full", 2, "width", "50%"], [1, "text-orange-500", "ml-4", "font-medium"], [1, "mt-2", "md:mt-0", "ml-0", "md:ml-20", "flex", "items-center"], [1, "bg-cyan-500", "h-full", 2, "width", "16%"], [1, "text-cyan-500", "ml-4", "font-medium"], [1, "bg-pink-500", "h-full", 2, "width", "67%"], [1, "text-pink-500", "ml-4", "font-medium"], [1, "bg-green-500", "h-full", 2, "width", "35%"], [1, "text-primary", "ml-4", "font-medium"], [1, "bg-purple-500", "h-full", 2, "width", "75%"], [1, "text-purple-500", "ml-4", "font-medium"], [1, "bg-teal-500", "h-full", 2, "width", "40%"], [1, "text-teal-500", "ml-4", "font-medium"]], template: function BestSellingWidget_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3, "Best Selling Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "button", 4);
      \u0275\u0275listener("click", function BestSellingWidget_Template_button_click_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        const menu_r2 = \u0275\u0275reference(7);
        return \u0275\u0275resetView(menu_r2.toggle($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "p-menu", 5, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "ul", 6)(9, "li", 7)(10, "div")(11, "span", 8);
      \u0275\u0275text(12, "Space T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275text(14, "Clothing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
      \u0275\u0275element(17, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "%50");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "li", 7)(21, "div")(22, "span", 8);
      \u0275\u0275text(23, "Portal Sticker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 9);
      \u0275\u0275text(25, "Accessories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 11);
      \u0275\u0275element(28, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 16);
      \u0275\u0275text(30, "%16");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "li", 7)(32, "div")(33, "span", 8);
      \u0275\u0275text(34, "Supernova Sticker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 9);
      \u0275\u0275text(36, "Accessories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 14)(38, "div", 11);
      \u0275\u0275element(39, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 18);
      \u0275\u0275text(41, "%67");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "li", 7)(43, "div")(44, "span", 8);
      \u0275\u0275text(45, "Wonders Notebook");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 9);
      \u0275\u0275text(47, "Office");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 14)(49, "div", 11);
      \u0275\u0275element(50, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 20);
      \u0275\u0275text(52, "%35");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "li", 7)(54, "div")(55, "span", 8);
      \u0275\u0275text(56, "Mat Black Case");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 9);
      \u0275\u0275text(58, "Accessories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 14)(60, "div", 11);
      \u0275\u0275element(61, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 22);
      \u0275\u0275text(63, "%75");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "li", 7)(65, "div")(66, "span", 8);
      \u0275\u0275text(67, "Robots T-Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 9);
      \u0275\u0275text(69, "Clothing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 14)(71, "div", 11);
      \u0275\u0275element(72, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 24);
      \u0275\u0275text(74, "%40");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("popup", true)("model", ctx.items);
    }
  }, dependencies: [CommonModule, ButtonModule, ButtonDirective, MenuModule, Menu], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BestSellingWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-best-selling-widget",
      imports: [CommonModule, ButtonModule, MenuModule],
      template: ` <div class="card">
        <div class="flex justify-between items-center mb-6">
            <div class="font-semibold text-xl">Best Selling Products</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>
        <ul class="list-none p-0 m-0">
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                    <div class="mt-1 text-muted-color">Clothing</div>
                </div>
                <div class="mt-2 md:mt-0 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-orange-500 h-full" style="width: 50%"></div>
                    </div>
                    <span class="text-orange-500 ml-4 font-medium">%50</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                    <div class="mt-1 text-muted-color">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-cyan-500 h-full" style="width: 16%"></div>
                    </div>
                    <span class="text-cyan-500 ml-4 font-medium">%16</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                    <div class="mt-1 text-muted-color">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-pink-500 h-full" style="width: 67%"></div>
                    </div>
                    <span class="text-pink-500 ml-4 font-medium">%67</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                    <div class="mt-1 text-muted-color">Office</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-green-500 h-full" style="width: 35%"></div>
                    </div>
                    <span class="text-primary ml-4 font-medium">%35</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                    <div class="mt-1 text-muted-color">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-purple-500 h-full" style="width: 75%"></div>
                    </div>
                    <span class="text-purple-500 ml-4 font-medium">%75</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                    <div class="mt-1 text-muted-color">Clothing</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-teal-500 h-full" style="width: 40%"></div>
                    </div>
                    <span class="text-teal-500 ml-4 font-medium">%40</span>
                </div>
            </li>
        </ul>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BestSellingWidget, { className: "BestSellingWidget", filePath: "src/app/pages/dashboard/components/bestsellingwidget.ts", lineNumber: 94 });
})();

// src/app/pages/dashboard/components/revenuestreamwidget.ts
var RevenueStreamWidget = class _RevenueStreamWidget {
  layoutService;
  chartData;
  chartOptions;
  subscription;
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
      this.initChart();
    });
  }
  ngOnInit() {
    this.initChart();
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const borderColor = documentStyle.getPropertyValue("--surface-border");
    const textMutedColor = documentStyle.getPropertyValue("--text-color-secondary");
    this.chartData = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          type: "bar",
          label: "Subscriptions",
          backgroundColor: documentStyle.getPropertyValue("--p-primary-400"),
          data: [4e3, 1e4, 15e3, 4e3],
          barThickness: 32
        },
        {
          type: "bar",
          label: "Advertising",
          backgroundColor: documentStyle.getPropertyValue("--p-primary-300"),
          data: [2100, 8400, 2400, 7500],
          barThickness: 32
        },
        {
          type: "bar",
          label: "Affiliate",
          backgroundColor: documentStyle.getPropertyValue("--p-primary-200"),
          data: [4100, 5200, 3400, 7400],
          borderRadius: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 0,
            bottomRight: 0
          },
          borderSkipped: false,
          barThickness: 32
        }
      ]
    };
    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textMutedColor
          },
          grid: {
            color: "transparent",
            borderColor: "transparent"
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textMutedColor
          },
          grid: {
            color: borderColor,
            borderColor: "transparent",
            drawTicks: false
          }
        }
      }
    };
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function RevenueStreamWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevenueStreamWidget)(\u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevenueStreamWidget, selectors: [["app-revenue-stream-widget"]], decls: 4, vars: 2, consts: [[1, "card", "mb-8!"], [1, "font-semibold", "text-xl", "mb-4"], ["type", "bar", 1, "h-100", 3, "data", "options"]], template: function RevenueStreamWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Revenue Stream");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "p-chart", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.chartData)("options", ctx.chartOptions);
    }
  }, dependencies: [ChartModule, UIChart], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevenueStreamWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-revenue-stream-widget",
      imports: [ChartModule],
      template: `<div class="card mb-8!">
        <div class="font-semibold text-xl mb-4">Revenue Stream</div>
        <p-chart type="bar" [data]="chartData" [options]="chartOptions" class="h-100" />
    </div>`
    }]
  }], () => [{ type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevenueStreamWidget, { className: "RevenueStreamWidget", filePath: "src/app/pages/dashboard/components/revenuestreamwidget.ts", lineNumber: 15 });
})();

// src/app/pages/dashboard/dashboard.ts
var Dashboard = class _Dashboard {
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 8, vars: 0, consts: [[1, "grid", "grid-cols-12", "gap-8"], [1, "contents"], [1, "col-span-12", "xl:col-span-6"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-stats-widget", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-recent-sales-widget")(4, "app-best-selling-widget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275element(6, "app-revenue-stream-widget")(7, "app-notifications-widget");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{
      selector: "app-dashboard",
      imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
      template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 25 });
})();

// src/app/pages/landing/components/topbarwidget.component.ts
var TopbarWidget = class _TopbarWidget {
  router;
  constructor(router) {
    this.router = router;
  }
  static \u0275fac = function TopbarWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarWidget)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarWidget, selectors: [["topbar-widget"]], decls: 33, vars: 7, consts: [["href", "#", 1, "flex", "items-center"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-12", "mr-2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-2xl", "leading-normal", "mr-20"], ["pButton", "", "severity", "secondary", "pRipple", "", "pStyleClass", "@next", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "lg:hidden!", 3, "text", "rounded", "hideOnOutsideClick"], [1, "pi", "pi-bars", "text-2xl!"], [1, "items-center", "bg-surface-0", "dark:bg-surface-900", "grow", "justify-between", "hidden", "lg:flex", "absolute", "lg:static", "w-full", "left-0", "top-full", "px-12", "lg:px-0", "z-20", "rounded-border"], [1, "list-none", "p-0", "m-0", "flex", "lg:items-center", "select-none", "flex-col", "lg:flex-row", "cursor-pointer", "gap-8"], ["pRipple", "", 1, "px-0", "py-4", "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", 3, "click"], [1, "flex", "border-t", "lg:border-t-0", "border-surface", "py-4", "lg:py-0", "mt-4", "lg:mt-0", "gap-2"], ["pButton", "", "pRipple", "", "label", "Login", "routerLink", "/auth/login", 3, "rounded", "text"], ["pButton", "", "pRipple", "", "label", "Register", "routerLink", "/auth/login", 3, "rounded"], [3, "float"]], template: function TopbarWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2);
      \u0275\u0275elementStart(3, "mask", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "g", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "SAKAI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 8);
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "ul", 11)(13, "li")(14, "a", 12);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_14_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "home" });
      });
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "Home");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "li")(18, "a", 12);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_18_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "features" });
      });
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Features");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "li")(22, "a", 12);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_22_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "highlights" });
      });
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Highlights");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "li")(26, "a", 12);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_26_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "pricing" });
      });
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Pricing");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 13);
      \u0275\u0275element(30, "button", 14)(31, "button", 15)(32, "app-floating-configurator", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("text", true)("rounded", true)("hideOnOutsideClick", true);
      \u0275\u0275advance(21);
      \u0275\u0275property("rounded", true)("text", true);
      \u0275\u0275advance();
      \u0275\u0275property("rounded", true);
      \u0275\u0275advance();
      \u0275\u0275property("float", false);
    }
  }, dependencies: [RouterModule, RouterLink, StyleClassModule, StyleClass, ButtonModule, ButtonDirective, RippleModule, Ripple, AppFloatingConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarWidget, [{
    type: Component,
    args: [{
      selector: "topbar-widget",
      imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, AppFloatingConfigurator],
      template: `<a class="flex items-center" href="#">
            <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 mr-2">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                    fill="var(--primary-color)"
                />
                <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                    <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                </mask>
                <g mask="url(#mask0_1413_1551)">
                    <path
                        d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                        fill="var(--primary-color)"
                    />
                </g>
            </svg>
            <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20">SAKAI</span>
        </a>

        <a pButton [text]="true" severity="secondary" [rounded]="true" pRipple class="lg:hidden!" pStyleClass="@next" enterFromClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars text-2xl!"></i>
        </a>

        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
            <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'home' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'features' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Features</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'highlights' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Highlights</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'pricing' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Pricing</span>
                    </a>
                </li>
            </ul>
            <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
                <button pButton pRipple label="Login" routerLink="/auth/login" [rounded]="true" [text]="true"></button>
                <button pButton pRipple label="Register" routerLink="/auth/login" [rounded]="true"></button>
                <app-floating-configurator [float]="false" />
            </div>
        </div> `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarWidget, { className: "TopbarWidget", filePath: "src/app/pages/landing/components/topbarwidget.component.ts", lineNumber: 66 });
})();

// src/app/pages/landing/components/herowidget.ts
var HeroWidget = class _HeroWidget {
  static \u0275fac = function HeroWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroWidget, selectors: [["hero-widget"]], decls: 11, vars: 1, consts: [["id", "hero", 1, "flex", "flex-col", "pt-6", "px-6", "lg:px-20", "overflow-hidden", 2, "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%)", "clip-path", "ellipse(150% 87% at 93% 13%)"], [1, "mx-6", "md:mx-20", "mt-0", "md:mt-6"], [1, "text-6xl", "font-bold", "text-gray-900", "leading-tight", "dark:!text-gray-700"], [1, "font-light", "block"], [1, "font-normal", "text-2xl", "leading-normal", "md:mt-4", "text-gray-700", "dark:text-gray-700"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Started", "routerLink", "/auth/login", 1, "text-xl!", "mt-8", "px-4!", 3, "rounded"], [1, "flex", "justify-center", "md:justify-end"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/screen-1.png", "alt", "Hero Image", 1, "w-9/12", "md:w-auto"]], template: function HeroWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
      \u0275\u0275text(4, "Eu sem integer");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, "eget magna fermentum");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275element(10, "img", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("rounded", true);
    }
  }, dependencies: [ButtonModule, ButtonDirective, RippleModule, Ripple, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroWidget, [{
    type: Component,
    args: [{
      selector: "hero-widget",
      imports: [ButtonModule, RippleModule, RouterLink],
      template: `
        <div
            id="hero"
            class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
            style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
        >
            <div class="mx-6 md:mx-20 mt-0 md:mt-6">
                <h1 class="text-6xl font-bold text-gray-900 leading-tight dark:!text-gray-700"><span class="font-light block">Eu sem integer</span>eget magna fermentum</h1>
                <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-700 dark:text-gray-700">Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...</p>
                <button pButton pRipple [rounded]="true" type="button" label="Get Started" routerLink="/auth/login" class="text-xl! mt-8 px-4!"></button>
            </div>
            <div class="flex justify-center md:justify-end">
                <img src="https://primefaces.org/cdn/templates/sakai/landing/screen-1.png" alt="Hero Image" class="w-9/12 md:w-auto" />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroWidget, { className: "HeroWidget", filePath: "src/app/pages/landing/components/herowidget.ts", lineNumber: 26 });
})();

// src/app/pages/landing/components/featureswidget.ts
var FeaturesWidget = class _FeaturesWidget {
  static \u0275fac = function FeaturesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesWidget, selectors: [["features-widget"]], decls: 97, vars: 0, consts: [["id", "features", 1, "py-6", "px-6", "lg:px-20", "mt-8", "mx-0", "lg:mx-20"], [1, "grid", "grid-cols-12", "gap-4", "justify-center"], [1, "col-span-12", "text-center", "mt-20", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pr-8", "lg:pb-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"], [1, "p-4", "bg-surface-0", "dark:bg-surface-900", "h-full", 2, "border-radius", "8px"], [1, "flex", "items-center", "justify-center", "bg-yellow-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-users", "text-2xl!", "text-yellow-700"], [1, "mb-2", "text-surface-900", "dark:text-surface-0"], [1, "text-surface-600", "dark:text-surface-200"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-cyan-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-palette", "text-2xl!", "text-cyan-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pb-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-indigo-200", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-map", "text-2xl!", "text-indigo-700"], [1, "mt-6", "mb-1", "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-slate-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-id-card", "text-2xl!", "text-slate-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-orange-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-star", "text-2xl!", "text-orange-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-pink-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-moon", "text-2xl!", "text-pink-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pr-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-teal-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-shopping-cart", "text-2xl!", "text-teal-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-blue-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-globe", "text-2xl!", "text-blue-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg-4", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-purple-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-eye", "text-2xl!", "text-purple-700"], [1, "col-span-12", "mt-20", "mb-20", "p-2", "md:p-20", 2, "border-radius", "20px", "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"], [1, "flex", "flex-col", "justify-center", "items-center", "text-center", "px-4", "py-4", "md:py-0"], [1, "text-gray-900", "mb-2", "text-3xl", "font-semibold"], [1, "text-gray-600", "text-2xl"], [1, "text-gray-900", "sm:line-height-2", "md:line-height-4", "text-2xl", "mt-6", 2, "max-width", "800px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/peak-logo.svg", "alt", "Company logo", 1, "mt-6"]], template: function FeaturesWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Marvelous Features");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "span", 4);
      \u0275\u0275text(6, "Placerat in egestas erat...");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275domElement(11, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "h5", 10);
      \u0275\u0275text(13, "Easy to Use");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span", 11);
      \u0275\u0275text(15, "Posuere morbi leo urna molestie.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(16, "div", 5)(17, "div", 12)(18, "div", 7)(19, "div", 13);
      \u0275\u0275domElement(20, "i", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "h5", 10);
      \u0275\u0275text(22, "Fresh Design");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "span", 11);
      \u0275\u0275text(24, "Semper risus in hendrerit.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(25, "div", 15)(26, "div", 16)(27, "div", 7)(28, "div", 17);
      \u0275\u0275domElement(29, "i", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "div", 19);
      \u0275\u0275text(31, "Well Documented");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "span", 11);
      \u0275\u0275text(33, "Non arcu risus quis varius quam quisque.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(34, "div", 5)(35, "div", 20)(36, "div", 7)(37, "div", 21);
      \u0275\u0275domElement(38, "i", 22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "div", 19);
      \u0275\u0275text(40, "Responsive Layout");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "span", 11);
      \u0275\u0275text(42, "Nulla malesuada pellentesque elit.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(43, "div", 5)(44, "div", 23)(45, "div", 7)(46, "div", 24);
      \u0275\u0275domElement(47, "i", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "div", 19);
      \u0275\u0275text(49, "Clean Code");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "span", 11);
      \u0275\u0275text(51, "Condimentum lacinia quis vel eros.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(52, "div", 15)(53, "div", 26)(54, "div", 7)(55, "div", 27);
      \u0275\u0275domElement(56, "i", 28);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "div", 19);
      \u0275\u0275text(58, "Dark Mode");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "span", 11);
      \u0275\u0275text(60, "Convallis tellus id interdum velit laoreet.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(61, "div", 29)(62, "div", 30)(63, "div", 7)(64, "div", 31);
      \u0275\u0275domElement(65, "i", 32);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "div", 19);
      \u0275\u0275text(67, "Ready to Use");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "span", 11);
      \u0275\u0275text(69, "Mauris sit amet massa vitae.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(70, "div", 29)(71, "div", 33)(72, "div", 7)(73, "div", 34);
      \u0275\u0275domElement(74, "i", 35);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "div", 19);
      \u0275\u0275text(76, "Modern Practices");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(77, "span", 11);
      \u0275\u0275text(78, "Elementum nibh tellus molestie nunc non.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(79, "div", 36)(80, "div", 37)(81, "div", 7)(82, "div", 38);
      \u0275\u0275domElement(83, "i", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "div", 19);
      \u0275\u0275text(85, "Privacy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "span", 11);
      \u0275\u0275text(87, "Neque egestas congue quisque.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(88, "div", 40)(89, "div", 41)(90, "div", 42);
      \u0275\u0275text(91, "Jos\xE9phine Miller");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(92, "span", 43);
      \u0275\u0275text(93, "Peak Interactive");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(94, "p", 44);
      \u0275\u0275text(95, " \u201CDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201D ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(96, "img", 45);
      \u0275\u0275domElementEnd()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesWidget, [{
    type: Component,
    args: [{
      selector: "features-widget",
      standalone: true,
      imports: [CommonModule],
      template: ` <div id="features" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
        <div class="grid grid-cols-12 gap-4 justify-center">
            <div class="col-span-12 text-center mt-20 mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Marvelous Features</div>
                <span class="text-muted-color text-2xl">Placerat in egestas erat...</span>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-yellow-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-users text-2xl! text-yellow-700"></i>
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">Easy to Use</h5>
                        <span class="text-surface-600 dark:text-surface-200">Posuere morbi leo urna molestie.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-cyan-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-palette text-2xl! text-cyan-700"></i>
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">Fresh Design</h5>
                        <span class="text-surface-600 dark:text-surface-200">Semper risus in hendrerit.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-map text-2xl! text-indigo-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Well Documented</div>
                        <span class="text-surface-600 dark:text-surface-200">Non arcu risus quis varius quam quisque.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-slate-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-id-card text-2xl! text-slate-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Responsive Layout</div>
                        <span class="text-surface-600 dark:text-surface-200">Nulla malesuada pellentesque elit.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-orange-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-star text-2xl! text-orange-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Clean Code</div>
                        <span class="text-surface-600 dark:text-surface-200">Condimentum lacinia quis vel eros.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-pink-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-moon text-2xl! text-pink-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Dark Mode</div>
                        <span class="text-surface-600 dark:text-surface-200">Convallis tellus id interdum velit laoreet.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-teal-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-shopping-cart text-2xl! text-teal-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Ready to Use</div>
                        <span class="text-surface-600 dark:text-surface-200">Mauris sit amet massa vitae.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-blue-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-globe text-2xl! text-blue-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Modern Practices</div>
                        <span class="text-surface-600 dark:text-surface-200">Elementum nibh tellus molestie nunc non.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg-4 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-purple-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-eye text-2xl! text-purple-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Privacy</div>
                        <span class="text-surface-600 dark:text-surface-200">Neque egestas congue quisque.</span>
                    </div>
                </div>
            </div>

            <div
                class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
            >
                <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                    <div class="text-gray-900 mb-2 text-3xl font-semibold">Jos\xE9phine Miller</div>
                    <span class="text-gray-600 text-2xl">Peak Interactive</span>
                    <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                        \u201CDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201D
                    </p>
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/peak-logo.svg" class="mt-6" alt="Company logo" />
                </div>
            </div>
        </div>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesWidget, { className: "FeaturesWidget", filePath: "src/app/pages/landing/components/featureswidget.ts", lineNumber: 139 });
})();

// src/app/pages/landing/components/highlightswidget.ts
var HighlightsWidget = class _HighlightsWidget {
  static \u0275fac = function HighlightsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighlightsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HighlightsWidget, selectors: [["highlights-widget"]], decls: 26, vars: 0, consts: [["id", "highlights", 1, "py-6", "px-6", "lg:px-20", "mx-0", "my-12", "lg:mx-20"], [1, "text-center"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "grid", "grid-cols-12", "gap-4", "mt-20", "pb-2", "md:pb-20"], [1, "flex", "justify-center", "col-span-12", "lg:col-span-6", "bg-purple-100", "p-0", "order-1", "lg:order-0", 2, "border-radius", "8px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/mockup.png", "alt", "mockup mobile", 1, "w-11/12"], [1, "col-span-12", "lg:col-span-6", "my-auto", "flex", "flex-col", "lg:items-end", "text-center", "lg:text-right", "gap-4"], [1, "flex", "items-center", "justify-center", "bg-purple-200", "self-center", "lg:self-end", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-mobile", "text-4xl!", "text-purple-700"], [1, "leading-none", "text-surface-900", "dark:text-surface-0", "text-3xl", "font-normal"], [1, "text-surface-700", "dark:text-surface-100", "text-2xl", "leading-normal", "ml-0", "md:ml-2", 2, "max-width", "650px"], [1, "grid", "grid-cols-12", "gap-4", "my-20", "pt-2", "md:pt-20"], [1, "col-span-12", "lg:col-span-6", "my-auto", "flex", "flex-col", "text-center", "lg:text-left", "lg:items-start", "gap-4"], [1, "flex", "items-center", "justify-center", "bg-yellow-200", "self-center", "lg:self-start", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-desktop", "text-3xl!", "text-yellow-700"], [1, "text-surface-700", "dark:text-surface-100", "text-2xl", "leading-normal", "mr-0", "md:mr-2", 2, "max-width", "650px"], [1, "flex", "justify-end", "order-1", "sm:order-2", "col-span-12", "lg:col-span-6", "bg-yellow-100", "p-0", 2, "border-radius", "8px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png", "alt", "mockup", 1, "w-11/12"]], template: function HighlightsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Powerful Everywhere");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5, "Amet consectetur adipiscing elit...");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275domElement(8, "img", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275domElement(11, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 10);
      \u0275\u0275text(13, "Congue Quisque Egestas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span", 11);
      \u0275\u0275text(15, "Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 12)(17, "div", 13)(18, "div", 14);
      \u0275\u0275domElement(19, "i", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 10);
      \u0275\u0275text(21, "Celerisque Eu Ultrices");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "span", 16);
      \u0275\u0275text(23, "Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "div", 17);
      \u0275\u0275domElement(25, "img", 18);
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightsWidget, [{
    type: Component,
    args: [{
      selector: "highlights-widget",
      template: `
        <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Powerful Everywhere</div>
                <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
            </div>

            <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
                <div class="flex justify-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-0" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup.png" class="w-11/12" alt="mockup mobile" />
                </div>

                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                    <div class="flex items-center justify-center bg-purple-200 self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-mobile text-4xl! text-purple-700"></i>
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Congue Quisque Egestas</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px"
                        >Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.</span
                    >
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
                    <div class="flex items-center justify-center bg-yellow-200 self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-desktop text-3xl! text-yellow-700"></i>
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Celerisque Eu Ultrices</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style="max-width: 650px"
                        >Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.</span
                    >
                </div>

                <div class="flex justify-end order-1 sm:order-2 col-span-12 lg:col-span-6 bg-yellow-100 p-0" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png" class="w-11/12" alt="mockup" />
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HighlightsWidget, { className: "HighlightsWidget", filePath: "src/app/pages/landing/components/highlightswidget.ts", lineNumber: 46 });
})();

// src/app/pages/landing/components/pricingwidget.ts
var PricingWidget = class _PricingWidget {
  static \u0275fac = function PricingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingWidget, selectors: [["pricing-widget"]], decls: 97, vars: 0, consts: [["id", "pricing", 1, "py-6", "px-6", "lg:px-20", "my-2", "md:my-6"], [1, "text-center", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "grid", "grid-cols-12", "gap-4", "justify-between", "mt-20", "md:mt-0"], [1, "col-span-12", "lg:col-span-4", "p-0", "md:p-4"], [1, "p-4", "flex", "flex-col", "border-surface-200", "dark:border-surface-600", "pricing-card", "cursor-pointer", "border-2", "hover:border-primary", "duration-300", "transition-all", 2, "border-radius", "10px"], [1, "text-surface-900", "dark:text-surface-0", "text-center", "my-8", "text-3xl"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/free.svg", "alt", "free", 1, "w-10/12", "mx-auto"], [1, "my-8", "flex", "flex-col", "items-center", "gap-4"], [1, "flex", "items-center"], [1, "text-5xl", "font-bold", "mr-2", "text-surface-900", "dark:text-surface-0"], [1, "text-surface-600", "dark:text-surface-200"], ["pButton", "", "pRipple", "", "label", "Get Started", 1, "p-button-rounded", "border-0", "ml-4", "font-light", "leading-tight", "bg-blue-500", "text-white"], [1, "w-full", "bg-surface-200"], [1, "my-8", "list-none", "p-0", "flex", "text-surface-900", "dark:text-surface-0", "flex-col", "px-8"], [1, "py-2"], [1, "pi", "pi-fw", "pi-check", "text-xl", "text-cyan-500", "mr-2"], [1, "text-xl", "leading-normal"], [1, "col-span-12", "lg:col-span-4", "p-0", "md:p-4", "mt-6", "md:mt-0"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/startup.svg", "alt", "startup", 1, "w-10/12", "mx-auto"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg", "alt", "enterprise", 1, "w-10/12", "mx-auto"], ["pButton", "", "pRipple", "", "label", "Try Free", 1, "p-button-rounded", "border-0", "ml-4", "font-light", "leading-tight", "bg-blue-500", "text-white"]], template: function PricingWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Matchless Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "Amet consectetur adipiscing elit...");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
      \u0275\u0275text(10, "Free");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "img", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "span", 11);
      \u0275\u0275text(15, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17, "per month");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "p-divider", 14);
      \u0275\u0275elementStart(20, "ul", 15)(21, "li", 16);
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24, "Responsive Layout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementStart(27, "span", 18);
      \u0275\u0275text(28, "Unlimited Push Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li", 16);
      \u0275\u0275element(30, "i", 17);
      \u0275\u0275elementStart(31, "span", 18);
      \u0275\u0275text(32, "50 Support Ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li", 16);
      \u0275\u0275element(34, "i", 17);
      \u0275\u0275elementStart(35, "span", 18);
      \u0275\u0275text(36, "Free Shipping");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 19)(38, "div", 6)(39, "div", 7);
      \u0275\u0275text(40, "Startup");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "img", 20);
      \u0275\u0275elementStart(42, "div", 9)(43, "div", 10)(44, "span", 11);
      \u0275\u0275text(45, "$1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 12);
      \u0275\u0275text(47, "per month");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "p-divider", 14);
      \u0275\u0275elementStart(50, "ul", 15)(51, "li", 16);
      \u0275\u0275element(52, "i", 17);
      \u0275\u0275elementStart(53, "span", 18);
      \u0275\u0275text(54, "Responsive Layout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li", 16);
      \u0275\u0275element(56, "i", 17);
      \u0275\u0275elementStart(57, "span", 18);
      \u0275\u0275text(58, "Unlimited Push Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li", 16);
      \u0275\u0275element(60, "i", 17);
      \u0275\u0275elementStart(61, "span", 18);
      \u0275\u0275text(62, "50 Support Ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li", 16);
      \u0275\u0275element(64, "i", 17);
      \u0275\u0275elementStart(65, "span", 18);
      \u0275\u0275text(66, "Free Shipping");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 19)(68, "div", 6)(69, "div", 7);
      \u0275\u0275text(70, "Enterprise");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "img", 21);
      \u0275\u0275elementStart(72, "div", 9)(73, "div", 10)(74, "span", 11);
      \u0275\u0275text(75, "$5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 12);
      \u0275\u0275text(77, "per month");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "p-divider", 14);
      \u0275\u0275elementStart(80, "ul", 15)(81, "li", 16);
      \u0275\u0275element(82, "i", 17);
      \u0275\u0275elementStart(83, "span", 18);
      \u0275\u0275text(84, "Responsive Layout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "li", 16);
      \u0275\u0275element(86, "i", 17);
      \u0275\u0275elementStart(87, "span", 18);
      \u0275\u0275text(88, "Unlimited Push Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li", 16);
      \u0275\u0275element(90, "i", 17);
      \u0275\u0275elementStart(91, "span", 18);
      \u0275\u0275text(92, "50 Support Ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li", 16);
      \u0275\u0275element(94, "i", 17);
      \u0275\u0275elementStart(95, "span", 18);
      \u0275\u0275text(96, "Free Shipping");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [DividerModule, Divider, ButtonModule, ButtonDirective, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingWidget, [{
    type: Component,
    args: [{
      selector: "pricing-widget",
      imports: [DividerModule, ButtonModule, RippleModule],
      template: `
        <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
            <div class="text-center mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Matchless Pricing</div>
                <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
            </div>

            <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Free</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/free.svg" class="w-10/12 mx-auto" alt="free" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$0</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Get Started" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Startup</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/startup.svg" class="w-10/12 mx-auto" alt="startup" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$1</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Get Started" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Enterprise</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg" class="w-10/12 mx-auto" alt="enterprise" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$5</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Try Free" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingWidget, { className: "PricingWidget", filePath: "src/app/pages/landing/components/pricingwidget.ts", lineNumber: 119 });
})();

// src/app/pages/landing/components/footerwidget.ts
var FooterWidget = class _FooterWidget {
  router;
  constructor(router) {
    this.router = router;
  }
  static \u0275fac = function FooterWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterWidget)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterWidget, selectors: [["footer-widget"]], decls: 57, vars: 0, consts: [[1, "py-12", "px-12", "mx-0", "mt-20", "lg:mx-20"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "md:col-span-2"], [1, "flex", "flex-wrap", "items-center", "justify-center", "md:justify-start", "md:mb-0", "mb-6", "cursor-pointer", 3, "click"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-14", "mr-2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "font-medium", "text-3xl", "text-surface-900", "dark:text-surface-0"], [1, "col-span-12", "md:col-span-10"], [1, "grid", "grid-cols-12", "gap-8", "text-center", "md:text-left"], [1, "col-span-12", "md:col-span-3"], [1, "font-medium", "text-2xl", "leading-normal", "mb-6", "text-surface-900", "dark:text-surface-0"], [1, "leading-normal", "text-xl", "block", "cursor-pointer", "mb-2", "text-surface-700", "dark:text-surface-100"], [1, "leading-normal", "text-xl", "block", "cursor-pointer", "text-surface-700", "dark:text-surface-100"], [1, "leading-normal", "text-xl", "flex", "items-center", "cursor-pointer", "mb-2", "text-surface-700", "dark:text-surface-100"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/new-badge.svg", "alt", "badge", 1, "ml-2"]], template: function FooterWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275domListener("click", function FooterWidget_Template_a_click_3_listener() {
        return ctx.router.navigate(["/pages/landing"], { fragment: "home" });
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(4, "svg", 4);
      \u0275\u0275domElement(5, "path", 5);
      \u0275\u0275domElementStart(6, "mask", 6);
      \u0275\u0275domElement(7, "path", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "g", 8);
      \u0275\u0275domElement(9, "path", 9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(10, "h4", 10);
      \u0275\u0275text(11, "SAKAI");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "h4", 14);
      \u0275\u0275text(16, "Company");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "a", 15);
      \u0275\u0275text(18, "About Us");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "a", 15);
      \u0275\u0275text(20, "News");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "a", 15);
      \u0275\u0275text(22, "Investor Relations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "a", 15);
      \u0275\u0275text(24, "Careers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "a", 16);
      \u0275\u0275text(26, "Media Kit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "div", 13)(28, "h4", 14);
      \u0275\u0275text(29, "Resources");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "a", 15);
      \u0275\u0275text(31, "Get Started");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "a", 15);
      \u0275\u0275text(33, "Learn");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "a", 16);
      \u0275\u0275text(35, "Case Studies");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "div", 13)(37, "h4", 14);
      \u0275\u0275text(38, "Community");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "a", 15);
      \u0275\u0275text(40, "Discord");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "a", 17);
      \u0275\u0275text(42, "Events");
      \u0275\u0275domElement(43, "img", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "a", 15);
      \u0275\u0275text(45, "FAQ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "a", 16);
      \u0275\u0275text(47, "Blog");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "div", 13)(49, "h4", 14);
      \u0275\u0275text(50, "Legal");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "a", 15);
      \u0275\u0275text(52, "Brand Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "a", 15);
      \u0275\u0275text(54, "Privacy Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "a", 16);
      \u0275\u0275text(56, "Terms of Service");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, dependencies: [RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterWidget, [{
    type: Component,
    args: [{
      selector: "footer-widget",
      imports: [RouterModule],
      template: `
        <div class="py-12 px-12 mx-0 mt-20 lg:mx-20">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-2">
                    <a (click)="router.navigate(['/pages/landing'], { fragment: 'home' })" class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-6 cursor-pointer">
                        <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-14 mr-2">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                                fill="var(--primary-color)"
                            />
                            <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                                <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                            </mask>
                            <g mask="url(#mask0_1413_1551)">
                                <path
                                    d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                                    fill="var(--primary-color)"
                                />
                            </g>
                        </svg>
                        <h4 class="font-medium text-3xl text-surface-900 dark:text-surface-0">SAKAI</h4>
                    </a>
                </div>

                <div class="col-span-12 md:col-span-10">
                    <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Company</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">About Us</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">News</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Investor Relations</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Careers</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Media Kit</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Resources</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Get Started</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Learn</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Case Studies</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Community</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Discord</a>
                            <a class="leading-normal text-xl flex items-center cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                                >Events<img src="https://primefaces.org/cdn/templates/sakai/landing/new-badge.svg" alt="badge" class="ml-2"
                            /></a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">FAQ</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Blog</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Legal</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Brand Policy</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Privacy Policy</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterWidget, { className: "FooterWidget", filePath: "src/app/pages/landing/components/footerwidget.ts", lineNumber: 73 });
})();

// src/app/pages/landing/landing.ts
var Landing = class _Landing {
  static \u0275fac = function Landing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Landing)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landing, selectors: [["app-landing"]], decls: 8, vars: 0, consts: [[1, "bg-surface-0", "dark:bg-surface-900"], ["id", "home", 1, "landing-wrapper", "overflow-hidden"], [1, "py-6", "px-6", "mx-0", "md:mx-12", "lg:mx-20", "lg:px-20", "flex", "items-center", "justify-between", "relative", "lg:static"]], template: function Landing_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "topbar-widget", 2)(3, "hero-widget")(4, "features-widget")(5, "highlights-widget")(6, "pricing-widget")(7, "footer-widget");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterModule, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget, RippleModule, StyleClassModule, ButtonModule, DividerModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Landing, [{
    type: Component,
    args: [{
      selector: "app-landing",
      standalone: true,
      imports: [RouterModule, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget, RippleModule, StyleClassModule, ButtonModule, DividerModule],
      template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div id="home" class="landing-wrapper overflow-hidden">
                <topbar-widget class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static" />
                <hero-widget />
                <features-widget />
                <highlights-widget />
                <pricing-widget />
                <footer-widget />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landing, { className: "Landing", filePath: "src/app/pages/landing/landing.ts", lineNumber: 31 });
})();

// src/app/pages/notfound/notfound.ts
var Notfound = class _Notfound {
  static \u0275fac = function Notfound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notfound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notfound, selectors: [["app-notfound"]], decls: 42, vars: 0, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], ["width", "54", "height", "40", "viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mb-8", "w-32", "shrink-0"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)"], [1, "w-full", "bg-surface-0", "dark:bg-surface-900", "py-20", "px-8", "sm:px-20", "flex", "flex-col", "items-center", 2, "border-radius", "53px"], [1, "text-primary", "font-bold", "text-3xl"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-3xl", "lg:text-5xl", "mb-2"], [1, "text-surface-600", "dark:text-surface-200", "mb-8"], ["routerLink", "/", 1, "w-full", "flex", "items-center", "py-8", "border-surface-300", "dark:border-surface-500", "border-b"], [1, "flex", "justify-center", "items-center", "border-2", "border-primary", "text-primary", "rounded-border", 2, "height", "3.5rem", "width", "3.5rem"], [1, "pi", "pi-fw", "pi-table", "text-2xl!"], [1, "ml-6", "flex", "flex-col"], [1, "text-surface-900", "dark:text-surface-0", "lg:text-xl", "font-medium", "mb-0", "block"], [1, "text-surface-600", "dark:text-surface-200", "lg:text-xl"], [1, "pi", "pi-fw", "pi-question-circle", "text-2xl!"], [1, "text-surface-900", "dark:text-surface-0", "lg:text-xl", "font-medium", "mb-0"], ["routerLink", "/", 1, "w-full", "flex", "items-center", "mb-8", "py-8", "border-surface-300", "dark:border-surface-500", "border-b"], [1, "pi", "pi-fw", "pi-unlock", "text-2xl!"], ["label", "Go to Dashboard", "routerLink", "/"]], template: function Notfound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 2);
      \u0275\u0275element(4, "path", 3);
      \u0275\u0275elementStart(5, "mask", 4);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "g", 6);
      \u0275\u0275element(8, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1", 11);
      \u0275\u0275text(14, "Not Found");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275text(16, "Requested resource is not available.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 13)(18, "span", 14);
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 16)(21, "span", 17);
      \u0275\u0275text(22, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24, "Ultricies mi quis hendrerit dolor.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "a", 13)(26, "span", 14);
      \u0275\u0275element(27, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 16)(29, "span", 20);
      \u0275\u0275text(30, "Solution Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 18);
      \u0275\u0275text(32, "Phasellus faucibus scelerisque eleifend.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "a", 21)(34, "span", 14);
      \u0275\u0275element(35, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 16)(37, "span", 20);
      \u0275\u0275text(38, "Permission Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 18);
      \u0275\u0275text(40, "Accumsan in nisl nisi scelerisque");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(41, "p-button", 23);
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule, RouterLink, AppFloatingConfigurator, ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notfound, [{
    type: Component,
    args: [{
      selector: "app-notfound",
      standalone: true,
      imports: [RouterModule, AppFloatingConfigurator, ButtonModule],
      template: ` <app-floating-configurator />
        <div class="flex items-center justify-center min-h-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-32 shrink-0">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                        fill="var(--primary-color)"
                    />
                    <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                        <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                    </mask>
                    <g mask="url(#mask0_1413_1551)">
                        <path
                            d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                            fill="var(--primary-color)"
                        />
                    </g>
                </svg>
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center" style="border-radius: 53px">
                        <span class="text-primary font-bold text-3xl">404</span>
                        <h1 class="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2">Not Found</h1>
                        <div class="text-surface-600 dark:text-surface-200 mb-8">Requested resource is not available.</div>
                        <a routerLink="/" class="w-full flex items-center py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-table text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0 block">Frequently Asked Questions</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Ultricies mi quis hendrerit dolor.</span>
                            </span>
                        </a>
                        <a routerLink="/" class="w-full flex items-center py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-question-circle text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0">Solution Center</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Phasellus faucibus scelerisque eleifend.</span>
                            </span>
                        </a>
                        <a routerLink="/" class="w-full flex items-center mb-8 py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-unlock text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0">Permission Manager</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Accumsan in nisl nisi scelerisque</span>
                            </span>
                        </a>
                        <p-button label="Go to Dashboard" routerLink="/" />
                    </div>
                </div>
            </div>
        </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notfound, { className: "Notfound", filePath: "src/app/pages/notfound/notfound.ts", lineNumber: 68 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = (_route, state2) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.ensureSession().pipe(map((authenticated) => authenticated ? true : router.createUrlTree(["/auth/login"], { queryParams: { returnUrl: state2.url } })));
};

// src/app.routes.ts
var appRoutes = [
  { path: "", redirectTo: "/pages/users", pathMatch: "full" },
  { path: "landing", component: Landing },
  {
    path: "",
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "uikit", loadChildren: () => import("./chunk-KTCP3XTJ.js") },
      { path: "documentation", component: Documentation },
      { path: "pages", loadChildren: () => import("./chunk-HAILH6LP.js") }
    ]
  },
  { path: "notfound", component: Notfound },
  { path: "auth", loadChildren: () => import("./chunk-TLF4P3AM.js") },
  { path: "**", redirectTo: "/notfound" }
];

// src/app/core/utils/http-error.util.ts
function extractErrorMessage(error, fallback = "Ocurri\xF3 un error inesperado.") {
  if (error.status === 0) {
    return "Sin conexi\xF3n con el servidor.";
  }
  const apiMessage = error.error?.message ?? error.error?.Message;
  if (apiMessage) {
    return apiMessage;
  }
  switch (error.status) {
    case 400:
      return "Revisa los datos ingresados.";
    case 403:
      return "No tienes permisos para ejecutar esta acci\xF3n.";
    case 404:
      return "El recurso solicitado no existe.";
    case 409:
      return "El correo o DNI ya se encuentra registrado.";
    case 500:
      return "Ocurri\xF3 un error en el servidor. Por favor intenta m\xE1s tarde.";
    default:
      return fallback;
  }
}

// src/app/core/interceptors/error.interceptor.ts
var LOGIN_ENDPOINT = "/auth/login";
var errorInterceptor = (req, next) => {
  const notify = inject(NotificationService);
  return next(req).pipe(catchError((error) => {
    if (req.context.get(SILENT_ERROR)) {
      return throwError(() => error);
    }
    const isLoginRequest = req.url.includes(LOGIN_ENDPOINT);
    const isHandledByRefresh = error.status === 401 && !isLoginRequest;
    if (!isHandledByRefresh) {
      notify.error(extractErrorMessage(error));
    }
    return throwError(() => error);
  }));
};

// node_modules/ngx-ui-loader/fesm2022/ngx-ui-loader.mjs
function NgxUiLoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r0.pbThickness, "px")("color", ctx_r0.pbColor);
    \u0275\u0275classProp("ngx-position-absolute", ctx_r0.loaderId !== ctx_r0.defaultConfig.masterLoaderId)("loading-foreground", ctx_r0.showForeground)("foreground-closing", ctx_r0.foregroundClosing)("fast-closing", ctx_r0.foregroundClosing && ctx_r0.fastFadeOut);
    \u0275\u0275property("ngClass", "ngx-progress-bar-" + ctx_r0.pbDirection);
  }
}
function NgxUiLoaderComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0.logoSize, "px")("height", ctx_r0.logoSize, "px")("top", ctx_r0.logoTop);
    \u0275\u0275property("ngClass", ctx_r0.logoPosition)("src", ctx_r0.trustedLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function NgxUiLoaderComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function NgxUiLoaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NgxUiLoaderComponent_div_4_div_1_Template, 1, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.fgSpinnerClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.fgDivs);
  }
}
function NgxUiLoaderComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NgxUiLoaderComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgxUiLoaderComponent_ng_template_5_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.fgsTemplate);
  }
}
function NgxUiLoaderComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function NgxUiLoaderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NgxUiLoaderComponent_div_11_div_1_Template, 1, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.bgSpinnerClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.bgDivs);
  }
}
function NgxUiLoaderComponent_ng_template_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NgxUiLoaderComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgxUiLoaderComponent_ng_template_12_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.bgsTemplate);
  }
}
var SPINNER;
(function(SPINNER2) {
  SPINNER2["ballScaleMultiple"] = "ball-scale-multiple";
  SPINNER2["ballSpin"] = "ball-spin";
  SPINNER2["ballSpinClockwise"] = "ball-spin-clockwise";
  SPINNER2["ballSpinClockwiseFadeRotating"] = "ball-spin-clockwise-fade-rotating";
  SPINNER2["ballSpinFadeRotating"] = "ball-spin-fade-rotating";
  SPINNER2["chasingDots"] = "chasing-dots";
  SPINNER2["circle"] = "circle";
  SPINNER2["cubeGrid"] = "cube-grid";
  SPINNER2["doubleBounce"] = "double-bounce";
  SPINNER2["fadingCircle"] = "fading-circle";
  SPINNER2["foldingCube"] = "folding-cube";
  SPINNER2["pulse"] = "pulse";
  SPINNER2["rectangleBounce"] = "rectangle-bounce";
  SPINNER2["rectangleBounceParty"] = "rectangle-bounce-party";
  SPINNER2["rectangleBouncePulseOut"] = "rectangle-bounce-pulse-out";
  SPINNER2["rectangleBouncePulseOutRapid"] = "rectangle-bounce-pulse-out-rapid";
  SPINNER2["rotatingPlane"] = "rotating-plane";
  SPINNER2["squareJellyBox"] = "square-jelly-box";
  SPINNER2["squareLoader"] = "square-loader";
  SPINNER2["threeBounce"] = "three-bounce";
  SPINNER2["threeStrings"] = "three-strings";
  SPINNER2["wanderingCubes"] = "wandering-cubes";
})(SPINNER || (SPINNER = {}));
var POSITION;
(function(POSITION2) {
  POSITION2["bottomCenter"] = "bottom-center";
  POSITION2["bottomLeft"] = "bottom-left";
  POSITION2["bottomRight"] = "bottom-right";
  POSITION2["centerCenter"] = "center-center";
  POSITION2["centerLeft"] = "center-left";
  POSITION2["centerRight"] = "center-right";
  POSITION2["topCenter"] = "top-center";
  POSITION2["topLeft"] = "top-left";
  POSITION2["topRight"] = "top-right";
})(POSITION || (POSITION = {}));
var PB_DIRECTION;
(function(PB_DIRECTION2) {
  PB_DIRECTION2["leftToRight"] = "ltr";
  PB_DIRECTION2["rightToLeft"] = "rtl";
})(PB_DIRECTION || (PB_DIRECTION = {}));
var DEFAULT_FG_TASK_ID = "fg-default";
var DEFAULT_BG_TASK_ID = "bg-default";
var DEFAULT_MASTER_LOADER_ID = "master";
var DEFAULT_TIME = {};
var MIN_DELAY = 0;
var MIN_TIME = 0;
var CLOSING_TIME = 1001;
var FAST_CLOSING_TIME = 601;
var BACKGROUND = false;
var FOREGROUND = true;
var OVERLAY_DISAPPEAR_TIME = 500;
var FAST_OVERLAY_DISAPPEAR_TIME = 300;
var HTTP_LOADER_TASK_ID = "$_http-loader";
var ROUTER_LOADER_TASK_ID = "$_router_loader";
var SPINNER_CONFIG = {
  "ball-scale-multiple": {
    divs: 3,
    class: "sk-ball-scale-multiple"
  },
  "ball-spin": {
    divs: 8,
    class: "sk-ball-spin"
  },
  "ball-spin-clockwise": {
    divs: 8,
    class: "sk-ball-spin-clockwise"
  },
  "ball-spin-clockwise-fade-rotating": {
    divs: 8,
    class: "sk-ball-spin-clockwise-fade-rotating"
  },
  "ball-spin-fade-rotating": {
    divs: 8,
    class: "sk-ball-spin-fade-rotating"
  },
  "chasing-dots": {
    divs: 2,
    class: "sk-chasing-dots"
  },
  circle: {
    divs: 12,
    class: "sk-circle"
  },
  "cube-grid": {
    divs: 9,
    class: "sk-cube-grid"
  },
  "double-bounce": {
    divs: 2,
    class: "sk-double-bounce"
  },
  "fading-circle": {
    divs: 12,
    class: "sk-fading-circle"
  },
  "folding-cube": {
    divs: 4,
    class: "sk-folding-cube"
  },
  pulse: {
    divs: 1,
    class: "sk-pulse"
  },
  "rectangle-bounce": {
    divs: 5,
    class: "sk-rectangle-bounce"
  },
  "rectangle-bounce-party": {
    divs: 5,
    class: "sk-rectangle-bounce-party"
  },
  "rectangle-bounce-pulse-out": {
    divs: 5,
    class: "sk-rectangle-bounce-pulse-out"
  },
  "rectangle-bounce-pulse-out-rapid": {
    divs: 5,
    class: "sk-rectangle-bounce-pulse-out-rapid"
  },
  "rotating-plane": {
    divs: 1,
    class: "sk-rotating-plane"
  },
  "square-jelly-box": {
    divs: 2,
    class: "sk-square-jelly-box"
  },
  "square-loader": {
    divs: 1,
    class: "sk-square-loader"
  },
  "three-bounce": {
    divs: 3,
    class: "sk-three-bounce"
  },
  "three-strings": {
    divs: 3,
    class: "sk-three-strings"
  },
  "wandering-cubes": {
    divs: 2,
    class: "sk-wandering-cubes"
  }
};
var DEFAULT_CONFIG = {
  bgsColor: "#00ACC1",
  bgsOpacity: 0.5,
  bgsPosition: POSITION.bottomRight,
  bgsSize: 60,
  bgsType: SPINNER.ballSpinClockwise,
  blur: 5,
  delay: 0,
  fastFadeOut: false,
  fgsColor: "#00ACC1",
  fgsPosition: POSITION.centerCenter,
  fgsSize: 60,
  fgsType: SPINNER.ballSpinClockwise,
  gap: 24,
  logoPosition: POSITION.centerCenter,
  logoSize: 120,
  logoUrl: "",
  masterLoaderId: DEFAULT_MASTER_LOADER_ID,
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "#00ACC1",
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 3,
  hasProgressBar: true,
  text: "",
  textColor: "#FFFFFF",
  textPosition: POSITION.centerCenter,
  maxTime: -1,
  minTime: 300
};
var NGX_UI_LOADER_CONFIG_TOKEN = new InjectionToken("ngxUiLoaderCustom.config");
var _NgxUiLoaderService = class _NgxUiLoaderService {
  /**
   * Constructor
   */
  constructor(config) {
    this.config = config;
    this.defaultConfig = __spreadValues({}, DEFAULT_CONFIG);
    if (this.config) {
      if (this.config.minTime && this.config.minTime < MIN_TIME) {
        this.config.minTime = MIN_TIME;
      }
      this.defaultConfig = __spreadValues(__spreadValues({}, this.defaultConfig), this.config);
    }
    this.loaders = {};
    this.showForeground = new BehaviorSubject({
      loaderId: "",
      isShow: false
    });
    this.showForeground$ = this.showForeground.asObservable();
    this.showBackground = new BehaviorSubject({
      loaderId: "",
      isShow: false
    });
    this.showBackground$ = this.showBackground.asObservable();
    this.fgClosing = new BehaviorSubject({
      loaderId: "",
      isShow: false
    });
    this.foregroundClosing$ = this.fgClosing.asObservable();
    this.bgClosing = new BehaviorSubject({
      loaderId: "",
      isShow: false
    });
    this.backgroundClosing$ = this.bgClosing.asObservable();
  }
  /**
   * For internal use only.
   *
   * @docs-private
   */
  bindLoaderData(loaderId) {
    const isMaster = loaderId === this.defaultConfig.masterLoaderId;
    if (this.loaders[loaderId]) {
      if (this.loaders[loaderId].isBound) {
        throw new Error(`[ngx-ui-loader] - loaderId "${loaderId}" is duplicated.`);
      }
      this.loaders[loaderId].isBound = true;
      this.loaders[loaderId].isMaster = isMaster;
      if (this.hasRunningTask(FOREGROUND, loaderId)) {
        this.showForeground.next({
          loaderId,
          isShow: true
        });
      } else {
        if (this.hasRunningTask(BACKGROUND, loaderId)) {
          this.showBackground.next({
            loaderId,
            isShow: true
          });
        }
      }
    } else {
      this.createLoaderData(loaderId, isMaster, true);
    }
  }
  /**
   * For internal use only.
   *
   * @docs-private
   */
  destroyLoaderData(loaderId) {
    this.stopAllLoader(loaderId);
    delete this.loaders[loaderId];
  }
  /**
   * Get default loader configuration
   *
   * @returns default configuration object
   */
  getDefaultConfig() {
    return __spreadValues({}, this.defaultConfig);
  }
  /**
   * Get all the loaders
   */
  getLoaders() {
    return JSON.parse(JSON.stringify(this.loaders));
  }
  /**
   * Get data of a specified loader. If loaderId is not provided, it will return data of
   * master loader(if existed). Otherwise null is returned.
   */
  getLoader(loaderId) {
    loaderId = loaderId ? loaderId : this.defaultConfig.masterLoaderId;
    if (this.loaders[loaderId]) {
      return JSON.parse(JSON.stringify(this.loaders[loaderId]));
    }
    return null;
  }
  /**
   * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
   * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
   *
   * @param loaderId the loader Id
   * @param taskId the optional task Id of the loading. taskId is set to 'fd-default' by default.
   */
  startLoader(loaderId, taskId = DEFAULT_FG_TASK_ID, time) {
    if (!this.readyToStart(loaderId, taskId, true, time)) {
      return;
    }
    if (!this.loaders[loaderId].tasks[taskId].isOtherRunning) {
      if (this.hasRunningTask(BACKGROUND, loaderId)) {
        this.backgroundCloseout(loaderId);
        this.showBackground.next({
          loaderId,
          isShow: false
        });
      }
      this.showForeground.next({
        loaderId,
        isShow: true
      });
    }
  }
  /**
   * Start the foreground loading of master loader with a specified `taskId`.
   * The loading is only closed off when all taskIds of that loader are called with stop() method.
   * NOTE: Really this function just wraps startLoader() function
   *
   * @param taskId the optional task Id of the loading. taskId is set to 'fd-default' by default.
   */
  start(taskId = DEFAULT_FG_TASK_ID, time) {
    this.startLoader(this.defaultConfig.masterLoaderId, taskId, time);
  }
  /**
   * Start the background loading of loader having `loaderId` with a specified `taskId`.
   * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
   *
   * @param loaderId the loader Id
   * @param taskId the optional task Id of the loading. taskId is set to 'bg-default' by default.
   */
  startBackgroundLoader(loaderId, taskId = DEFAULT_BG_TASK_ID, time) {
    if (!this.readyToStart(loaderId, taskId, false, time)) {
      return;
    }
    if (!this.hasRunningTask(FOREGROUND, loaderId) && !this.loaders[loaderId].tasks[taskId].isOtherRunning) {
      this.showBackground.next({
        loaderId,
        isShow: true
      });
    }
  }
  /**
   * Start the background loading of master loader with a specified `taskId`.
   * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
   * NOTE: Really this function just wraps startBackgroundLoader() function
   *
   * @param taskId the optional task Id of the loading. taskId is set to 'bg-default' by default.
   */
  startBackground(taskId = DEFAULT_BG_TASK_ID, time) {
    this.startBackgroundLoader(this.defaultConfig.masterLoaderId, taskId, time);
  }
  /**
   * Stop a foreground loading of loader having `loaderId` with specific `taskId`
   *
   * @param loaderId the loader Id
   * @param taskId the optional task Id to stop. If not provided, 'fg-default' is used.
   * @returns Object
   */
  stopLoader(loaderId, taskId = DEFAULT_FG_TASK_ID) {
    if (!this.readyToStop(loaderId, taskId)) {
      return;
    }
    if (!this.hasRunningTask(FOREGROUND, loaderId)) {
      this.foregroundCloseout(loaderId);
      this.showForeground.next({
        loaderId,
        isShow: false
      });
      if (this.hasRunningTask(BACKGROUND, loaderId)) {
        setTimeout(() => {
          if (this.hasRunningTask(BACKGROUND, loaderId)) {
            this.showBackground.next({
              loaderId,
              isShow: true
            });
          }
        }, this.defaultConfig.fastFadeOut ? FAST_OVERLAY_DISAPPEAR_TIME : OVERLAY_DISAPPEAR_TIME);
      }
    }
  }
  /**
   * Stop a foreground loading of master loader with specific `taskId`
   *
   * @param taskId the optional task Id to stop. If not provided, 'fg-default' is used.
   * @returns Object
   */
  stop(taskId = DEFAULT_FG_TASK_ID) {
    this.stopLoader(this.defaultConfig.masterLoaderId, taskId);
  }
  /**
   * Stop a background loading of loader having `loaderId` with specific `taskId`
   *
   * @param loaderId the loader Id
   * @param taskId the optional task Id to stop. If not provided, 'bg-default' is used.
   * @returns Object
   */
  stopBackgroundLoader(loaderId, taskId = DEFAULT_BG_TASK_ID) {
    if (!this.readyToStop(loaderId, taskId)) {
      return;
    }
    if (!this.hasRunningTask(FOREGROUND, loaderId) && !this.hasRunningTask(BACKGROUND, loaderId)) {
      this.backgroundCloseout(loaderId);
      this.showBackground.next({
        loaderId,
        isShow: false
      });
    }
  }
  /**
   * Stop a background loading of master loader with specific taskId
   *
   * @param taskId the optional task Id to stop. If not provided, 'bg-default' is used.
   * @returns Object
   */
  stopBackground(taskId = DEFAULT_BG_TASK_ID) {
    this.stopBackgroundLoader(this.defaultConfig.masterLoaderId, taskId);
  }
  /**
   * Stop all the background and foreground loadings of loader having `loaderId`
   *
   * @param loaderId the loader Id
   */
  stopAllLoader(loaderId) {
    if (!this.loaders[loaderId]) {
      console.warn(`[ngx-ui-loader] - loaderId "${loaderId}" does not exist.`);
      return;
    }
    if (this.hasRunningTask(FOREGROUND, loaderId)) {
      this.foregroundCloseout(loaderId);
      this.showForeground.next({
        loaderId,
        isShow: false
      });
    } else if (this.hasRunningTask(BACKGROUND, loaderId)) {
      this.backgroundCloseout(loaderId);
      this.showBackground.next({
        loaderId,
        isShow: false
      });
    }
    this.clearAllTimers(this.loaders[loaderId].tasks);
    this.loaders[loaderId].tasks = {};
  }
  /**
   * Stop all the background and foreground loadings of master loader
   */
  stopAll() {
    this.stopAllLoader(this.defaultConfig.masterLoaderId);
  }
  /**
   * Check whether the specified loader has a running task with the given `taskId`.
   * If no `taskId` specified, it will check whether the loader has any running tasks.
   * For internal use only.
   *
   * @docs-private
   * @param isForeground foreground task or background task
   * @param loaderId the loader Id
   * @param taskId the optional task Id
   * @returns boolean
   */
  hasRunningTask(isForeground, loaderId, taskId) {
    if (this.loaders[loaderId]) {
      const tasks = this.loaders[loaderId].tasks;
      if (taskId) {
        return tasks[taskId] ? tasks[taskId].startAt ? true : false : false;
      }
      return Object.keys(tasks).some((id) => !!tasks[id].startAt && tasks[id].isForeground === isForeground);
    }
    return false;
  }
  /**
   * Create loader data if it does not exist
   *
   * @docs-private
   */
  createLoaderData(loaderId, isMaster, isBound) {
    if (!this.loaders[loaderId]) {
      this.loaders[loaderId] = {
        loaderId,
        tasks: {},
        isMaster,
        isBound
      };
    }
  }
  /**
   * Manage to close foreground loading
   *
   * @docs-private
   * @param loaderId the loader id
   */
  foregroundCloseout(loaderId) {
    this.fgClosing.next({
      loaderId,
      isShow: true
    });
    setTimeout(() => {
      this.fgClosing.next({
        loaderId,
        isShow: false
      });
    }, this.defaultConfig.fastFadeOut ? FAST_CLOSING_TIME : CLOSING_TIME);
  }
  /**
   * Manage to close background loading
   *
   * @docs-private
   * @param loaderId the loader id
   */
  backgroundCloseout(loaderId) {
    this.bgClosing.next({
      loaderId,
      isShow: true
    });
    setTimeout(() => {
      this.bgClosing.next({
        loaderId,
        isShow: false
      });
    }, this.defaultConfig.fastFadeOut ? FAST_CLOSING_TIME : CLOSING_TIME);
  }
  /**
   * Clear all timers of the given task
   *
   * @docs-private
   */
  clearTimers(task) {
    clearTimeout(task.delayTimer);
    clearTimeout(task.maxTimer);
    clearTimeout(task.minTimer);
  }
  /**
   * Clear all timers of the given tasks
   *
   * @docs-private
   */
  clearAllTimers(tasks) {
    Object.keys(tasks).map((id) => {
      this.clearTimers(tasks[id]);
    });
  }
  /**
   * @docs-private
   */
  readyToStart(loaderId, taskId, isForeground, time = DEFAULT_TIME) {
    this.createLoaderData(loaderId, void 0, false);
    const isOtherRunning = this.hasRunningTask(isForeground, loaderId);
    if (!this.loaders[loaderId].tasks[taskId]) {
      this.loaders[loaderId].tasks[taskId] = {
        taskId,
        isForeground,
        minTime: time.minTime >= MIN_TIME ? time.minTime : this.defaultConfig.minTime,
        maxTime: time.maxTime ? time.maxTime : this.defaultConfig.maxTime,
        delay: time.delay >= MIN_DELAY ? time.delay : this.defaultConfig.delay
      };
    } else {
      if (this.loaders[loaderId].tasks[taskId].isForeground !== isForeground) {
        throw new Error(`[ngx-ui-loader] - taskId "${taskId}" is duplicated.`);
      }
    }
    if (this.setDelayTimer(this.loaders[loaderId].tasks[taskId], loaderId)) {
      return false;
    }
    this.loaders[loaderId].tasks[taskId] = __spreadProps(__spreadValues({}, this.loaders[loaderId].tasks[taskId]), {
      isOtherRunning,
      startAt: Date.now()
    });
    this.setMaxTimer(this.loaders[loaderId].tasks[taskId], loaderId);
    if (!this.loaders[loaderId].isBound) {
      return false;
    }
    return true;
  }
  /**
   * @docs-private
   */
  readyToStop(loaderId, taskId) {
    if (!this.loaders[loaderId]) {
      console.warn(`[ngx-ui-loader] - loaderId "${loaderId}" does not exist.`);
      return false;
    }
    const task = this.loaders[loaderId].tasks[taskId];
    if (!task) {
      return false;
    }
    if (task.isDelayed) {
      this.clearTimers(task);
      delete this.loaders[loaderId].tasks[taskId];
      return false;
    }
    if (this.setMinTimer(task, loaderId)) {
      return false;
    }
    this.clearTimers(task);
    delete this.loaders[loaderId].tasks[taskId];
    return true;
  }
  /**
   * Set delay timer, if `delay` > 0
   *
   * @docs-private
   * @returns boolean
   */
  setDelayTimer(task, loaderId) {
    if (task.delay > MIN_DELAY) {
      if (task.isDelayed) {
        return true;
      }
      if (!task.delayTimer) {
        task.isDelayed = true;
        task.delayTimer = setTimeout(() => {
          task.isDelayed = false;
          if (task.isForeground) {
            this.startLoader(loaderId, task.taskId);
          } else {
            this.startBackgroundLoader(loaderId, task.taskId);
          }
        }, task.delay);
        return true;
      }
    }
    return false;
  }
  /**
   * Set maxTimer if `maxTime` > `minTime`
   *
   * @docs-private
   * @returns boolean
   */
  setMaxTimer(task, loaderId) {
    if (task.maxTime > task.minTime) {
      clearTimeout(task.maxTimer);
      task.maxTimer = setTimeout(() => {
        if (task.isForeground) {
          this.stopLoader(loaderId, task.taskId);
        } else {
          this.stopBackgroundLoader(loaderId, task.taskId);
        }
      }, task.maxTime);
    }
  }
  /**
   * Set minTimer if `startAt` + `minTime` > `Date.now()`
   *
   * @docs-private
   * @returns boolean
   */
  setMinTimer(task, loaderId) {
    const now = Date.now();
    if (task.startAt) {
      if (task.startAt + task.minTime > now) {
        task.minTimer = setTimeout(() => {
          if (task.isForeground) {
            this.stopLoader(loaderId, task.taskId);
          } else {
            this.stopBackgroundLoader(loaderId, task.taskId);
          }
        }, task.startAt + task.minTime - now);
        return true;
      }
    }
    return false;
  }
};
_NgxUiLoaderService.\u0275fac = function NgxUiLoaderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxUiLoaderService)(\u0275\u0275inject(NGX_UI_LOADER_CONFIG_TOKEN, 8));
};
_NgxUiLoaderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgxUiLoaderService,
  factory: _NgxUiLoaderService.\u0275fac,
  providedIn: "root"
});
var NgxUiLoaderService = _NgxUiLoaderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxUiLoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_UI_LOADER_CONFIG_TOKEN]
    }]
  }], null);
})();
var _NgxUiLoaderComponent = class _NgxUiLoaderComponent {
  /**
   * Constructor
   */
  constructor(domSanitizer, changeDetectorRef, ngxService) {
    this.domSanitizer = domSanitizer;
    this.changeDetectorRef = changeDetectorRef;
    this.ngxService = ngxService;
    this.initialized = false;
    this.defaultConfig = this.ngxService.getDefaultConfig();
    this.bgsColor = this.defaultConfig.bgsColor;
    this.bgsOpacity = this.defaultConfig.bgsOpacity;
    this.bgsPosition = this.defaultConfig.bgsPosition;
    this.bgsSize = this.defaultConfig.bgsSize;
    this.bgsType = this.defaultConfig.bgsType;
    this.fastFadeOut = this.defaultConfig.fastFadeOut;
    this.fgsColor = this.defaultConfig.fgsColor;
    this.fgsPosition = this.defaultConfig.fgsPosition;
    this.fgsSize = this.defaultConfig.fgsSize;
    this.fgsType = this.defaultConfig.fgsType;
    this.gap = this.defaultConfig.gap;
    this.loaderId = this.defaultConfig.masterLoaderId;
    this.logoPosition = this.defaultConfig.logoPosition;
    this.logoSize = this.defaultConfig.logoSize;
    this.logoUrl = this.defaultConfig.logoUrl;
    this.overlayBorderRadius = this.defaultConfig.overlayBorderRadius;
    this.overlayColor = this.defaultConfig.overlayColor;
    this.pbColor = this.defaultConfig.pbColor;
    this.pbDirection = this.defaultConfig.pbDirection;
    this.pbThickness = this.defaultConfig.pbThickness;
    this.hasProgressBar = this.defaultConfig.hasProgressBar;
    this.text = this.defaultConfig.text;
    this.textColor = this.defaultConfig.textColor;
    this.textPosition = this.defaultConfig.textPosition;
  }
  /**
   * On init event
   */
  ngOnInit() {
    this.initializeSpinners();
    this.ngxService.bindLoaderData(this.loaderId);
    this.determinePositions();
    this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
    this.showForegroundWatcher = this.ngxService.showForeground$.pipe(filter((showEvent) => this.loaderId === showEvent.loaderId)).subscribe((data) => {
      this.showForeground = data.isShow;
      this.changeDetectorRef.markForCheck();
    });
    this.showBackgroundWatcher = this.ngxService.showBackground$.pipe(filter((showEvent) => this.loaderId === showEvent.loaderId)).subscribe((data) => {
      this.showBackground = data.isShow;
      this.changeDetectorRef.markForCheck();
    });
    this.foregroundClosingWatcher = this.ngxService.foregroundClosing$.pipe(filter((showEvent) => this.loaderId === showEvent.loaderId)).subscribe((data) => {
      this.foregroundClosing = data.isShow;
      this.changeDetectorRef.markForCheck();
    });
    this.backgroundClosingWatcher = this.ngxService.backgroundClosing$.pipe(filter((showEvent) => this.loaderId === showEvent.loaderId)).subscribe((data) => {
      this.backgroundClosing = data.isShow;
      this.changeDetectorRef.markForCheck();
    });
    this.initialized = true;
  }
  /**
   * On changes event
   */
  ngOnChanges(changes) {
    if (!this.initialized) {
      return;
    }
    const bgsTypeChange = changes["bgsType"];
    const fgsTypeChange = changes["fgsType"];
    const logoUrlChange = changes["logoUrl"];
    if (fgsTypeChange || bgsTypeChange) {
      this.initializeSpinners();
    }
    this.determinePositions();
    if (logoUrlChange) {
      this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
    }
  }
  /**
   * On destroy event
   */
  ngOnDestroy() {
    this.ngxService.destroyLoaderData(this.loaderId);
    if (this.showForegroundWatcher) {
      this.showForegroundWatcher.unsubscribe();
    }
    if (this.showBackgroundWatcher) {
      this.showBackgroundWatcher.unsubscribe();
    }
    if (this.foregroundClosingWatcher) {
      this.foregroundClosingWatcher.unsubscribe();
    }
    if (this.backgroundClosingWatcher) {
      this.backgroundClosingWatcher.unsubscribe();
    }
  }
  /**
   * Initialize spinners
   */
  initializeSpinners() {
    this.fgDivs = Array(SPINNER_CONFIG[this.fgsType].divs).fill(1);
    this.fgSpinnerClass = SPINNER_CONFIG[this.fgsType].class;
    this.bgDivs = Array(SPINNER_CONFIG[this.bgsType].divs).fill(1);
    this.bgSpinnerClass = SPINNER_CONFIG[this.bgsType].class;
  }
  /**
   * Determine the positions of spinner, logo and text
   */
  determinePositions() {
    this.logoTop = "initial";
    this.spinnerTop = "initial";
    this.textTop = "initial";
    const textSize = 24;
    if (this.logoPosition.startsWith("center")) {
      this.logoTop = "50%";
    } else if (this.logoPosition.startsWith("top")) {
      this.logoTop = "30px";
    }
    if (this.fgsPosition.startsWith("center")) {
      this.spinnerTop = "50%";
    } else if (this.fgsPosition.startsWith("top")) {
      this.spinnerTop = "30px";
    }
    if (this.textPosition.startsWith("center")) {
      this.textTop = "50%";
    } else if (this.textPosition.startsWith("top")) {
      this.textTop = "30px";
    }
    if (this.fgsPosition === POSITION.centerCenter) {
      if (this.logoUrl && this.logoPosition === POSITION.centerCenter) {
        if (this.text && this.textPosition === POSITION.centerCenter) {
          this.logoTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% - ${this.fgsSize / 2}px - ${textSize / 2}px - ${this.gap}px)`);
          this.spinnerTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% + ${this.logoSize / 2}px - ${textSize / 2}px)`);
          this.textTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% + ${this.logoSize / 2}px + ${this.gap}px + ${this.fgsSize / 2}px)`);
        } else {
          this.logoTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% - ${this.fgsSize / 2}px - ${this.gap / 2}px)`);
          this.spinnerTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% + ${this.logoSize / 2}px + ${this.gap / 2}px)`);
        }
      } else {
        if (this.text && this.textPosition === POSITION.centerCenter) {
          this.spinnerTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% - ${textSize / 2}px - ${this.gap / 2}px)`);
          this.textTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% + ${this.fgsSize / 2}px + ${this.gap / 2}px)`);
        }
      }
    } else {
      if (this.logoUrl && this.logoPosition === POSITION.centerCenter && this.text && this.textPosition === POSITION.centerCenter) {
        this.logoTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% - ${textSize / 2}px - ${this.gap / 2}px)`);
        this.textTop = this.domSanitizer.bypassSecurityTrustStyle(`calc(50% + ${this.logoSize / 2}px + ${this.gap / 2}px)`);
      }
    }
  }
};
_NgxUiLoaderComponent.\u0275fac = function NgxUiLoaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxUiLoaderComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgxUiLoaderService));
};
_NgxUiLoaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NgxUiLoaderComponent,
  selectors: [["ngx-ui-loader"]],
  inputs: {
    bgsColor: "bgsColor",
    bgsOpacity: "bgsOpacity",
    bgsPosition: "bgsPosition",
    bgsSize: "bgsSize",
    bgsTemplate: "bgsTemplate",
    bgsType: "bgsType",
    fgsColor: "fgsColor",
    fgsPosition: "fgsPosition",
    fgsSize: "fgsSize",
    fgsTemplate: "fgsTemplate",
    fgsType: "fgsType",
    gap: "gap",
    loaderId: "loaderId",
    logoPosition: "logoPosition",
    logoSize: "logoSize",
    logoUrl: "logoUrl",
    overlayBorderRadius: "overlayBorderRadius",
    overlayColor: "overlayColor",
    pbColor: "pbColor",
    pbDirection: "pbDirection",
    pbThickness: "pbThickness",
    hasProgressBar: "hasProgressBar",
    text: "text",
    textColor: "textColor",
    textPosition: "textPosition"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 14,
  vars: 50,
  consts: [["foregroundTemplate", ""], ["backgroundTemplate", ""], ["class", "ngx-progress-bar", 3, "ngx-position-absolute", "ngClass", "height", "color", "loading-foreground", "foreground-closing", "fast-closing", 4, "ngIf"], [1, "ngx-overlay"], ["class", "ngx-loading-logo", 3, "ngClass", "src", "width", "height", "top", 4, "ngIf"], [1, "ngx-foreground-spinner", 3, "ngClass"], [3, "class", 4, "ngIf", "ngIfElse"], [1, "ngx-loading-text", 3, "ngClass"], [1, "ngx-background-spinner", 3, "ngClass"], [1, "ngx-progress-bar", 3, "ngClass"], [1, "ngx-loading-logo", 3, "ngClass", "src"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet"]],
  template: function NgxUiLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NgxUiLoaderComponent_div_0_Template, 1, 13, "div", 2);
      \u0275\u0275elementStart(1, "div", 3);
      \u0275\u0275template(2, NgxUiLoaderComponent_img_2_Template, 1, 8, "img", 4);
      \u0275\u0275elementStart(3, "div", 5);
      \u0275\u0275template(4, NgxUiLoaderComponent_div_4_Template, 2, 3, "div", 6)(5, NgxUiLoaderComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275template(11, NgxUiLoaderComponent_div_11_Template, 2, 3, "div", 6)(12, NgxUiLoaderComponent_ng_template_12_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const foregroundTemplate_r2 = \u0275\u0275reference(6);
      const backgroundTemplate_r3 = \u0275\u0275reference(13);
      \u0275\u0275property("ngIf", ctx.hasProgressBar);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background-color", ctx.overlayColor)("border-radius", ctx.overlayBorderRadius);
      \u0275\u0275classProp("ngx-position-absolute", ctx.loaderId !== ctx.defaultConfig.masterLoaderId)("loading-foreground", ctx.showForeground)("foreground-closing", ctx.foregroundClosing)("fast-closing", ctx.foregroundClosing && ctx.fastFadeOut);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.logoUrl);
      \u0275\u0275advance();
      \u0275\u0275styleProp("color", ctx.fgsColor)("width", ctx.fgsSize, "px")("height", ctx.fgsSize, "px")("top", ctx.spinnerTop);
      \u0275\u0275property("ngClass", ctx.fgsPosition);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.fgsTemplate)("ngIfElse", foregroundTemplate_r2);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("top", ctx.textTop)("color", ctx.textColor);
      \u0275\u0275property("ngClass", ctx.textPosition);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.text);
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.bgsSize, "px")("height", ctx.bgsSize, "px")("color", ctx.bgsColor)("opacity", ctx.bgsOpacity);
      \u0275\u0275classProp("ngx-position-absolute", ctx.loaderId !== ctx.defaultConfig.masterLoaderId)("loading-background", ctx.showBackground)("background-closing", ctx.backgroundClosing)("fast-closing", ctx.backgroundClosing && ctx.fastFadeOut);
      \u0275\u0275property("ngClass", ctx.bgsPosition);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.bgsTemplate)("ngIfElse", backgroundTemplate_r3);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet],
  styles: ['.ngx-progress-bar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:3px;z-index:99999!important;display:none;color:#00acc1;overflow:hidden}.ngx-progress-bar.loading-foreground[_ngcontent-%COMP%], .ngx-progress-bar.foreground-closing[_ngcontent-%COMP%]{display:block}.ngx-progress-bar.foreground-closing[_ngcontent-%COMP%]{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-progress-bar.fast-closing[_ngcontent-%COMP%]{transition:opacity .3s ease-out .3s!important}.ngx-progress-bar[_ngcontent-%COMP%]:before, .ngx-progress-bar[_ngcontent-%COMP%]:after{background-color:currentColor;content:"";display:block;width:100%;height:100%;position:absolute;top:0}.ngx-progress-bar-ltr[_ngcontent-%COMP%]:before{transform:translate3d(-100%,0,0)}.ngx-progress-bar-ltr[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_progressBar-slide-ltr 12s ease-out 0s 1 normal;transform:translate3d(-5%,0,0)}.ngx-progress-bar-rtl[_ngcontent-%COMP%]:before{transform:translate3d(100%,0,0)}.ngx-progress-bar-rtl[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_progressBar-slide-rtl 12s ease-out 0s 1 normal;transform:translate3d(5%,0,0)}.foreground-closing.ngx-progress-bar-ltr[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progressBar-slide-complete-ltr 1s ease-out 0s 1;transform:translateZ(0)}.fast-closing.ngx-progress-bar-ltr[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progressBar-slide-complete-ltr .6s ease-out 0s 1!important}.foreground-closing.ngx-progress-bar-rtl[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progressBar-slide-complete-rtl 1s ease-out 0s 1;transform:translateZ(0)}.fast-closing.ngx-progress-bar-rtl[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progressBar-slide-complete-rtl .6s ease-out 0s 1!important}@keyframes _ngcontent-%COMP%_progressBar-slide-ltr{0%{transform:translate3d(-100%,0,0)}to{transform:translate3d(-5%,0,0)}}@keyframes _ngcontent-%COMP%_progressBar-slide-rtl{0%{transform:translate3d(100%,0,0)}to{transform:translate3d(5%,0,0)}}@keyframes _ngcontent-%COMP%_progressBar-slide-complete-ltr{0%{transform:translate3d(-75%,0,0)}50%{transform:translateZ(0)}}@keyframes _ngcontent-%COMP%_progressBar-slide-complete-rtl{0%{transform:translate3d(75%,0,0)}50%{transform:translateZ(0)}}.ngx-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998!important;background-color:#282828cc;cursor:progress;display:none}.ngx-overlay.loading-foreground[_ngcontent-%COMP%], .ngx-overlay.foreground-closing[_ngcontent-%COMP%]{display:block}.ngx-overlay.foreground-closing[_ngcontent-%COMP%]{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-overlay.fast-closing[_ngcontent-%COMP%]{transition:opacity .3s ease-out .3s!important}.ngx-overlay[_ngcontent-%COMP%] > .ngx-foreground-spinner[_ngcontent-%COMP%]{position:fixed;width:60px;height:60px;margin:0;color:#00acc1}.ngx-overlay[_ngcontent-%COMP%] > .ngx-loading-logo[_ngcontent-%COMP%]{position:fixed;margin:0;width:120px;height:120px}.ngx-overlay[_ngcontent-%COMP%] > .ngx-loading-text[_ngcontent-%COMP%]{position:fixed;margin:0;font-family:sans-serif;font-weight:400;font-size:1.2em;color:#fff}.ngx-background-spinner[_ngcontent-%COMP%]{position:fixed;z-index:99997!important;width:60px;height:60px;margin:0;color:#00acc1;opacity:.6;display:none}.ngx-background-spinner.loading-background[_ngcontent-%COMP%], .ngx-background-spinner.background-closing[_ngcontent-%COMP%]{display:block}.ngx-background-spinner.background-closing[_ngcontent-%COMP%]{opacity:0!important;transition:opacity .7s ease-out}.ngx-background-spinner.fast-closing[_ngcontent-%COMP%]{transition:opacity .4s ease-out!important}.ngx-position-absolute[_ngcontent-%COMP%]{position:absolute!important}.ngx-position-absolute[_ngcontent-%COMP%] > .ngx-foreground-spinner[_ngcontent-%COMP%], .ngx-position-absolute[_ngcontent-%COMP%] > .ngx-loading-logo[_ngcontent-%COMP%], .ngx-position-absolute[_ngcontent-%COMP%] > .ngx-loading-text[_ngcontent-%COMP%]{position:absolute!important}.ngx-position-absolute.ngx-progress-bar[_ngcontent-%COMP%]{z-index:99996!important}.ngx-position-absolute.ngx-overlay[_ngcontent-%COMP%]{z-index:99995!important}.ngx-position-absolute.ngx-background-spinner[_ngcontent-%COMP%]{z-index:99994!important}.ngx-position-absolute[_ngcontent-%COMP%]   .sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){z-index:99994!important}.top-left[_ngcontent-%COMP%]{top:30px;left:30px}.top-center[_ngcontent-%COMP%]{top:30px;left:50%;transform:translate(-50%)}.top-right[_ngcontent-%COMP%]{top:30px;right:30px}.center-left[_ngcontent-%COMP%]{top:50%;left:30px;transform:translateY(-50%)}.center-center[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}.center-right[_ngcontent-%COMP%]{top:50%;right:30px;transform:translateY(-50%)}.bottom-left[_ngcontent-%COMP%]{bottom:30px;left:30px}.bottom-center[_ngcontent-%COMP%]{bottom:30px;left:50%;transform:translate(-50%)}.bottom-right[_ngcontent-%COMP%]{bottom:30px;right:30px}.sk-ball-scale-multiple[_ngcontent-%COMP%], .sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-scale-multiple[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0}.sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;opacity:0;animation:_ngcontent-%COMP%_ball-scale-multiple 1s 0s linear infinite}.sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:.4s}@keyframes _ngcontent-%COMP%_ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}.sk-ball-spin[_ngcontent-%COMP%], .sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-spin[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;animation:_ngcontent-%COMP%_ball-spin-clockwise 1s infinite ease-in-out}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;animation-delay:-1.125s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;animation-delay:-1.25s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;animation-delay:-1.375s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;animation-delay:-1.5s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;animation-delay:-1.625s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;animation-delay:-1.75s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;animation-delay:-1.875s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;animation-delay:-2s}@keyframes _ngcontent-%COMP%_ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.sk-ball-spin-clockwise[_ngcontent-%COMP%], .sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;animation:_ngcontent-%COMP%_ball-spin-clockwise 1s infinite ease-in-out}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;animation-delay:-.875s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;animation-delay:-.75s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;animation-delay:-.625s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;animation-delay:-.5s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;animation-delay:-.375s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;animation-delay:-.25s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;animation-delay:-.125s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;animation-delay:0s}@keyframes _ngcontent-%COMP%_ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{font-size:0;width:100%;height:100%;animation:_ngcontent-%COMP%_ball-spin-clockwise-fade-rotating-rotate 6s infinite linear}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;animation:_ngcontent-%COMP%_ball-spin-clockwise-fade-rotating 1s infinite linear}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;animation-delay:-.875s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;animation-delay:-.75s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;animation-delay:-.625s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;animation-delay:-.5s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;animation-delay:-.375s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;animation-delay:-.25s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;animation-delay:-.125s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;animation-delay:0s}@keyframes _ngcontent-%COMP%_ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-360deg)}}@keyframes _ngcontent-%COMP%_ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%], .sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0;animation:_ngcontent-%COMP%_ball-spin-fade-rotate 6s infinite linear}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;animation:_ngcontent-%COMP%_ball-spin-fade 1s infinite linear}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;animation-delay:-1.125s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;animation-delay:-1.25s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;animation-delay:-1.375s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;animation-delay:-1.5s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;animation-delay:-1.625s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;animation-delay:-1.75s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;animation-delay:-1.875s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;animation-delay:-2s}@keyframes _ngcontent-%COMP%_ball-spin-fade-rotate{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.sk-chasing-dots[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:absolute;text-align:center;animation:_ngcontent-%COMP%_sk-chasingDots-rotate 2s infinite linear}.sk-chasing-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:currentColor;border-radius:100%;animation:_ngcontent-%COMP%_sk-chasingDots-bounce 2s infinite ease-in-out}.sk-chasing-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:auto;bottom:0;animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-chasingDots-rotate{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_sk-chasingDots-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.sk-circle[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:relative}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;animation:_ngcontent-%COMP%_sk-circle-bounceDelay 1.2s infinite ease-in-out both}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2):before{animation-delay:-1.1s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3):before{animation-delay:-1s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4):before{animation-delay:-.9s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5):before{animation-delay:-.8s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6):before{animation-delay:-.7s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7):before{animation-delay:-.6s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8):before{animation-delay:-.5s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9):before{animation-delay:-.4s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10):before{animation-delay:-.3s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11):before{animation-delay:-.2s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12):before{animation-delay:-.1s}@keyframes _ngcontent-%COMP%_sk-circle-bounceDelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.sk-cube-grid[_ngcontent-%COMP%]{width:100%;height:100%;margin:auto}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:33%;height:33%;background-color:currentColor;float:left;animation:_ngcontent-%COMP%_sk-cubeGrid-scaleDelay 1.3s infinite ease-in-out}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:.4s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){animation-delay:0s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){animation-delay:.2s}@keyframes _ngcontent-%COMP%_sk-cubeGrid-scaleDelay{0%,70%,to{transform:scaleZ(1)}35%{transform:scale3D(0,0,1)}}.sk-double-bounce[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;margin:auto}.sk-double-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-doubleBounce-bounce 2s infinite ease-in-out}.sk-double-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-doubleBounce-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.sk-fading-circle[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:relative}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;animation:_ngcontent-%COMP%_sk-fadingCircle-FadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2):before{animation-delay:-1.1s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3):before{animation-delay:-1s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4):before{animation-delay:-.9s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5):before{animation-delay:-.8s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6):before{animation-delay:-.7s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7):before{animation-delay:-.6s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8):before{animation-delay:-.5s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9):before{animation-delay:-.4s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10):before{animation-delay:-.3s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11):before{animation-delay:-.2s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12):before{animation-delay:-.1s}@keyframes _ngcontent-%COMP%_sk-fadingCircle-FadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}.sk-folding-cube[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:relative;transform:rotate(45deg)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{float:left;width:50%;height:50%;position:relative;transform:scale(1.1)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;animation:_ngcontent-%COMP%_sk-foldingCube-angle 2.4s infinite linear both;transform-origin:100% 100%}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){transform:scale(1.1) rotate(90deg)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){transform:scale(1.1) rotate(270deg)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){transform:scale(1.1) rotate(180deg)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2):before{animation-delay:.3s}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3):before{animation-delay:.9s}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4):before{animation-delay:.6s}@keyframes _ngcontent-%COMP%_sk-foldingCube-angle{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}90%,to{transform:perspective(140px) rotateY(180deg);opacity:0}}.sk-pulse[_ngcontent-%COMP%]{width:100%;height:100%;margin:auto}.sk-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background-color:currentColor;border-radius:100%;animation:_ngcontent-%COMP%_sk-pulse-scaleOut 1s infinite ease-in-out}@keyframes _ngcontent-%COMP%_sk-pulse-scaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}.sk-rectangle-bounce[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;height:100%;width:10%;margin:0 5%;display:inline-block;animation:_ngcontent-%COMP%_sk-rectangleBounce-stretchDelay 1.2s infinite ease-in-out}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-1.1s}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-1s}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){animation-delay:-.9s}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){animation-delay:-.8s}@keyframes _ngcontent-%COMP%_sk-rectangleBounce-stretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.sk-rectangle-bounce-party[_ngcontent-%COMP%], .sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-rectangle-bounce-party[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10%;height:100%;margin:0 5%;border-radius:0;animation-name:_ngcontent-%COMP%_rectangle-bounce-party;animation-iteration-count:infinite}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){animation-duration:.43s;animation-delay:-.23s}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-duration:.62s;animation-delay:-.32s}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-duration:.43s;animation-delay:-.44s}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){animation-duration:.8s;animation-delay:-.31s}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){animation-duration:.74s;animation-delay:-.24s}@keyframes _ngcontent-%COMP%_rectangle-bounce-party{0%{transform:scaleY(1)}50%{transform:scaleY(.4)}to{transform:scaleY(1)}}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%], .sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10%;height:100%;margin:0 5%;border-radius:0;animation:_ngcontent-%COMP%_rectangle-bounce-pulse-out .9s infinite cubic-bezier(.85,.25,.37,.85)}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.9s}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){animation-delay:-.7s}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){animation-delay:-.5s}@keyframes _ngcontent-%COMP%_rectangle-bounce-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.4)}to{transform:scaley(1)}}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%], .sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10%;height:100%;margin:0 5%;border-radius:0;animation:_ngcontent-%COMP%_rectangle-bounce-pulse-out-rapid .9s infinite cubic-bezier(.11,.49,.38,.78)}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.9s}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){animation-delay:-.65s}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){animation-delay:-.4s}@keyframes _ngcontent-%COMP%_rectangle-bounce-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.4)}90%{transform:scaley(1)}}.sk-rotating-plane[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center;margin:auto}.sk-rotating-plane[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background-color:currentColor;animation:_ngcontent-%COMP%_sk-rotatePlane 1.2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.sk-square-jelly-box[_ngcontent-%COMP%], .sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-square-jelly-box[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0}.sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){position:absolute;left:0;width:100%}.sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:-25%;z-index:99997;height:100%;border-radius:10%;animation:_ngcontent-%COMP%_square-jelly-box-animate .6s -.1s linear infinite}.sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;animation:_ngcontent-%COMP%_square-jelly-box-shadow .6s -.1s linear infinite}@keyframes _ngcontent-%COMP%_square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@keyframes _ngcontent-%COMP%_square-jelly-box-shadow{50%{transform:scaleX(1.25)}}.sk-square-loader[_ngcontent-%COMP%], .sk-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-square-loader[_ngcontent-%COMP%]{font-size:0;width:100%;height:100%}.sk-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background:transparent;border-width:3px;border-radius:0;animation:_ngcontent-%COMP%_square-loader 2s infinite ease}.sk-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{display:inline-block;width:100%;vertical-align:top;content:"";background-color:currentColor;animation:_ngcontent-%COMP%_square-loader-inner 2s infinite ease-in}@keyframes _ngcontent-%COMP%_square-loader{0%{transform:rotate(0)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(360deg)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}.sk-three-bounce[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center}.sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:35%;width:30%;height:30%;background-color:currentColor;border-radius:100%;display:inline-block;animation:_ngcontent-%COMP%_sk-threeBounce-bounceDelay 1.4s infinite ease-in-out both}.bottom-center[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .bottom-left[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .bottom-right[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:70%!important}.top-center[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .top-left[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .top-right[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:0!important}.sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){animation-delay:-.32s}.sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.16s}@keyframes _ngcontent-%COMP%_sk-threeBounce-bounceDelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.sk-three-strings[_ngcontent-%COMP%]{width:100%;height:100%}.sk-three-strings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.sk-three-strings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){left:0%;top:0%;animation:_ngcontent-%COMP%_sk-threeStrings-rotateOne 1s linear infinite;border-bottom:3px solid currentColor}.sk-three-strings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){right:0%;top:0%;animation:_ngcontent-%COMP%_sk-threeStrings-rotateTwo 1s linear infinite;border-right:3px solid currentColor}.sk-three-strings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){right:0%;bottom:0%;animation:_ngcontent-%COMP%_sk-threeStrings-rotateThree 1s linear infinite;border-top:3px solid currentColor}@keyframes _ngcontent-%COMP%_sk-threeStrings-rotateOne{0%{transform:rotateX(35deg) rotateY(-45deg) rotate(0)}to{transform:rotateX(35deg) rotateY(-45deg) rotate(360deg)}}@keyframes _ngcontent-%COMP%_sk-threeStrings-rotateTwo{0%{transform:rotateX(50deg) rotateY(10deg) rotate(0)}to{transform:rotateX(50deg) rotateY(10deg) rotate(360deg)}}@keyframes _ngcontent-%COMP%_sk-threeStrings-rotateThree{0%{transform:rotateX(35deg) rotateY(55deg) rotate(0)}to{transform:rotateX(35deg) rotateY(55deg) rotate(360deg)}}.sk-wandering-cubes[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:relative;text-align:center}.sk-wandering-cubes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;width:25%;height:25%;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-wanderingCubes-cubeMove 1.8s infinite ease-in-out}.sk-wandering-cubes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.9s}@keyframes _ngcontent-%COMP%_sk-wanderingCubes-cubeMove{25%{transform:translate(290%) rotate(-90deg) scale(.5)}50%{transform:translate(290%) translateY(290%) rotate(-179deg)}50.1%{transform:translate(290%) translateY(290%) rotate(-180deg)}75%{transform:translate(0) translateY(290%) rotate(-270deg) scale(.5)}to{transform:rotate(-360deg)}}'],
  changeDetection: 0
});
var NgxUiLoaderComponent = _NgxUiLoaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxUiLoaderComponent, [{
    type: Component,
    args: [{
      selector: "ngx-ui-loader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<!-- Progress bar {{{ -->
<div
  *ngIf="hasProgressBar"
  class="ngx-progress-bar"
  [class.ngx-position-absolute]="loaderId !== defaultConfig.masterLoaderId"
  [ngClass]="'ngx-progress-bar-' + pbDirection"
  [style.height.px]="pbThickness"
  [style.color]="pbColor"
  [class.loading-foreground]="showForeground"
  [class.foreground-closing]="foregroundClosing"
  [class.fast-closing]="foregroundClosing && fastFadeOut"
></div>
<!-- Progress bar }}} -->

<!-- Foreground container {{{ -->
<div
  class="ngx-overlay"
  [class.ngx-position-absolute]="loaderId !== defaultConfig.masterLoaderId"
  [style.background-color]="overlayColor"
  [style.border-radius]="overlayBorderRadius"
  [class.loading-foreground]="showForeground"
  [class.foreground-closing]="foregroundClosing"
  [class.fast-closing]="foregroundClosing && fastFadeOut"
>
  <!-- Logo {{{ -->
  <img
    *ngIf="logoUrl"
    class="ngx-loading-logo"
    [ngClass]="logoPosition"
    [src]="trustedLogoUrl"
    [style.width.px]="logoSize"
    [style.height.px]="logoSize"
    [style.top]="logoTop"
  />
  <!-- Logo }}} -->

  <!-- Foreground spinner {{{ -->
  <div
    class="ngx-foreground-spinner"
    [ngClass]="fgsPosition"
    [style.color]="fgsColor"
    [style.width.px]="fgsSize"
    [style.height.px]="fgsSize"
    [style.top]="spinnerTop"
  >
    <div *ngIf="!fgsTemplate; else foregroundTemplate" [class]="fgSpinnerClass">
      <div *ngFor="let div of fgDivs"></div>
    </div>
    <ng-template #foregroundTemplate>
      <ng-container *ngTemplateOutlet="fgsTemplate"></ng-container>
    </ng-template>
  </div>
  <!-- Foreground spinner }}} -->

  <!-- Loading text {{{ -->
  <div
    class="ngx-loading-text"
    [ngClass]="textPosition"
    [style.top]="textTop"
    [style.color]="textColor"
  >
    <span>{{ text }}</span>
  </div>
  <!-- Loading text }}} -->
</div>
<!-- Foreground container }}} -->

<!-- Background spinner {{{ -->
<div
  class="ngx-background-spinner"
  [class.ngx-position-absolute]="loaderId !== defaultConfig.masterLoaderId"
  [ngClass]="bgsPosition"
  [class.loading-background]="showBackground"
  [class.background-closing]="backgroundClosing"
  [class.fast-closing]="backgroundClosing && fastFadeOut"
  [style.width.px]="bgsSize"
  [style.height.px]="bgsSize"
  [style.color]="bgsColor"
  [style.opacity]="bgsOpacity"
>
  <div *ngIf="!bgsTemplate; else backgroundTemplate" [class]="bgSpinnerClass">
    <div *ngFor="let div of bgDivs"></div>
  </div>
  <ng-template #backgroundTemplate>
    <ng-container *ngTemplateOutlet="bgsTemplate"></ng-container>
  </ng-template>
</div>
<!-- Background spinner }}} -->
`,
      styles: ['.ngx-progress-bar{position:fixed;top:0;left:0;width:100%;height:3px;z-index:99999!important;display:none;color:#00acc1;overflow:hidden}.ngx-progress-bar.loading-foreground,.ngx-progress-bar.foreground-closing{display:block}.ngx-progress-bar.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-progress-bar.fast-closing{transition:opacity .3s ease-out .3s!important}.ngx-progress-bar:before,.ngx-progress-bar:after{background-color:currentColor;content:"";display:block;width:100%;height:100%;position:absolute;top:0}.ngx-progress-bar-ltr:before{transform:translate3d(-100%,0,0)}.ngx-progress-bar-ltr:after{animation:progressBar-slide-ltr 12s ease-out 0s 1 normal;transform:translate3d(-5%,0,0)}.ngx-progress-bar-rtl:before{transform:translate3d(100%,0,0)}.ngx-progress-bar-rtl:after{animation:progressBar-slide-rtl 12s ease-out 0s 1 normal;transform:translate3d(5%,0,0)}.foreground-closing.ngx-progress-bar-ltr:before{animation:progressBar-slide-complete-ltr 1s ease-out 0s 1;transform:translateZ(0)}.fast-closing.ngx-progress-bar-ltr:before{animation:progressBar-slide-complete-ltr .6s ease-out 0s 1!important}.foreground-closing.ngx-progress-bar-rtl:before{animation:progressBar-slide-complete-rtl 1s ease-out 0s 1;transform:translateZ(0)}.fast-closing.ngx-progress-bar-rtl:before{animation:progressBar-slide-complete-rtl .6s ease-out 0s 1!important}@keyframes progressBar-slide-ltr{0%{transform:translate3d(-100%,0,0)}to{transform:translate3d(-5%,0,0)}}@keyframes progressBar-slide-rtl{0%{transform:translate3d(100%,0,0)}to{transform:translate3d(5%,0,0)}}@keyframes progressBar-slide-complete-ltr{0%{transform:translate3d(-75%,0,0)}50%{transform:translateZ(0)}}@keyframes progressBar-slide-complete-rtl{0%{transform:translate3d(75%,0,0)}50%{transform:translateZ(0)}}.ngx-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998!important;background-color:#282828cc;cursor:progress;display:none}.ngx-overlay.loading-foreground,.ngx-overlay.foreground-closing{display:block}.ngx-overlay.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-overlay.fast-closing{transition:opacity .3s ease-out .3s!important}.ngx-overlay>.ngx-foreground-spinner{position:fixed;width:60px;height:60px;margin:0;color:#00acc1}.ngx-overlay>.ngx-loading-logo{position:fixed;margin:0;width:120px;height:120px}.ngx-overlay>.ngx-loading-text{position:fixed;margin:0;font-family:sans-serif;font-weight:400;font-size:1.2em;color:#fff}.ngx-background-spinner{position:fixed;z-index:99997!important;width:60px;height:60px;margin:0;color:#00acc1;opacity:.6;display:none}.ngx-background-spinner.loading-background,.ngx-background-spinner.background-closing{display:block}.ngx-background-spinner.background-closing{opacity:0!important;transition:opacity .7s ease-out}.ngx-background-spinner.fast-closing{transition:opacity .4s ease-out!important}.ngx-position-absolute{position:absolute!important}.ngx-position-absolute>.ngx-foreground-spinner,.ngx-position-absolute>.ngx-loading-logo,.ngx-position-absolute>.ngx-loading-text{position:absolute!important}.ngx-position-absolute.ngx-progress-bar{z-index:99996!important}.ngx-position-absolute.ngx-overlay{z-index:99995!important}.ngx-position-absolute.ngx-background-spinner{z-index:99994!important}.ngx-position-absolute .sk-square-jelly-box>div:nth-child(1){z-index:99994!important}.top-left{top:30px;left:30px}.top-center{top:30px;left:50%;transform:translate(-50%)}.top-right{top:30px;right:30px}.center-left{top:50%;left:30px;transform:translateY(-50%)}.center-center{top:50%;left:50%;transform:translate(-50%,-50%)}.center-right{top:50%;right:30px;transform:translateY(-50%)}.bottom-left{bottom:30px;left:30px}.bottom-center{bottom:30px;left:50%;transform:translate(-50%)}.bottom-right{bottom:30px;right:30px}.sk-ball-scale-multiple,.sk-ball-scale-multiple>div{position:relative;box-sizing:border-box}.sk-ball-scale-multiple{width:100%;height:100%;font-size:0}.sk-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-scale-multiple>div{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;opacity:0;animation:ball-scale-multiple 1s 0s linear infinite}.sk-ball-scale-multiple>div:nth-child(2){animation-delay:.2s}.sk-ball-scale-multiple>div:nth-child(3){animation-delay:.4s}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}to{opacity:0;transform:scale(1)}}.sk-ball-spin,.sk-ball-spin>div{position:relative;box-sizing:border-box}.sk-ball-spin{width:100%;height:100%;font-size:0}.sk-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-spin>div{position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;animation:ball-spin-clockwise 1s infinite ease-in-out}.sk-ball-spin>div:nth-child(1){top:5%;left:50%;animation-delay:-1.125s}.sk-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;animation-delay:-1.25s}.sk-ball-spin>div:nth-child(3){top:50%;left:95%;animation-delay:-1.375s}.sk-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;animation-delay:-1.5s}.sk-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;animation-delay:-1.625s}.sk-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;animation-delay:-1.75s}.sk-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;animation-delay:-1.875s}.sk-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;animation-delay:-2s}@keyframes ball-spin{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.sk-ball-spin-clockwise,.sk-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise{width:100%;height:100%;font-size:0}.sk-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-spin-clockwise>div{position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;animation:ball-spin-clockwise 1s infinite ease-in-out}.sk-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;animation-delay:-.875s}.sk-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;animation-delay:-.75s}.sk-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;animation-delay:-.625s}.sk-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;animation-delay:-.5s}.sk-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;animation-delay:-.375s}.sk-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;animation-delay:-.25s}.sk-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;animation-delay:-.125s}.sk-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;animation-delay:0s}@keyframes ball-spin-clockwise{0%,to{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.sk-ball-spin-clockwise-fade-rotating,.sk-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise-fade-rotating{font-size:0;width:100%;height:100%;animation:ball-spin-clockwise-fade-rotating-rotate 6s infinite linear}.sk-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-spin-clockwise-fade-rotating>div{position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;animation:ball-spin-clockwise-fade-rotating 1s infinite linear}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;animation-delay:-.875s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;animation-delay:-.75s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;animation-delay:-.625s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;animation-delay:-.5s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;animation-delay:-.375s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;animation-delay:-.25s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;animation-delay:-.125s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;animation-delay:0s}@keyframes ball-spin-clockwise-fade-rotating-rotate{to{transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.sk-ball-spin-fade-rotating,.sk-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-fade-rotating{width:100%;height:100%;font-size:0;animation:ball-spin-fade-rotate 6s infinite linear}.sk-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-ball-spin-fade-rotating>div{position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;animation:ball-spin-fade 1s infinite linear}.sk-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;animation-delay:-1.125s}.sk-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;animation-delay:-1.25s}.sk-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;animation-delay:-1.375s}.sk-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;animation-delay:-1.5s}.sk-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;animation-delay:-1.625s}.sk-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;animation-delay:-1.75s}.sk-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;animation-delay:-1.875s}.sk-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;animation-delay:-2s}@keyframes ball-spin-fade-rotate{to{transform:rotate(360deg)}}@keyframes ball-spin-fade{0%,to{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.sk-chasing-dots{margin:auto;width:100%;height:100%;position:absolute;text-align:center;animation:sk-chasingDots-rotate 2s infinite linear}.sk-chasing-dots>div{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:currentColor;border-radius:100%;animation:sk-chasingDots-bounce 2s infinite ease-in-out}.sk-chasing-dots>div:nth-child(2){top:auto;bottom:0;animation-delay:-1s}@keyframes sk-chasingDots-rotate{to{transform:rotate(360deg)}}@keyframes sk-chasingDots-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.sk-circle{margin:auto;width:100%;height:100%;position:relative}.sk-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;animation:sk-circle-bounceDelay 1.2s infinite ease-in-out both}.sk-circle>div:nth-child(2){transform:rotate(30deg)}.sk-circle>div:nth-child(3){transform:rotate(60deg)}.sk-circle>div:nth-child(4){transform:rotate(90deg)}.sk-circle>div:nth-child(5){transform:rotate(120deg)}.sk-circle>div:nth-child(6){transform:rotate(150deg)}.sk-circle>div:nth-child(7){transform:rotate(180deg)}.sk-circle>div:nth-child(8){transform:rotate(210deg)}.sk-circle>div:nth-child(9){transform:rotate(240deg)}.sk-circle>div:nth-child(10){transform:rotate(270deg)}.sk-circle>div:nth-child(11){transform:rotate(300deg)}.sk-circle>div:nth-child(12){transform:rotate(330deg)}.sk-circle>div:nth-child(2):before{animation-delay:-1.1s}.sk-circle>div:nth-child(3):before{animation-delay:-1s}.sk-circle>div:nth-child(4):before{animation-delay:-.9s}.sk-circle>div:nth-child(5):before{animation-delay:-.8s}.sk-circle>div:nth-child(6):before{animation-delay:-.7s}.sk-circle>div:nth-child(7):before{animation-delay:-.6s}.sk-circle>div:nth-child(8):before{animation-delay:-.5s}.sk-circle>div:nth-child(9):before{animation-delay:-.4s}.sk-circle>div:nth-child(10):before{animation-delay:-.3s}.sk-circle>div:nth-child(11):before{animation-delay:-.2s}.sk-circle>div:nth-child(12):before{animation-delay:-.1s}@keyframes sk-circle-bounceDelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.sk-cube-grid{width:100%;height:100%;margin:auto}.sk-cube-grid>div{width:33%;height:33%;background-color:currentColor;float:left;animation:sk-cubeGrid-scaleDelay 1.3s infinite ease-in-out}.sk-cube-grid>div:nth-child(1){animation-delay:.2s}.sk-cube-grid>div:nth-child(2){animation-delay:.3s}.sk-cube-grid>div:nth-child(3){animation-delay:.4s}.sk-cube-grid>div:nth-child(4){animation-delay:.1s}.sk-cube-grid>div:nth-child(5){animation-delay:.2s}.sk-cube-grid>div:nth-child(6){animation-delay:.3s}.sk-cube-grid>div:nth-child(7){animation-delay:0s}.sk-cube-grid>div:nth-child(8){animation-delay:.1s}.sk-cube-grid>div:nth-child(9){animation-delay:.2s}@keyframes sk-cubeGrid-scaleDelay{0%,70%,to{transform:scaleZ(1)}35%{transform:scale3D(0,0,1)}}.sk-double-bounce{width:100%;height:100%;position:relative;margin:auto}.sk-double-bounce>div{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;animation:sk-doubleBounce-bounce 2s infinite ease-in-out}.sk-double-bounce>div:nth-child(2){animation-delay:-1s}@keyframes sk-doubleBounce-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}.sk-fading-circle{margin:auto;width:100%;height:100%;position:relative}.sk-fading-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;animation:sk-fadingCircle-FadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle>div:nth-child(2){transform:rotate(30deg)}.sk-fading-circle>div:nth-child(3){transform:rotate(60deg)}.sk-fading-circle>div:nth-child(4){transform:rotate(90deg)}.sk-fading-circle>div:nth-child(5){transform:rotate(120deg)}.sk-fading-circle>div:nth-child(6){transform:rotate(150deg)}.sk-fading-circle>div:nth-child(7){transform:rotate(180deg)}.sk-fading-circle>div:nth-child(8){transform:rotate(210deg)}.sk-fading-circle>div:nth-child(9){transform:rotate(240deg)}.sk-fading-circle>div:nth-child(10){transform:rotate(270deg)}.sk-fading-circle>div:nth-child(11){transform:rotate(300deg)}.sk-fading-circle>div:nth-child(12){transform:rotate(330deg)}.sk-fading-circle>div:nth-child(2):before{animation-delay:-1.1s}.sk-fading-circle>div:nth-child(3):before{animation-delay:-1s}.sk-fading-circle>div:nth-child(4):before{animation-delay:-.9s}.sk-fading-circle>div:nth-child(5):before{animation-delay:-.8s}.sk-fading-circle>div:nth-child(6):before{animation-delay:-.7s}.sk-fading-circle>div:nth-child(7):before{animation-delay:-.6s}.sk-fading-circle>div:nth-child(8):before{animation-delay:-.5s}.sk-fading-circle>div:nth-child(9):before{animation-delay:-.4s}.sk-fading-circle>div:nth-child(10):before{animation-delay:-.3s}.sk-fading-circle>div:nth-child(11):before{animation-delay:-.2s}.sk-fading-circle>div:nth-child(12):before{animation-delay:-.1s}@keyframes sk-fadingCircle-FadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}.sk-folding-cube{margin:auto;width:100%;height:100%;position:relative;transform:rotate(45deg)}.sk-folding-cube>div{float:left;width:50%;height:50%;position:relative;transform:scale(1.1)}.sk-folding-cube>div:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;animation:sk-foldingCube-angle 2.4s infinite linear both;transform-origin:100% 100%}.sk-folding-cube>div:nth-child(2){transform:scale(1.1) rotate(90deg)}.sk-folding-cube>div:nth-child(3){transform:scale(1.1) rotate(270deg)}.sk-folding-cube>div:nth-child(4){transform:scale(1.1) rotate(180deg)}.sk-folding-cube>div:nth-child(2):before{animation-delay:.3s}.sk-folding-cube>div:nth-child(3):before{animation-delay:.9s}.sk-folding-cube>div:nth-child(4):before{animation-delay:.6s}@keyframes sk-foldingCube-angle{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}90%,to{transform:perspective(140px) rotateY(180deg);opacity:0}}.sk-pulse{width:100%;height:100%;margin:auto}.sk-pulse>div{width:100%;height:100%;background-color:currentColor;border-radius:100%;animation:sk-pulse-scaleOut 1s infinite ease-in-out}@keyframes sk-pulse-scaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}.sk-rectangle-bounce{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce>div{background-color:currentColor;height:100%;width:10%;margin:0 5%;display:inline-block;animation:sk-rectangleBounce-stretchDelay 1.2s infinite ease-in-out}.sk-rectangle-bounce>div:nth-child(2){animation-delay:-1.1s}.sk-rectangle-bounce>div:nth-child(3){animation-delay:-1s}.sk-rectangle-bounce>div:nth-child(4){animation-delay:-.9s}.sk-rectangle-bounce>div:nth-child(5){animation-delay:-.8s}@keyframes sk-rectangleBounce-stretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.sk-rectangle-bounce-party,.sk-rectangle-bounce-party>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-party{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-rectangle-bounce-party>div{width:10%;height:100%;margin:0 5%;border-radius:0;animation-name:rectangle-bounce-party;animation-iteration-count:infinite}.sk-rectangle-bounce-party>div:nth-child(1){animation-duration:.43s;animation-delay:-.23s}.sk-rectangle-bounce-party>div:nth-child(2){animation-duration:.62s;animation-delay:-.32s}.sk-rectangle-bounce-party>div:nth-child(3){animation-duration:.43s;animation-delay:-.44s}.sk-rectangle-bounce-party>div:nth-child(4){animation-duration:.8s;animation-delay:-.31s}.sk-rectangle-bounce-party>div:nth-child(5){animation-duration:.74s;animation-delay:-.24s}@keyframes rectangle-bounce-party{0%{transform:scaleY(1)}50%{transform:scaleY(.4)}to{transform:scaleY(1)}}.sk-rectangle-bounce-pulse-out,.sk-rectangle-bounce-pulse-out>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-rectangle-bounce-pulse-out>div{width:10%;height:100%;margin:0 5%;border-radius:0;animation:rectangle-bounce-pulse-out .9s infinite cubic-bezier(.85,.25,.37,.85)}.sk-rectangle-bounce-pulse-out>div:nth-child(3){animation-delay:-.9s}.sk-rectangle-bounce-pulse-out>div:nth-child(2),.sk-rectangle-bounce-pulse-out>div:nth-child(4){animation-delay:-.7s}.sk-rectangle-bounce-pulse-out>div:nth-child(1),.sk-rectangle-bounce-pulse-out>div:nth-child(5){animation-delay:-.5s}@keyframes rectangle-bounce-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.4)}to{transform:scaley(1)}}.sk-rectangle-bounce-pulse-out-rapid,.sk-rectangle-bounce-pulse-out-rapid>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out-rapid{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-rectangle-bounce-pulse-out-rapid>div{width:10%;height:100%;margin:0 5%;border-radius:0;animation:rectangle-bounce-pulse-out-rapid .9s infinite cubic-bezier(.11,.49,.38,.78)}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(3){animation-delay:-.9s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(2),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(4){animation-delay:-.65s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(1),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(5){animation-delay:-.4s}@keyframes rectangle-bounce-pulse-out-rapid{0%{transform:scaley(1)}80%{transform:scaley(.4)}90%{transform:scaley(1)}}.sk-rotating-plane{width:100%;height:100%;text-align:center;margin:auto}.sk-rotating-plane>div{width:100%;height:100%;background-color:currentColor;animation:sk-rotatePlane 1.2s infinite ease-in-out}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.sk-square-jelly-box,.sk-square-jelly-box>div{position:relative;box-sizing:border-box}.sk-square-jelly-box{width:100%;height:100%;font-size:0}.sk-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-jelly-box>div:nth-child(1),.sk-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.sk-square-jelly-box>div:nth-child(1){top:-25%;z-index:99997;height:100%;border-radius:10%;animation:square-jelly-box-animate .6s -.1s linear infinite}.sk-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;animation:square-jelly-box-shadow .6s -.1s linear infinite}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scaleY(.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}to{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-shadow{50%{transform:scaleX(1.25)}}.sk-square-loader,.sk-square-loader>div{position:relative;box-sizing:border-box}.sk-square-loader{font-size:0;width:100%;height:100%}.sk-square-loader>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-loader>div{width:100%;height:100%;background:transparent;border-width:3px;border-radius:0;animation:square-loader 2s infinite ease}.sk-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:"";background-color:currentColor;animation:square-loader-inner 2s infinite ease-in}@keyframes square-loader{0%{transform:rotate(0)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(360deg)}to{transform:rotate(360deg)}}@keyframes square-loader-inner{0%{height:0}25%{height:0}50%{height:100%}75%{height:100%}to{height:0}}.sk-three-bounce{margin:auto;width:100%;height:100%;text-align:center}.sk-three-bounce>div{margin-top:35%;width:30%;height:30%;background-color:currentColor;border-radius:100%;display:inline-block;animation:sk-threeBounce-bounceDelay 1.4s infinite ease-in-out both}.bottom-center>.sk-three-bounce>div,.bottom-left>.sk-three-bounce>div,.bottom-right>.sk-three-bounce>div{margin-top:70%!important}.top-center>.sk-three-bounce>div,.top-left>.sk-three-bounce>div,.top-right>.sk-three-bounce>div{margin-top:0!important}.sk-three-bounce>div:nth-child(1){animation-delay:-.32s}.sk-three-bounce>div:nth-child(2){animation-delay:-.16s}@keyframes sk-threeBounce-bounceDelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.sk-three-strings{width:100%;height:100%}.sk-three-strings>div{position:absolute;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.sk-three-strings>div:nth-child(1){left:0%;top:0%;animation:sk-threeStrings-rotateOne 1s linear infinite;border-bottom:3px solid currentColor}.sk-three-strings>div:nth-child(2){right:0%;top:0%;animation:sk-threeStrings-rotateTwo 1s linear infinite;border-right:3px solid currentColor}.sk-three-strings>div:nth-child(3){right:0%;bottom:0%;animation:sk-threeStrings-rotateThree 1s linear infinite;border-top:3px solid currentColor}@keyframes sk-threeStrings-rotateOne{0%{transform:rotateX(35deg) rotateY(-45deg) rotate(0)}to{transform:rotateX(35deg) rotateY(-45deg) rotate(360deg)}}@keyframes sk-threeStrings-rotateTwo{0%{transform:rotateX(50deg) rotateY(10deg) rotate(0)}to{transform:rotateX(50deg) rotateY(10deg) rotate(360deg)}}@keyframes sk-threeStrings-rotateThree{0%{transform:rotateX(35deg) rotateY(55deg) rotate(0)}to{transform:rotateX(35deg) rotateY(55deg) rotate(360deg)}}.sk-wandering-cubes{margin:auto;width:100%;height:100%;position:relative;text-align:center}.sk-wandering-cubes>div{background-color:currentColor;width:25%;height:25%;position:absolute;top:0;left:0;animation:sk-wanderingCubes-cubeMove 1.8s infinite ease-in-out}.sk-wandering-cubes>div:nth-child(2){animation-delay:-.9s}@keyframes sk-wanderingCubes-cubeMove{25%{transform:translate(290%) rotate(-90deg) scale(.5)}50%{transform:translate(290%) translateY(290%) rotate(-179deg)}50.1%{transform:translate(290%) translateY(290%) rotate(-180deg)}75%{transform:translate(0) translateY(290%) rotate(-270deg) scale(.5)}to{transform:rotate(-360deg)}}\n']
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgxUiLoaderService
  }], {
    bgsColor: [{
      type: Input
    }],
    bgsOpacity: [{
      type: Input
    }],
    bgsPosition: [{
      type: Input
    }],
    bgsSize: [{
      type: Input
    }],
    bgsTemplate: [{
      type: Input
    }],
    bgsType: [{
      type: Input
    }],
    fgsColor: [{
      type: Input
    }],
    fgsPosition: [{
      type: Input
    }],
    fgsSize: [{
      type: Input
    }],
    fgsTemplate: [{
      type: Input
    }],
    fgsType: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    loaderId: [{
      type: Input
    }],
    logoPosition: [{
      type: Input
    }],
    logoSize: [{
      type: Input
    }],
    logoUrl: [{
      type: Input
    }],
    overlayBorderRadius: [{
      type: Input
    }],
    overlayColor: [{
      type: Input
    }],
    pbColor: [{
      type: Input
    }],
    pbDirection: [{
      type: Input
    }],
    pbThickness: [{
      type: Input
    }],
    hasProgressBar: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    textPosition: [{
      type: Input
    }]
  });
})();
var _NgxUiLoaderBlurredDirective = class _NgxUiLoaderBlurredDirective {
  constructor(elementRef, renderer, loader) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.loader = loader;
    this.blur = this.loader.getDefaultConfig().blur;
    this.loaderId = this.loader.getDefaultConfig().masterLoaderId;
    this.fastFadeOut = this.loader.getDefaultConfig().fastFadeOut;
  }
  /**
   * On Init event
   */
  ngOnInit() {
    this.showForegroundWatcher = this.loader.showForeground$.pipe(filter((showEvent) => this.loaderId === showEvent.loaderId)).subscribe((data) => {
      if (data.isShow) {
        const filterValue = `blur(${this.blur}px)`;
        this.renderer.setStyle(this.elementRef.nativeElement, "-webkit-filter", filterValue);
        this.renderer.setStyle(this.elementRef.nativeElement, "filter", filterValue);
      } else {
        setTimeout(() => {
          if (!this.loader.hasRunningTask(FOREGROUND, data.loaderId)) {
            this.renderer.setStyle(this.elementRef.nativeElement, "-webkit-filter", "none");
            this.renderer.setStyle(this.elementRef.nativeElement, "filter", "none");
          }
        }, this.fastFadeOut ? FAST_OVERLAY_DISAPPEAR_TIME : OVERLAY_DISAPPEAR_TIME);
      }
    });
  }
  /**
   * On destroy event
   */
  ngOnDestroy() {
    if (this.showForegroundWatcher) {
      this.showForegroundWatcher.unsubscribe();
    }
  }
};
_NgxUiLoaderBlurredDirective.\u0275fac = function NgxUiLoaderBlurredDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxUiLoaderBlurredDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgxUiLoaderService));
};
_NgxUiLoaderBlurredDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgxUiLoaderBlurredDirective,
  selectors: [["", "ngxUiLoaderBlurred", ""]],
  inputs: {
    blur: "blur",
    loaderId: "loaderId"
  },
  standalone: false
});
var NgxUiLoaderBlurredDirective = _NgxUiLoaderBlurredDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxUiLoaderBlurredDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxUiLoaderBlurred]",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgxUiLoaderService
  }], {
    blur: [{
      type: Input
    }],
    loaderId: [{
      type: Input
    }]
  });
})();
var _NgxUiLoaderModule = class _NgxUiLoaderModule {
  /**
   * forRoot
   *
   * @returns A module with its provider dependencies
   */
  static forRoot(ngxUiLoaderConfig) {
    return {
      ngModule: _NgxUiLoaderModule,
      providers: [{
        provide: NGX_UI_LOADER_CONFIG_TOKEN,
        useValue: ngxUiLoaderConfig
      }]
    };
  }
};
_NgxUiLoaderModule.\u0275fac = function NgxUiLoaderModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxUiLoaderModule)();
};
_NgxUiLoaderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgxUiLoaderModule,
  declarations: [NgxUiLoaderComponent, NgxUiLoaderBlurredDirective],
  imports: [CommonModule],
  exports: [NgxUiLoaderComponent, NgxUiLoaderBlurredDirective]
});
_NgxUiLoaderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
var NgxUiLoaderModule = _NgxUiLoaderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxUiLoaderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [NgxUiLoaderComponent, NgxUiLoaderBlurredDirective],
      exports: [NgxUiLoaderComponent, NgxUiLoaderBlurredDirective]
    }]
  }], null, null);
})();
var NGX_UI_LOADER_ROUTER_CONFIG_TOKEN = new InjectionToken("ngxUiLoaderRouterCustom.config");
function getExcludeObj(config) {
  let strs;
  let regExps;
  if (config) {
    if (config.exclude) {
      strs = config.exclude.map((url) => url.toLowerCase());
    }
    if (config.excludeRegexp) {
      regExps = config.excludeRegexp.map((regexp) => new RegExp(regexp, "i"));
    }
  }
  return {
    strs,
    regExps
  };
}
function isIgnored(url, excludeStrings, excludeRegexps) {
  if (excludeStrings) {
    if (excludeStrings.findIndex((str) => url.toLowerCase().startsWith(str)) !== -1) {
      return true;
    }
  }
  if (excludeRegexps) {
    if (excludeRegexps.findIndex((regexp) => regexp.test(url)) !== -1) {
      return true;
    }
  }
  return false;
}
var _NgxUiLoaderRouterModule = class _NgxUiLoaderRouterModule {
  /**
   * Constructor
   */
  constructor(parentModule, customConfig, router, loader) {
    if (parentModule) {
      throw new Error("[ngx-ui-loader] - NgxUiLoaderRouterModule is already loaded. It should be imported in the root `AppModule` only!");
    }
    let config = {
      loaderId: loader.getDefaultConfig().masterLoaderId,
      showForeground: true
    };
    this.exclude = getExcludeObj(customConfig);
    if (customConfig) {
      config = __spreadValues(__spreadValues({}, config), customConfig);
    }
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!isIgnored(event.url, this.exclude.strs, this.exclude.regExps)) {
          if (config.showForeground) {
            loader.startLoader(config.loaderId, ROUTER_LOADER_TASK_ID);
          } else {
            loader.startBackgroundLoader(config.loaderId, ROUTER_LOADER_TASK_ID);
          }
        }
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        if (!isIgnored(event.url, this.exclude.strs, this.exclude.regExps)) {
          if (config.showForeground) {
            loader.stopLoader(config.loaderId, ROUTER_LOADER_TASK_ID);
          } else {
            loader.stopBackgroundLoader(config.loaderId, ROUTER_LOADER_TASK_ID);
          }
        }
      }
    });
  }
  /**
   * forRoot
   *
   * @returns A module with its provider dependencies
   */
  static forRoot(routerConfig) {
    return {
      ngModule: _NgxUiLoaderRouterModule,
      providers: [{
        provide: NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,
        useValue: routerConfig
      }]
    };
  }
};
_NgxUiLoaderRouterModule.\u0275fac = function NgxUiLoaderRouterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxUiLoaderRouterModule)(\u0275\u0275inject(_NgxUiLoaderRouterModule, 12), \u0275\u0275inject(NGX_UI_LOADER_ROUTER_CONFIG_TOKEN, 8), \u0275\u0275inject(Router), \u0275\u0275inject(NgxUiLoaderService));
};
_NgxUiLoaderRouterModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgxUiLoaderRouterModule
});
_NgxUiLoaderRouterModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NgxUiLoaderRouterModule = _NgxUiLoaderRouterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxUiLoaderRouterModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: NgxUiLoaderRouterModule,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_UI_LOADER_ROUTER_CONFIG_TOKEN]
    }]
  }, {
    type: Router
  }, {
    type: NgxUiLoaderService
  }], null);
})();
var NGX_UI_LOADER_HTTP_CONFIG_TOKEN = new InjectionToken("ngxUiLoaderHttpCustom.config");
var _NgxUiLoaderHttpInterceptor = class _NgxUiLoaderHttpInterceptor {
  /**
   * Constructor
   */
  constructor(customConfig, loader) {
    this.loader = loader;
    this.count = 0;
    this.config = {
      loaderId: this.loader.getDefaultConfig().masterLoaderId,
      showForeground: false
    };
    this.exclude = getExcludeObj(customConfig);
    if (customConfig) {
      this.config = __spreadValues(__spreadValues({}, this.config), customConfig);
    }
  }
  intercept(req, next) {
    if (isIgnored(req.url, this.exclude.strs, this.exclude.regExps)) {
      return next.handle(req);
    }
    this.count++;
    if (this.config.showForeground) {
      this.loader.startLoader(this.config.loaderId, HTTP_LOADER_TASK_ID, this.config);
    } else {
      this.loader.startBackgroundLoader(this.config.loaderId, HTTP_LOADER_TASK_ID, this.config);
    }
    return next.handle(req).pipe(finalize(() => {
      this.count--;
      if (this.count === 0) {
        if (this.config.showForeground) {
          this.loader.stopLoader(this.config.loaderId, HTTP_LOADER_TASK_ID);
        } else {
          this.loader.stopBackgroundLoader(this.config.loaderId, HTTP_LOADER_TASK_ID);
        }
      }
    }));
  }
};
_NgxUiLoaderHttpInterceptor.\u0275fac = function NgxUiLoaderHttpInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxUiLoaderHttpInterceptor)(\u0275\u0275inject(NGX_UI_LOADER_HTTP_CONFIG_TOKEN, 8), \u0275\u0275inject(NgxUiLoaderService));
};
_NgxUiLoaderHttpInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NgxUiLoaderHttpInterceptor,
  factory: _NgxUiLoaderHttpInterceptor.\u0275fac
});
var NgxUiLoaderHttpInterceptor = _NgxUiLoaderHttpInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxUiLoaderHttpInterceptor, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_UI_LOADER_HTTP_CONFIG_TOKEN]
    }]
  }, {
    type: NgxUiLoaderService
  }], null);
})();
var _NgxUiLoaderHttpModule = class _NgxUiLoaderHttpModule {
  /**
   * Constructor
   */
  constructor(parentModule) {
    if (parentModule) {
      throw new Error("[ngx-ui-loader] - NgxUiLoaderHttpModule is already loaded. It should be imported in the root `AppModule` only!");
    }
  }
  /**
   * forRoot
   *
   * @returns A module with its provider dependencies
   */
  static forRoot(httpConfig) {
    return {
      ngModule: _NgxUiLoaderHttpModule,
      providers: [{
        provide: NGX_UI_LOADER_HTTP_CONFIG_TOKEN,
        useValue: httpConfig
      }]
    };
  }
};
_NgxUiLoaderHttpModule.\u0275fac = function NgxUiLoaderHttpModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxUiLoaderHttpModule)(\u0275\u0275inject(_NgxUiLoaderHttpModule, 12));
};
_NgxUiLoaderHttpModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgxUiLoaderHttpModule
});
_NgxUiLoaderHttpModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NgxUiLoaderHttpInterceptor,
    multi: true
  }]
});
var NgxUiLoaderHttpModule = _NgxUiLoaderHttpModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxUiLoaderHttpModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: NgxUiLoaderHttpInterceptor,
        multi: true
      }]
    }]
  }], () => [{
    type: NgxUiLoaderHttpModule,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], null);
})();

// src/app/core/services/loading.service.ts
var LoadingService = class _LoadingService {
  loader;
  requestCount = 0;
  //iniciamos en 0 contador de peticiones
  constructor(loader) {
    this.loader = loader;
  }
  onRequestStart() {
    this.requestCount++;
    if (this.requestCount === 1) {
      this.loader.start();
    }
  }
  onRequestEnd() {
    this.requestCount--;
    if (this.requestCount === 0) {
      this.loader.stop();
    }
  }
  static \u0275fac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingService)(\u0275\u0275inject(NgxUiLoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadingService, factory: _LoadingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: NgxUiLoaderService }], null);
})();

// src/app/core/interceptors/loading.interceptor.ts
var loadingInterceptor = (req, next) => {
  const loaderTracker = inject(LoadingService);
  loaderTracker.onRequestStart();
  return next(req).pipe(finalize(() => {
    loaderTracker.onRequestEnd();
  }));
};

// src/app/core/interceptors/refresh.interceptor.ts
var AUTH_ENDPOINTS = ["/auth/login", "/auth/refresh", "/auth/logout"];
var refreshInterceptor = (req, next) => {
  if (req.context.get(SKIP_AUTH) || AUTH_ENDPOINTS.some((endpoint) => req.url.includes(endpoint))) {
    return next(req);
  }
  const auth = inject(AuthService);
  const router = inject(Router);
  const retryWithNewToken = (accessToken) => next(req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } }));
  const handleRefreshFailure = (error) => {
    auth.expireSession();
    const returnUrl = router.url.startsWith("/auth/") ? "/pages/users" : router.url;
    router.navigate(["/auth/login"], { queryParams: { returnUrl } });
    return throwError(() => error);
  };
  if (auth.shouldRefresh()) {
    return auth.refresh().pipe(switchMap((tokens) => retryWithNewToken(tokens.accessToken)), catchError(handleRefreshFailure));
  }
  return next(req).pipe(catchError((error) => {
    if (error.status !== 401) {
      return throwError(() => error);
    }
    return auth.refresh().pipe(switchMap((tokens) => retryWithNewToken(tokens.accessToken)), catchError(handleRefreshFailure));
  }));
};

// src/app/core/interceptors/token.interceptor.ts
var tokenInterceptor = (req, next) => {
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

// src/app.config.ts
var appConfig = {
  providers: [
    provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }), withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptors([loadingInterceptor, tokenInterceptor, refreshInterceptor, errorInterceptor]), withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: Qr, options: { darkModeSelector: ".app-dark" } } }),
    MessageService,
    ConfirmationService
  ]
};

// src/app/shared/loading/loading.ts
var Loading = class _Loading {
  static \u0275fac = function Loading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Loading)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Loading, selectors: [["app-loading"]], decls: 1, vars: 0, consts: [["bgsColor", "#ffcc48", "fgsColor", "#004F4F", "pbColor", "#b12bf7", "fgsType", "square-jelly-box", "text", "Loading...", "textColor", "white"]], template: function Loading_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ngx-ui-loader", 0);
    }
  }, dependencies: [NgxUiLoaderModule, NgxUiLoaderComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Loading, [{
    type: Component,
    args: [{
      selector: "app-loading",
      imports: [NgxUiLoaderModule],
      template: ` <ngx-ui-loader bgsColor="#ffcc48" fgsColor="#004F4F" pbColor="#b12bf7" fgsType="square-jelly-box" text="Loading..." textColor="white"> </ngx-ui-loader> `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Loading, { className: "Loading", filePath: "src/app/shared/loading/loading.ts", lineNumber: 9 });
})();

// src/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "p-toast")(2, "p-confirmDialog")(3, "app-loading");
    }
  }, dependencies: [RouterModule, RouterOutlet, Loading, ToastModule, Toast, ConfirmDialogModule, ConfirmDialog], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterModule, Loading, ToastModule, ConfirmDialogModule],
      template: ` <router-outlet></router-outlet>
        <p-toast></p-toast>
        <p-confirmDialog></p-confirmDialog>
        <app-loading></app-loading>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.1.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
