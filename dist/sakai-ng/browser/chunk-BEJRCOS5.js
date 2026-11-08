import {
  Password,
  PasswordModule,
  getControlError,
  takeUntilDestroyed
} from "./chunk-BRTC2ZLB.js";
import {
  USER_PERMISSIONS
} from "./chunk-ONTYLXLW.js";
import {
  AuthService,
  NotificationService
} from "./chunk-PCM2WHU7.js";
import "./chunk-KIAEJV5R.js";
import {
  Tag,
  TagModule
} from "./chunk-37AQNBJZ.js";
import {
  Dialog,
  DialogModule
} from "./chunk-SEWUGS4X.js";
import {
  API_URL
} from "./chunk-INDSNBJL.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  Table,
  TableModule,
  Tooltip,
  TooltipModule
} from "./chunk-XMHTXQJQ.js";
import "./chunk-2WWKO7OF.js";
import {
  InputText,
  InputTextModule
} from "./chunk-PERVHQN2.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-2IMBOICD.js";
import {
  ConfirmationService,
  HttpClient,
  HttpErrorResponse
} from "./chunk-2J5W32J3.js";
import "./chunk-7WUWB5XB.js";
import "./chunk-MA4JJ4RV.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injectable,
  Observable,
  computed,
  filter,
  finalize,
  inject,
  input,
  map,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I57DOXJD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/services/confirm.service.ts
