import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-I57DOXJD.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/empty/empty.ts
var Empty = class _Empty {
  static \u0275fac = function Empty_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Empty)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Empty, selectors: [["app-empty"]], decls: 5, vars: 0, consts: [[1, "card"], [1, "font-semibold", "text-xl", "mb-4"]], template: function Empty_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Empty Page");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Use this page to start from scratch and place your custom content.");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Empty, [{
    type: Component,
    args: [{
      selector: "app-empty",
      standalone: true,
      template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Empty Page</div>
        <p>Use this page to start from scratch and place your custom content.</p>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Empty, { className: "Empty", filePath: "src/app/pages/empty/empty.ts", lineNumber: 11 });
})();
export {
  Empty
};
//# sourceMappingURL=chunk-EAMEFS6C.js.map
