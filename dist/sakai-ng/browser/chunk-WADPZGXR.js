import {
  AppFloatingConfigurator
} from "./chunk-TBU7MZSA.js";
import "./chunk-RNL6MB5H.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-5RZFN4DP.js";
import "./chunk-2WWKO7OF.js";
import {
  Button,
  ButtonModule,
  RippleModule
} from "./chunk-2IMBOICD.js";
import "./chunk-2J5W32J3.js";
import "./chunk-MA4JJ4RV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-I57DOXJD.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/auth/access.ts
var Access = class _Access {
  static \u0275fac = function Access_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Access)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Access, selectors: [["app-access"]], decls: 15, vars: 0, consts: [[1, "bg-surface-50", "dark:bg-surface-950", "flex", "items-center", "justify-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)"], [1, "w-full", "bg-surface-0", "dark:bg-surface-900", "py-20", "px-8", "sm:px-20", "flex", "flex-col", "items-center", 2, "border-radius", "53px"], [1, "gap-4", "flex", "flex-col", "items-center"], [1, "flex", "justify-center", "items-center", "border-2", "border-orange-500", "rounded-full", 2, "width", "3.2rem", "height", "3.2rem"], [1, "text-orange-500", "pi", "pi-fw", "pi-lock", "text-2xl!"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-4xl", "lg:text-5xl", "mb-2"], [1, "text-muted-color", "mb-8"], ["src", "https://primefaces.org/cdn/templates/sakai/auth/asset-access.svg", "alt", "Acceso denegado", "width", "80%", 1, "mb-8"], [1, "col-span-12", "mt-8", "text-center"], ["label", "Volver al inicio de sesi\xF3n", "routerLink", "/auth/login", "severity", "warn"]], template: function Access_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 7);
      \u0275\u0275text(9, "Acceso denegado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11, "No tienes los permisos necesarios para acceder a esta secci\xF3n.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "img", 9);
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275element(14, "p-button", 11);
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [ButtonModule, Button, RouterModule, RouterLink, RippleModule, AppFloatingConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Access, [{
    type: Component,
    args: [{
      selector: "app-access",
      standalone: true,
      imports: [ButtonModule, RouterModule, RippleModule, AppFloatingConfigurator],
      template: ` <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center" style="border-radius: 53px">
                        <div class="gap-4 flex flex-col items-center">
                            <div class="flex justify-center items-center border-2 border-orange-500 rounded-full" style="width: 3.2rem; height: 3.2rem">
                                <i class="text-orange-500 pi pi-fw pi-lock text-2xl!"></i>
                            </div>
                            <h1 class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl mb-2">Acceso denegado</h1>
                            <span class="text-muted-color mb-8">No tienes los permisos necesarios para acceder a esta secci\xF3n.</span>
                            <img src="https://primefaces.org/cdn/templates/sakai/auth/asset-access.svg" alt="Acceso denegado" class="mb-8" width="80%" />
                            <div class="col-span-12 mt-8 text-center">
                                <p-button label="Volver al inicio de sesi\xF3n" routerLink="/auth/login" severity="warn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Access, { className: "Access", filePath: "src/app/pages/auth/access.ts", lineNumber: 32 });
})();
export {
  Access
};
//# sourceMappingURL=chunk-WADPZGXR.js.map
