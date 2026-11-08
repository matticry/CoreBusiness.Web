import {
  API_URL
} from "./chunk-INDSNBJL.js";
import {
  ColumnFilter,
  IconField,
  InputIcon,
  Table,
  TableModule
} from "./chunk-XMHTXQJQ.js";
import "./chunk-2WWKO7OF.js";
import "./chunk-PERVHQN2.js";
import {
  Button
} from "./chunk-2IMBOICD.js";
import {
  HttpClient
} from "./chunk-2J5W32J3.js";
import "./chunk-7WUWB5XB.js";
import {
  DatePipe,
  NgClass
} from "./chunk-MA4JJ4RV.js";
import {
  Component,
  Injectable,
  finalize,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I57DOXJD.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/work-item.service.ts
var WorkItemService = class _WorkItemService {
  http = inject(HttpClient);
  apiUrl = inject(API_URL);
  getByStatus(status) {
    return this.http.get(`${this.apiUrl}/users/status/${status}`).pipe(map((response) => response.data ?? []));
  }
  static \u0275fac = function WorkItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkItemService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkItemService, factory: _WorkItemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkItemService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/work-items/work-items.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c2 = () => ["code", "description"];
function WorkItemsComponent_Conditional_26_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function WorkItemsComponent_Conditional_26_For_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function WorkItemsComponent_Conditional_26_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, WorkItemsComponent_Conditional_26_For_8_For_2_Template, 1, 0, "div", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function WorkItemsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 27);
    \u0275\u0275element(2, "div", 28)(3, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275repeaterCreate(5, WorkItemsComponent_Conditional_26_For_6_Template, 1, 0, "div", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, WorkItemsComponent_Conditional_26_For_8_Template, 3, 1, "div", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
  }
}
function WorkItemsComponent_Conditional_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "p-button", 36);
    \u0275\u0275listener("onClick", function WorkItemsComponent_Conditional_27_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const dt1_r2 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearTableFilters(dt1_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 37);
    \u0275\u0275listener("onClick", function WorkItemsComponent_Conditional_27_ng_template_2_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.getPendingWorkItems());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-iconfield", 38)(5, "p-inputicon");
    \u0275\u0275element(6, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 40);
    \u0275\u0275listener("input", function WorkItemsComponent_Conditional_27_ng_template_2_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const dt1_r2 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt1_r2, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function WorkItemsComponent_Conditional_27_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 41)(2, "div", 27)(3, "span", 42);
    \u0275\u0275text(4, "C\xD3DIGO");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p-columnFilter", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th", 44)(7, "div", 27)(8, "span", 42);
    \u0275\u0275text(9, "DESCRIPCI\xD3N");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "p-columnFilter", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "th", 46)(12, "span", 42);
    \u0275\u0275text(13, "RELEVANCIA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "th", 47)(15, "div", 27)(16, "span", 42);
    \u0275\u0275text(17, "CREADO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "th", 47)(19, "div", 27)(20, "span", 42);
    \u0275\u0275text(21, "VENCIMIENTO");
    \u0275\u0275elementEnd()()()();
  }
}
function WorkItemsComponent_Conditional_27_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 48)(1, "td")(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 52)(11, "div", 53);
    \u0275\u0275element(12, "i", 54);
    \u0275\u0275elementStart(13, "span", 55);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td")(16, "span", 56);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span", 56);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.getRelevanceIcon(item_r4.relevance));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getRelevanceIcon(item_r4.relevance));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.relevance, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 8, item_r4.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 11, item_r4.expirationDate, "dd/MM/yyyy"));
  }
}
function WorkItemsComponent_Conditional_27_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57)(2, "div", 58);
    \u0275\u0275element(3, "i", 59);
    \u0275\u0275elementStart(4, "div")(5, "p", 60);
    \u0275\u0275text(6, "No hay items pendientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 61);
    \u0275\u0275text(8, "No se encontraron work items con estado pendiente");
    \u0275\u0275elementEnd()()()()();
  }
}
function WorkItemsComponent_Conditional_27_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57)(2, "div", 62);
    \u0275\u0275element(3, "i", 63);
    \u0275\u0275elementStart(4, "span", 64);
    \u0275\u0275text(5, "Cargando items...");
    \u0275\u0275elementEnd()()()();
  }
}
function WorkItemsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 26, 0);
    \u0275\u0275template(2, WorkItemsComponent_Conditional_27_ng_template_2_Template, 8, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, WorkItemsComponent_Conditional_27_ng_template_4_Template, 22, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, WorkItemsComponent_Conditional_27_ng_template_6_Template, 23, 14, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(8, WorkItemsComponent_Conditional_27_ng_template_8_Template, 9, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(10, WorkItemsComponent_Conditional_27_ng_template_10_Template, 6, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.workItems)("rows", 10)("rowHover", true)("showGridlines", true)("paginator", true)("globalFilterFields", \u0275\u0275pureFunction0(6, _c2));
  }
}
var WorkItemsComponent = class _WorkItemsComponent {
  workItemService;
  workItems = [];
  loading = false;
  totalRecords = 0;
  constructor(workItemService) {
    this.workItemService = workItemService;
  }
  ngOnInit() {
    this.getPendingWorkItems();
  }
  getPendingWorkItems() {
    this.loading = true;
    this.workItemService.getByStatus("P").pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => {
        this.workItems = data;
        this.totalRecords = data.length;
      },
      error: () => void 0
    });
  }
  getRelevanceIcon(relevance) {
    if (relevance >= 8)
      return "text-red-500";
    if (relevance >= 5)
      return "text-orange-400";
    return "text-green-500";
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  clearTableFilters(table) {
    table.clear();
  }
  static \u0275fac = function WorkItemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkItemsComponent)(\u0275\u0275directiveInject(WorkItemService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkItemsComponent, selectors: [["app-work-items"]], decls: 28, vars: 4, consts: [["dt1", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [1, "card"], [1, "flex", "flex-col", "gap-8", "w-full"], [1, "flex", "items-center", "gap-2", "min-w-0"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "rounded-xl", "bg-gradient-to-br", "from-orange-100", "via-orange-200/60", "to-orange-300/40", "dark:from-orange-900/50", "dark:via-orange-800/70", "dark:to-orange-700/50", "border", "border-orange-200/60", "dark:border-orange-600/40", "shadow-lg"], [1, "pi", "pi-briefcase", "text-orange-600", "dark:text-orange-300", "text-xl"], [1, "min-w-0"], [1, "text-gray-800", "dark:text-white", "text-xl", "sm:text-2xl", "font-bold", "leading-snug", "tracking-tight"], [1, "text-gray-500", "dark:text-gray-400", "text-xs", "sm:text-sm", "leading-snug", 2, "margin-top", "-15px"], [1, "bg-surface-50/50", "dark:bg-surface-900/50", "backdrop-blur-sm", "rounded-xl", "border", "border-surface-200/50", "dark:border-surface-700/50", "p-6"], [1, "w-full"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-xl", "bg-gradient-to-br", "from-orange-100", "via-orange-200/60", "to-orange-300/40", "dark:from-orange-900/50", "dark:via-orange-800/70", "dark:to-orange-700/50", "border", "border-orange-200/60", "dark:border-orange-600/40", "shadow-lg"], [1, "pi", "pi-table", "text-orange-600", "dark:text-orange-300", "text-sm"], [1, "text-gray-800", "dark:text-white", "text-lg", "font-bold", "leading-snug", "tracking-tight"], [1, "text-gray-500", "dark:text-gray-400", "text-xs", "leading-snug", 2, "margin-top", "-10px"], [1, "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", 3, "ngClass"], [1, "text-xs", "font-medium", "text-surface-600", "dark:text-surface-300"], [1, "bg-surface-0", "dark:bg-surface-900", "rounded-lg", "shadow-sm", "border", "border-surface-200", "dark:border-surface-700"], [1, "p-4", "space-y-4"], ["dataKey", "id", "responsiveLayout", "scroll", 1, "p-datatable-sm", 3, "value", "rows", "rowHover", "showGridlines", "paginator", "globalFilterFields"], [1, "flex", "justify-between", "items-center"], [1, "h-8", "bg-surface-200", "dark:bg-surface-700", "rounded", "w-32", "animate-pulse"], [1, "h-8", "bg-surface-200", "dark:bg-surface-700", "rounded", "w-48", "animate-pulse"], [1, "grid", "grid-cols-6", "gap-2", "p-3", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "h-4", "bg-surface-200", "dark:bg-surface-700", "rounded", "animate-pulse"], [1, "grid", "grid-cols-6", "gap-2", "p-3", "border-b", "border-surface-100", "dark:border-surface-800"], [1, "h-4", "bg-surface-100", "dark:bg-surface-800", "rounded", "animate-pulse"], [1, "flex", "justify-between", "items-center", "flex-column", "sm:flex-row", "p-4", "bg-surface-50", "dark:bg-surface-800"], [1, "flex", "gap-2", "mb-2"], ["label", "Limpiar Filtros", "icon", "pi pi-filter-slash", "size", "small", 1, "p-button-outlined", 3, "onClick"], ["label", "Actualizar", "icon", "pi pi-refresh", "severity", "secondary", "size", "small", 3, "onClick"], ["iconPosition", "left", 1, "ml-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar items...", 1, "text-sm", 3, "input"], [2, "min-width", "8rem"], [1, "font-semibold", "text-xs"], ["type", "text", "field", "code", "display", "menu"], [2, "min-width", "16rem"], ["type", "text", "field", "description", "display", "menu"], [1, "text-center", 2, "min-width", "8rem"], [2, "min-width", "10rem"], [1, "hover:bg-surface-50", "dark:hover:bg-surface-800", "transition-colors"], [1, "font-mono", "text-xs"], [1, "font-mono", "text-sm", "font-semibold", "text-primary"], [1, "text-sm"], [1, "text-center"], [1, "flex", "justify-center", "items-center", "gap-1"], [1, "pi", "pi-star-fill", "text-xs", 3, "ngClass"], [1, "text-sm", "font-semibold", 3, "ngClass"], [1, "text-sm", "text-surface-500"], ["colspan", "6", 1, "text-center", "py-8"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "pi", "pi-briefcase", "text-4xl", "text-surface-300", "dark:text-surface-600"], [1, "text-surface-500", "dark:text-surface-400", "font-medium"], [1, "text-sm", "text-surface-400", "dark:text-surface-500"], [1, "flex", "items-center", "justify-center", "gap-3"], [1, "pi", "pi-spin", "pi-spinner", "text-xl", "text-primary"], [1, "text-surface-600", "dark:text-surface-400"]], template: function WorkItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9);
      \u0275\u0275element(4, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 11)(6, "p", 12);
      \u0275\u0275text(7, "Work Items Pendientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 13);
      \u0275\u0275text(9, "Items de trabajo con estado pendiente de resoluci\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 14)(11, "div", 15)(12, "div", 16)(13, "div", 8)(14, "div", 17);
      \u0275\u0275element(15, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "p", 19);
      \u0275\u0275text(18, "Listado de Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 20);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 21);
      \u0275\u0275element(22, "div", 22);
      \u0275\u0275elementStart(23, "span", 23);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 24);
      \u0275\u0275conditionalCreate(26, WorkItemsComponent_Conditional_26_Template, 9, 2, "div", 25)(27, WorkItemsComponent_Conditional_27_Template, 12, 7, "p-table", 26);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275textInterpolate1("", ctx.totalRecords, " items pendientes");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.loading ? "bg-orange-500 animate-pulse" : "bg-emerald-500");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Actualizando" : "Actualizado", " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 26 : 27);
    }
  }, dependencies: [TableModule, Table, ColumnFilter, NgClass, InputIcon, IconField, Button, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkItemsComponent, [{
    type: Component,
    args: [{ selector: "app-work-items", imports: [TableModule, NgClass, InputIcon, DatePipe, IconField, Button], template: `<div class="card">
    <div class="flex flex-col gap-8 w-full">
        <!-- Header -->
        <div class="flex items-center gap-2 min-w-0">
            <div
                class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 via-orange-200/60 to-orange-300/40 dark:from-orange-900/50 dark:via-orange-800/70 dark:to-orange-700/50 border border-orange-200/60 dark:border-orange-600/40 shadow-lg"
            >
                <i class="pi pi-briefcase text-orange-600 dark:text-orange-300 text-xl"></i>
            </div>
            <div class="min-w-0">
                <p class="text-gray-800 dark:text-white text-xl sm:text-2xl font-bold leading-snug tracking-tight">Work Items Pendientes</p>
                <p style="margin-top: -15px" class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-snug">Items de trabajo con estado pendiente de resoluci\xF3n</p>
            </div>
        </div>

        <!-- Panel -->
        <div class="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm rounded-xl border border-surface-200/50 dark:border-surface-700/50 p-6">
            <div class="w-full">
                <!-- Header tabla -->
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2 min-w-0">
                        <div
                            class="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 via-orange-200/60 to-orange-300/40 dark:from-orange-900/50 dark:via-orange-800/70 dark:to-orange-700/50 border border-orange-200/60 dark:border-orange-600/40 shadow-lg"
                        >
                            <i class="pi pi-table text-orange-600 dark:text-orange-300 text-sm"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-gray-800 dark:text-white text-lg font-bold leading-snug tracking-tight">Listado de Items</p>
                            <p style="margin-top: -10px" class="text-gray-500 dark:text-gray-400 text-xs leading-snug">{{ totalRecords }} items pendientes</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full" [ngClass]="loading ? 'bg-orange-500 animate-pulse' : 'bg-emerald-500'"></div>
                        <span class="text-xs font-medium text-surface-600 dark:text-surface-300"> {{ loading ? 'Actualizando' : 'Actualizado' }} </span>
                    </div>
                </div>

                <!-- Contenedor tabla -->
                <div class="bg-surface-0 dark:bg-surface-900 rounded-lg shadow-sm border border-surface-200 dark:border-surface-700">
                    @if (loading) {
                    <div class="p-4 space-y-4">
                        <div class="flex justify-between items-center">
                            <div class="h-8 bg-surface-200 dark:bg-surface-700 rounded w-32 animate-pulse"></div>
                            <div class="h-8 bg-surface-200 dark:bg-surface-700 rounded w-48 animate-pulse"></div>
                        </div>
                        <div class="grid grid-cols-6 gap-2 p-3 border-b border-surface-200 dark:border-surface-700">
                            @for (header of [1,2,3,4,5,6]; track header) {
                            <div class="h-4 bg-surface-200 dark:bg-surface-700 rounded animate-pulse"></div>
                            }
                        </div>
                        @for (row of [1,2,3,4,5,6,7,8]; track row) {
                        <div class="grid grid-cols-6 gap-2 p-3 border-b border-surface-100 dark:border-surface-800">
                            @for (col of [1,2,3,4,5,6]; track col) {
                            <div class="h-4 bg-surface-100 dark:bg-surface-800 rounded animate-pulse"></div>
                            }
                        </div>
                        }
                    </div>
                    } @else {
                    <p-table #dt1 [value]="workItems" dataKey="id" [rows]="10" [rowHover]="true" [showGridlines]="true" [paginator]="true" [globalFilterFields]="['code', 'description']" responsiveLayout="scroll" class="p-datatable-sm">
                        <ng-template #caption>
                            <div class="flex justify-between items-center flex-column sm:flex-row p-4 bg-surface-50 dark:bg-surface-800">
                                <div class="flex gap-2 mb-2">
                                    <p-button label="Limpiar Filtros" class="p-button-outlined" icon="pi pi-filter-slash" size="small" (onClick)="clearTableFilters(dt1)"> </p-button>
                                    <p-button label="Actualizar" icon="pi pi-refresh" severity="secondary" size="small" (onClick)="getPendingWorkItems()"> </p-button>
                                </div>
                                <p-iconfield iconPosition="left" class="ml-auto">
                                    <p-inputicon>
                                        <i class="pi pi-search"></i>
                                    </p-inputicon>
                                    <input pInputText type="text" (input)="onGlobalFilter(dt1, $event)" placeholder="Buscar items..." class="text-sm" />
                                </p-iconfield>
                            </div>
                        </ng-template>

                        <ng-template #header>
                            <tr>
                                <th style="min-width: 8rem">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold text-xs">C\xD3DIGO</span>
                                        <p-columnFilter type="text" field="code" display="menu"></p-columnFilter>
                                    </div>
                                </th>
                                <th style="min-width: 16rem">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold text-xs">DESCRIPCI\xD3N</span>
                                        <p-columnFilter type="text" field="description" display="menu"></p-columnFilter>
                                    </div>
                                </th>
                                <th style="min-width: 8rem" class="text-center">
                                    <span class="font-semibold text-xs">RELEVANCIA</span>
                                </th>
                                <th style="min-width: 10rem">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold text-xs">CREADO</span>
                                    </div>
                                </th>
                                <th style="min-width: 10rem">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold text-xs">VENCIMIENTO</span>
                                    </div>
                                </th>
                            </tr>
                        </ng-template>

                        <ng-template #body let-item>
                            <tr class="hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors">
                                <td>
                                    <span class="font-mono text-xs">{{ item.id }}</span>
                                </td>
                                <td>
                                    <span class="font-mono text-sm font-semibold text-primary">{{ item.code }}</span>
                                </td>
                                <td>
                                    <span class="text-sm">{{ item.description }}</span>
                                </td>
                                <td class="text-center">
                                    <div class="flex justify-center items-center gap-1">
                                        <i class="pi pi-star-fill text-xs" [ngClass]="getRelevanceIcon(item.relevance)"></i>
                                        <span class="text-sm font-semibold" [ngClass]="getRelevanceIcon(item.relevance)"> {{ item.relevance }} </span>
                                    </div>
                                </td>
                                <td>
                                    <span class="text-sm text-surface-500">{{ item.createdAt | date: 'dd/MM/yyyy' }}</span>
                                </td>
                                <td>
                                    <span class="text-sm text-surface-500">{{ item.expirationDate | date: 'dd/MM/yyyy' }}</span>
                                </td>
                            </tr>
                        </ng-template>

                        <ng-template #emptymessage>
                            <tr>
                                <td colspan="6" class="text-center py-8">
                                    <div class="flex flex-col items-center gap-3">
                                        <i class="pi pi-briefcase text-4xl text-surface-300 dark:text-surface-600"></i>
                                        <div>
                                            <p class="text-surface-500 dark:text-surface-400 font-medium">No hay items pendientes</p>
                                            <p class="text-sm text-surface-400 dark:text-surface-500">No se encontraron work items con estado pendiente</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </ng-template>

                        <ng-template #loadingbody>
                            <tr>
                                <td colspan="6" class="text-center py-8">
                                    <div class="flex items-center justify-center gap-3">
                                        <i class="pi pi-spin pi-spinner text-xl text-primary"></i>
                                        <span class="text-surface-600 dark:text-surface-400">Cargando items...</span>
                                    </div>
                                </td>
                            </tr>
                        </ng-template>
                    </p-table>
                    }
                </div>
            </div>
        </div>
    </div>
</div>
` }]
  }], () => [{ type: WorkItemService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkItemsComponent, { className: "WorkItemsComponent", filePath: "src/app/pages/work-items/work-items.ts", lineNumber: 17 });
})();
export {
  WorkItemsComponent
};
//# sourceMappingURL=chunk-BF6J4OTU.js.map