var ConfirmService = class _ConfirmService {
  confirmation = inject(ConfirmationService);
  confirm(options) {
    return new Observable((subscriber) => {
      const answer = (value) => {
        subscriber.next(value);
        subscriber.complete();
      };
      this.confirmation.confirm(__spreadProps(__spreadValues({
        header: "Confirmar",
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "S\xED",
        rejectLabel: "Cancelar",
        acceptButtonStyleClass: "p-button-danger p-button-sm",
        rejectButtonStyleClass: "p-button-secondary p-button-outlined p-button-sm"
      }, options), {
        accept: () => answer(true),
        reject: () => answer(false)
      }));
    });
  }
  static \u0275fac = function ConfirmService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmService, factory: _ConfirmService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/base-api.service.ts
var BaseApiService = class {
  http = inject(HttpClient);
  apiUrl = inject(API_URL);
  getAll() {
    return this.unwrap(this.http.get(this.url()));
  }
  getById(id) {
    return this.unwrap(this.http.get(this.url(id)));
  }
  create(dto) {
    return this.unwrap(this.http.post(this.url(), dto));
  }
  update(id, dto) {
    return this.unwrap(this.http.put(this.url(id), dto));
  }
  delete(id) {
    return this.http.delete(this.url(id));
  }
  url(...segments) {
    return [this.apiUrl, this.resource, ...segments].join("/");
  }
  unwrap(source$) {
    return source$.pipe(map((response) => {
      if (response.data === null) {
        throw new Error(response.message || "La API no devolvi\xF3 datos.");
      }
      return response.data;
    }));
  }
};

// src/app/core/services/user.service.ts
var UserService = class _UserService extends BaseApiService {
  resource = "users";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UserService_BaseFactory;
    return function UserService_Factory(__ngFactoryType__) {
      return (\u0275UserService_BaseFactory || (\u0275UserService_BaseFactory = \u0275\u0275getInheritedFactory(_UserService)))(__ngFactoryType__ || _UserService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/page-header/page-header.ts
function PageHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle());
  }
}
var PageHeader = class _PageHeader {
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : []);
  icon = input("pi pi-file", ...ngDevMode ? [{ debugName: "icon" }] : []);
  static \u0275fac = function PageHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeader, selectors: [["app-page-header"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"], icon: [1, "icon"] }, decls: 7, vars: 4, consts: [[1, "flex", "items-center", "gap-2", "min-w-0"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "rounded-xl", "bg-gradient-to-br", "from-primary-100", "via-primary-200/60", "to-primary-300/40", "dark:from-primary-900/50", "dark:via-primary-800/70", "dark:to-primary-700/50", "border", "border-primary-200/60", "dark:border-primary-600/40", "shadow-lg"], [1, "min-w-0"], [1, "text-gray-800", "dark:text-white", "text-xl", "sm:text-2xl", "font-bold", "leading-snug", "tracking-tight"], [1, "text-gray-500", "dark:text-gray-400", "text-xs", "sm:text-sm", "leading-snug"]], template: function PageHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "i");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2)(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, PageHeader_Conditional_6_Template, 2, 1, "p", 4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.icon() + " text-primary-600 dark:text-primary-300 text-xl");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subtitle() ? 6 : -1);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeader, [{
    type: Component,
    args: [{ selector: "app-page-header", changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex items-center gap-2 min-w-0">
    <div
        class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 via-primary-200/60 to-primary-300/40 dark:from-primary-900/50 dark:via-primary-800/70 dark:to-primary-700/50 border border-primary-200/60 dark:border-primary-600/40 shadow-lg"
    >
        <i [class]="icon() + ' text-primary-600 dark:text-primary-300 text-xl'"></i>
    </div>
    <div class="min-w-0">
        <p class="text-gray-800 dark:text-white text-xl sm:text-2xl font-bold leading-snug tracking-tight">{{ title() }}</p>
        @if (subtitle()) {
        <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-snug">{{ subtitle() }}</p>
        }
    </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeader, { className: "PageHeader", filePath: "src/app/shared/components/page-header/page-header.ts", lineNumber: 9 });
})();

// src/app/shared/components/table-skeleton/table-skeleton.ts
function TableSkeleton_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 3);
  }
}
function TableSkeleton_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, TableSkeleton_For_2_For_2_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-template-columns", ctx_r0.gridColumns());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.columnItems());
  }
}
var TableSkeleton = class _TableSkeleton {
  rows = input(6, ...ngDevMode ? [{ debugName: "rows" }] : []);
  columns = input(5, ...ngDevMode ? [{ debugName: "columns" }] : []);
  rowItems = computed(() => Array.from({ length: this.rows() }, (_, index) => index), ...ngDevMode ? [{ debugName: "rowItems" }] : []);
  columnItems = computed(() => Array.from({ length: this.columns() }, (_, index) => index), ...ngDevMode ? [{ debugName: "columnItems" }] : []);
  gridColumns = computed(() => `repeat(${this.columns()}, minmax(0, 1fr))`, ...ngDevMode ? [{ debugName: "gridColumns" }] : []);
  static \u0275fac = function TableSkeleton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableSkeleton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableSkeleton, selectors: [["app-table-skeleton"]], inputs: { rows: [1, "rows"], columns: [1, "columns"] }, decls: 3, vars: 0, consts: [[1, "p-4", "space-y-3"], [1, "grid", "gap-2", "p-3", "border-b", "border-surface-100", "dark:border-surface-800", 3, "grid-template-columns"], [1, "grid", "gap-2", "p-3", "border-b", "border-surface-100", "dark:border-surface-800"], [1, "h-4", "bg-surface-100", "dark:bg-surface-800", "rounded", "animate-pulse"]], template: function TableSkeleton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, TableSkeleton_For_2_Template, 3, 2, "div", 1, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.rowItems());
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableSkeleton, [{
    type: Component,
    args: [{ selector: "app-table-skeleton", changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="p-4 space-y-3">\n    @for (row of rowItems(); track row) {\n    <div class="grid gap-2 p-3 border-b border-surface-100 dark:border-surface-800" [style.grid-template-columns]="gridColumns()">\n        @for (column of columnItems(); track column) {\n        <div class="h-4 bg-surface-100 dark:bg-surface-800 rounded animate-pulse"></div>\n        }\n    </div>\n    }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableSkeleton, { className: "TableSkeleton", filePath: "src/app/shared/components/table-skeleton/table-skeleton.ts", lineNumber: 9 });
})();

// src/app/pages/user/user-list/user-list.ts
var _c0 = () => ({ width: "30rem" });
var _c1 = () => ["name", "lastname", "dni", "email"];
function UserList_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("rows", 6)("columns", 5);
  }
}
function UserList_Conditional_6_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 38);
    \u0275\u0275listener("onClick", function UserList_Conditional_6_ng_template_2_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function UserList_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275conditionalCreate(2, UserList_Conditional_6_ng_template_2_Conditional_2_Template, 1, 0, "p-button", 33);
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-iconfield", 35);
    \u0275\u0275element(6, "p-inputicon", 36);
    \u0275\u0275elementStart(7, "input", 37);
    \u0275\u0275listener("input", function UserList_Conditional_6_ng_template_2_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const dt_r4 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyGlobalFilter(dt_r4, $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canCreate() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.total(), " usuario(s)");
  }
}
function UserList_Conditional_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "USUARIO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "EMAIL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "ESTADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 39);
    \u0275\u0275text(10, "ACCIONES");
    \u0275\u0275elementEnd()();
  }
}
function UserList_Conditional_6_ng_template_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 41);
  }
}
function UserList_Conditional_6_ng_template_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 42);
  }
}
function UserList_Conditional_6_ng_template_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 46);
    \u0275\u0275listener("onClick", function UserList_Conditional_6_ng_template_6_Conditional_12_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(user_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function UserList_Conditional_6_ng_template_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 47);
    \u0275\u0275listener("onClick", function UserList_Conditional_6_ng_template_6_Conditional_13_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(user_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function UserList_Conditional_6_ng_template_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserList_Conditional_6_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, UserList_Conditional_6_ng_template_6_Conditional_9_Template, 1, 0, "p-tag", 41)(10, UserList_Conditional_6_ng_template_6_Conditional_10_Template, 1, 0, "p-tag", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 39);
    \u0275\u0275conditionalCreate(12, UserList_Conditional_6_ng_template_6_Conditional_12_Template, 1, 1, "p-button", 43);
    \u0275\u0275conditionalCreate(13, UserList_Conditional_6_ng_template_6_Conditional_13_Template, 1, 1, "p-button", 44);
    \u0275\u0275conditionalCreate(14, UserList_Conditional_6_ng_template_6_Conditional_14_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r6.name, " ", user_r6.lastname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.dni);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r6.status ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.canUpdate() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canDelete() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.canUpdate() && !ctx_r2.canDelete() ? 14 : -1);
  }
}
function UserList_Conditional_6_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, "No hay usuarios registrados");
    \u0275\u0275elementEnd()();
  }
}
function UserList_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 11, 0);
    \u0275\u0275template(2, UserList_Conditional_6_ng_template_2_Template, 8, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, UserList_Conditional_6_ng_template_4_Template, 11, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, UserList_Conditional_6_ng_template_6_Template, 15, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(8, UserList_Conditional_6_ng_template_8_Template, 3, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.users())("rows", 10)("paginator", true)("rowHover", true)("globalFilterFields", \u0275\u0275pureFunction0(5, _c1));
  }
}
function UserList_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fieldError(ctx_r2.form.controls.name));
  }
}
function UserList_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fieldError(ctx_r2.form.controls.lastname));
  }
}
function UserList_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fieldError(ctx_r2.form.controls.dni));
  }
}
function UserList_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fieldError(ctx_r2.form.controls.email));
  }
}
function UserList_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "(opcional)");
    \u0275\u0275elementEnd();
  }
}
function UserList_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fieldError(ctx_r2.form.controls.password));
  }
}
var UserList = class _UserList {
  userService = inject(UserService);
  auth = inject(AuthService);
  notify = inject(NotificationService);
  confirm = inject(ConfirmService);
  fb = inject(NonNullableFormBuilder);
  destroyRef = inject(DestroyRef);
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  dialogOpen = signal(false, ...ngDevMode ? [{ debugName: "dialogOpen" }] : []);
  editingUser = signal(null, ...ngDevMode ? [{ debugName: "editingUser" }] : []);
  total = computed(() => this.users().length, ...ngDevMode ? [{ debugName: "total" }] : []);
  isEditMode = computed(() => this.editingUser() !== null, ...ngDevMode ? [{ debugName: "isEditMode" }] : []);
  canCreate = computed(() => this.auth.hasPermission(USER_PERMISSIONS.CREATE), ...ngDevMode ? [{ debugName: "canCreate" }] : []);
  canUpdate = computed(() => this.auth.hasPermission(USER_PERMISSIONS.UPDATE), ...ngDevMode ? [{ debugName: "canUpdate" }] : []);
  canDelete = computed(() => this.auth.hasPermission(USER_PERMISSIONS.DELETE), ...ngDevMode ? [{ debugName: "canDelete" }] : []);
  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    lastname: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    dni: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    email: ["", [Validators.required, Validators.email, Validators.maxLength(255)]],
    password: ["", [Validators.minLength(8), Validators.maxLength(100)]]
  });
  fieldError = getControlError;
  ngOnInit() {
    this.load();
  }
  openNew() {
    this.editingUser.set(null);
    this.form.reset();
    this.setPasswordRequired(true);
    this.dialogOpen.set(true);
  }
  openEdit(user) {
    this.editingUser.set(user);
    this.form.reset({
      name: user.name,
      lastname: user.lastname,
      dni: user.dni,
      email: user.email,
      password: ""
    });
    this.setPasswordRequired(false);
    this.dialogOpen.set(true);
  }
  closeDialog() {
    this.dialogOpen.set(false);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.notify.warn("Completa correctamente todos los campos requeridos");
      return;
    }
    const raw = this.form.getRawValue();
    const editing = this.editingUser();
    const base = {
      name: raw.name,
      lastname: raw.lastname,
      dni: raw.dni,
      email: raw.email
    };
    const request$ = editing ? this.userService.update(editing.id, this.buildUpdateDto(base, raw.password)) : this.userService.create(__spreadProps(__spreadValues({}, base), { password: raw.password }));
    this.saving.set(true);
    request$.pipe(finalize(() => this.saving.set(false)), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.notify.success(editing ? "Usuario actualizado correctamente" : "Usuario creado correctamente");
        this.closeDialog();
        this.load();
      },
      error: (error) => this.applyServerErrors(error)
    });
  }
  remove(user) {
    this.confirm.confirm({
      header: "Confirmar eliminaci\xF3n",
      message: `\xBFEliminar permanentemente al usuario <strong>${this.escapeHtml(user.email)}</strong>?`,
      acceptLabel: "S\xED, eliminar"
    }).pipe(filter(Boolean), switchMap(() => this.userService.delete(user.id)), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.notify.success("Usuario eliminado correctamente");
        this.load();
      },
      error: (error) => this.notifyUnexpectedError(error, "No se pudo eliminar el usuario")
    });
  }
  applyGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  load() {
    this.loading.set(true);
    this.userService.getAll().pipe(finalize(() => this.loading.set(false)), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (users) => this.users.set(users),
      error: (error) => this.notifyUnexpectedError(error, "No se pudieron cargar los usuarios")
    });
  }
  setPasswordRequired(required) {
    const validators = [Validators.minLength(8), Validators.maxLength(100)];
    this.form.controls.password.setValidators(required ? [Validators.required, ...validators] : validators);
    this.form.controls.password.updateValueAndValidity();
  }
  buildUpdateDto(base, password) {
    return password ? __spreadProps(__spreadValues({}, base), { password }) : base;
  }
  applyServerErrors(error) {
    if (!(error instanceof HttpErrorResponse)) {
      this.notifyUnexpectedError(error, "No se pudo guardar el usuario");
      return;
    }
    const errors = error.error?.errors;
    if (!errors) {
      if (error.status === 409) {
        const message = error.error?.message ?? "El correo o DNI ya se encuentra registrado.";
        for (const controlName of ["email", "dni"]) {
          const control = this.form.get(controlName);
          control?.setErrors({ server: message });
          control?.markAsTouched();
        }
      }
      return;
    }
    for (const [field, message] of Object.entries(errors)) {
      const controlName = field === "lastName" ? "lastname" : field;
      const control = this.form.get(controlName);
      control?.setErrors({ server: message });
      control?.markAsTouched();
    }
  }
  notifyUnexpectedError(error, fallback) {
    if (!(error instanceof HttpErrorResponse)) {
      this.notify.error(error instanceof Error ? error.message : fallback);
    }
  }
  escapeHtml(value) {
    return value.replace(/[&<>"']/g, (character) => {
      switch (character) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        default:
          return "&#39;";
      }
    });
  }
  static \u0275fac = function UserList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserList, selectors: [["app-user-list"]], decls: 39, vars: 19, consts: [["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], [1, "card"], [1, "flex", "flex-col", "gap-8", "w-full"], ["title", "Gesti\xF3n de Usuarios", "subtitle", "Administraci\xF3n de usuarios del sistema", "icon", "pi pi-users"], [1, "bg-surface-50/50", "dark:bg-surface-900/50", "backdrop-blur-sm", "rounded-xl", "border", "border-surface-200/50", "dark:border-surface-700/50", "p-6"], [1, "bg-surface-0", "dark:bg-surface-900", "rounded-lg", "shadow-sm", "border", "border-surface-200", "dark:border-surface-700"], [3, "rows", "columns"], ["dataKey", "id", "styleClass", "p-datatable-sm", 3, "value", "rows", "paginator", "rowHover", "globalFilterFields"], [3, "visibleChange", "header", "visible", "modal"], [1, "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "flex", "flex-col", "gap-1"], ["for", "name", 1, "font-medium"], ["pInputText", "", "id", "name", "formControlName", "name", 1, "w-full"], [1, "text-red-500"], ["for", "lastname", 1, "font-medium"], ["pInputText", "", "id", "lastname", "formControlName", "lastname", 1, "w-full"], ["for", "dni", 1, "font-medium"], ["pInputText", "", "id", "dni", "formControlName", "dni", 1, "w-full"], ["for", "email", 1, "font-medium"], ["pInputText", "", "id", "email", "type", "email", "formControlName", "email", 1, "w-full"], ["for", "password", 1, "font-medium"], [1, "text-muted-color", "font-normal"], ["inputId", "password", "formControlName", "password", 3, "toggleMask", "feedback", "fluid"], [1, "flex", "justify-end", "gap-2", "pt-2"], ["label", "Cancelar", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Guardar", "type", "submit", 3, "loading"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "justify-between", "sm:items-center", "p-4"], [1, "flex", "items-center", "gap-2"], ["label", "Nuevo usuario", "icon", "pi pi-plus", "severity", "success", "size", "small"], [1, "text-sm", "text-muted-color"], ["iconPosition", "left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar...", 3, "input"], ["label", "Nuevo usuario", "icon", "pi pi-plus", "severity", "success", "size", "small", 3, "onClick"], [1, "text-center"], [1, "font-medium"], ["value", "Activo", "severity", "success"], ["value", "Inactivo", "severity", "danger"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Editar", "tooltipPosition", "top", 3, "text"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Eliminar", "tooltipPosition", "top", 3, "text"], [1, "text-muted-color"], ["icon", "pi pi-pencil", "size", "small", "pTooltip", "Editar", "tooltipPosition", "top", 3, "onClick", "text"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Eliminar", "tooltipPosition", "top", 3, "onClick", "text"], ["colspan", "5", 1, "text-center", "p-4"]], template: function UserList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
      \u0275\u0275element(2, "app-page-header", 7);
      \u0275\u0275elementStart(3, "div", 8)(4, "div", 9);
      \u0275\u0275conditionalCreate(5, UserList_Conditional_5_Template, 1, 2, "app-table-skeleton", 10)(6, UserList_Conditional_6_Template, 10, 6, "p-table", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "p-dialog", 12);
      \u0275\u0275twoWayListener("visibleChange", function UserList_Template_p_dialog_visibleChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dialogOpen, $event) || (ctx.dialogOpen = $event);
        return $event;
      });
      \u0275\u0275elementStart(8, "form", 13);
      \u0275\u0275listener("ngSubmit", function UserList_Template_form_ngSubmit_8_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(9, "div", 14)(10, "div", 15)(11, "label", 16);
      \u0275\u0275text(12, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 17);
      \u0275\u0275conditionalCreate(14, UserList_Conditional_14_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 15)(16, "label", 19);
      \u0275\u0275text(17, "Apellido");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 20);
      \u0275\u0275conditionalCreate(19, UserList_Conditional_19_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 15)(21, "label", 21);
      \u0275\u0275text(22, "DNI");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 22);
      \u0275\u0275conditionalCreate(24, UserList_Conditional_24_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15)(26, "label", 23);
      \u0275\u0275text(27, "Correo electr\xF3nico");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 24);
      \u0275\u0275conditionalCreate(29, UserList_Conditional_29_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 15)(31, "label", 25);
      \u0275\u0275text(32, " Contrase\xF1a ");
      \u0275\u0275conditionalCreate(33, UserList_Conditional_33_Template, 2, 0, "span", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "p-password", 27);
      \u0275\u0275conditionalCreate(35, UserList_Conditional_35_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 28)(37, "p-button", 29);
      \u0275\u0275listener("onClick", function UserList_Template_p_button_onClick_37_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "p-button", 30);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 5 : 6);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c0));
      \u0275\u0275property("header", ctx.isEditMode() ? "Editar usuario" : "Nuevo usuario");
      \u0275\u0275twoWayProperty("visible", ctx.dialogOpen);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.form.controls.name.touched && ctx.form.controls.name.invalid ? 14 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.lastname.touched && ctx.form.controls.lastname.invalid ? 19 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.dni.touched && ctx.form.controls.dni.invalid ? 24 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 29 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isEditMode() ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("toggleMask", true)("feedback", false)("fluid", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.touched && ctx.form.controls.password.invalid ? 35 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.saving());
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TableModule, Table, ButtonModule, Button, DialogModule, Dialog, InputTextModule, InputText, PasswordModule, Password, IconFieldModule, IconField, InputIconModule, InputIcon, TagModule, Tag, TooltipModule, Tooltip, PageHeader, TableSkeleton], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserList, [{
    type: Component,
    args: [{ selector: "app-user-list", imports: [ReactiveFormsModule, TableModule, ButtonModule, DialogModule, InputTextModule, PasswordModule, IconFieldModule, InputIconModule, TagModule, TooltipModule, PageHeader, TableSkeleton], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="card">
    <div class="flex flex-col gap-8 w-full">
        <app-page-header title="Gesti\xF3n de Usuarios" subtitle="Administraci\xF3n de usuarios del sistema" icon="pi pi-users" />

        <div class="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm rounded-xl border border-surface-200/50 dark:border-surface-700/50 p-6">
            <div class="bg-surface-0 dark:bg-surface-900 rounded-lg shadow-sm border border-surface-200 dark:border-surface-700">
                @if (loading()) {
                <app-table-skeleton [rows]="6" [columns]="5" />
                } @else {
                <p-table #dt [value]="users()" dataKey="id" [rows]="10" [paginator]="true" [rowHover]="true" [globalFilterFields]="['name', 'lastname', 'dni', 'email']" styleClass="p-datatable-sm">
                    <ng-template #caption>
                        <div class="flex flex-col sm:flex-row gap-3 justify-between sm:items-center p-4">
                            <div class="flex items-center gap-2">
                                @if (canCreate()) {
                                <p-button label="Nuevo usuario" icon="pi pi-plus" severity="success" size="small" (onClick)="openNew()" />
                                }
                                <span class="text-sm text-muted-color">{{ total() }} usuario(s)</span>
                            </div>
                            <p-iconfield iconPosition="left">
                                <p-inputicon class="pi pi-search" />
                                <input pInputText type="text" placeholder="Buscar..." (input)="applyGlobalFilter(dt, $event)" />
                            </p-iconfield>
                        </div>
                    </ng-template>

                    <ng-template #header>
                        <tr>
                            <th>USUARIO</th>
                            <th>DNI</th>
                            <th>EMAIL</th>
                            <th>ESTADO</th>
                            <th class="text-center">ACCIONES</th>
                        </tr>
                    </ng-template>

                    <ng-template #body let-user>
                        <tr>
                            <td>
                                <div class="font-medium">{{ user.name }} {{ user.lastname }}</div>
                            </td>
                            <td>{{ user.dni }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                @if (user.status) {
                                <p-tag value="Activo" severity="success" />
                                } @else {
                                <p-tag value="Inactivo" severity="danger" />
                                }
                            </td>
                            <td class="text-center">
                                @if (canUpdate()) {
                                <p-button icon="pi pi-pencil" [text]="true" size="small" pTooltip="Editar" tooltipPosition="top" (onClick)="openEdit(user)" />
                                } @if (canDelete()) {
                                <p-button icon="pi pi-trash" [text]="true" severity="danger" size="small" pTooltip="Eliminar" tooltipPosition="top" (onClick)="remove(user)" />
                                } @if (!canUpdate() && !canDelete()) {
                                <span class="text-muted-color">\u2014</span>
                                }
                            </td>
                        </tr>
                    </ng-template>

                    <ng-template #emptymessage>
                        <tr>
                            <td colspan="5" class="text-center p-4">No hay usuarios registrados</td>
                        </tr>
                    </ng-template>
                </p-table>
                }
            </div>
        </div>
    </div>
</div>

<p-dialog [header]="isEditMode() ? 'Editar usuario' : 'Nuevo usuario'" [(visible)]="dialogOpen" [modal]="true" [style]="{ width: '30rem' }">
    <form [formGroup]="form" (ngSubmit)="save()" class="flex flex-col gap-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
                <label for="name" class="font-medium">Nombre</label>
                <input pInputText id="name" formControlName="name" class="w-full" />
                @if (form.controls.name.touched && form.controls.name.invalid) {
                <small class="text-red-500">{{ fieldError(form.controls.name) }}</small>
                }
            </div>

            <div class="flex flex-col gap-1">
                <label for="lastname" class="font-medium">Apellido</label>
                <input pInputText id="lastname" formControlName="lastname" class="w-full" />
                @if (form.controls.lastname.touched && form.controls.lastname.invalid) {
                <small class="text-red-500">{{ fieldError(form.controls.lastname) }}</small>
                }
            </div>
        </div>

        <div class="flex flex-col gap-1">
            <label for="dni" class="font-medium">DNI</label>
            <input pInputText id="dni" formControlName="dni" class="w-full" />
            @if (form.controls.dni.touched && form.controls.dni.invalid) {
            <small class="text-red-500">{{ fieldError(form.controls.dni) }}</small>
            }
        </div>

        <div class="flex flex-col gap-1">
            <label for="email" class="font-medium">Correo electr\xF3nico</label>
            <input pInputText id="email" type="email" formControlName="email" class="w-full" />
            @if (form.controls.email.touched && form.controls.email.invalid) {
            <small class="text-red-500">{{ fieldError(form.controls.email) }}</small>
            }
        </div>

        <div class="flex flex-col gap-1">
            <label for="password" class="font-medium">
                Contrase\xF1a @if (isEditMode()) {
                <span class="text-muted-color font-normal">(opcional)</span>
                }
            </label>
            <p-password inputId="password" formControlName="password" [toggleMask]="true" [feedback]="false" [fluid]="true" />
            @if (form.controls.password.touched && form.controls.password.invalid) {
            <small class="text-red-500">{{ fieldError(form.controls.password) }}</small>
            }
        </div>

        <div class="flex justify-end gap-2 pt-2">
            <p-button label="Cancelar" severity="secondary" [outlined]="true" (onClick)="closeDialog()" />
            <p-button label="Guardar" type="submit" [loading]="saving()" />
        </div>
    </form>
</p-dialog>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserList, { className: "UserList", filePath: "src/app/pages/user/user-list/user-list.ts", lineNumber: 34 });
})();
export {
  UserList
};
//# sourceMappingURL=chunk-BEJRCOS5.js.map
