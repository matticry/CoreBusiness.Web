import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-SME66JCD.js";
import {
  Rating,
  RatingModule,
  Textarea,
  TextareaModule,
  Toolbar,
  ToolbarModule
} from "./chunk-G7DXIUPA.js";
import {
  ProductService,
  ToastModule
} from "./chunk-IHO37IIH.js";
import {
  Tag,
  TagModule
} from "./chunk-37AQNBJZ.js";
import {
  Dialog,
  DialogModule
} from "./chunk-SEWUGS4X.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputNumber,
  InputNumberModule,
  RadioButton,
  RadioButtonModule,
  Select,
  SelectModule,
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
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
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator,
  RippleModule
} from "./chunk-2IMBOICD.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-2J5W32J3.js";
import "./chunk-7WUWB5XB.js";
import {
  CommonModule,
  CurrencyPipe,
  NgIf
} from "./chunk-MA4JJ4RV.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-I57DOXJD.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/pages/crud/crud.ts
var _c0 = ["dt"];
var _c1 = () => ["name", "country.name", "representative.name", "status"];
var _c2 = () => ({ "min-width": "75rem" });
var _c3 = () => [10, 20, 30];
var _c4 = () => ({ width: "450px" });
function Crud_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275listener("onClick", function Crud_ng_template_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 12);
    \u0275\u0275listener("onClick", function Crud_ng_template_1_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedProducts());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedProducts || !ctx_r2.selectedProducts.length);
  }
}
function Crud_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function Crud_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h5", 15);
    \u0275\u0275text(2, "Manage Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 16);
    \u0275\u0275elementStart(5, "input", 17);
    \u0275\u0275listener("input", function Crud_ng_template_7_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r6 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r6, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function Crud_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 18);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 19);
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 20);
    \u0275\u0275text(6, " Name ");
    \u0275\u0275element(7, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 22);
    \u0275\u0275text(11, " Price ");
    \u0275\u0275element(12, "p-sortIcon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 24);
    \u0275\u0275text(14, " Category ");
    \u0275\u0275element(15, "p-sortIcon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, " Reviews ");
    \u0275\u0275element(18, "p-sortIcon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 28);
    \u0275\u0275text(20, " Status ");
    \u0275\u0275element(21, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "th", 30);
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275element(2, "p-tableCheckbox", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "p-rating", 33);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_11_Template_p_rating_ngModelChange_15_listener($event) {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(product_r8.rating, $event) || (product_r8.rating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275element(17, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "p-button", 35);
    \u0275\u0275listener("click", function Crud_ng_template_11_Template_p_button_click_19_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProduct(product_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p-button", 36);
    \u0275\u0275listener("click", function Crud_ng_template_11_Template_p_button_click_20_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProduct(product_r8));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", product_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + product_r8.image, \u0275\u0275sanitizeUrl)("alt", product_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 15, product_r8.price, "USD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r8.category);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", product_r8.rating);
    \u0275\u0275property("readonly", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", product_r8.inventoryStatus)("severity", ctx_r2.getSeverity(product_r8.inventoryStatus));
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function Crud_ng_template_14_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 62);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + ctx_r2.product.image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.product.image);
  }
}
function Crud_ng_template_14_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, Crud_ng_template_14_img_1_Template, 1, 2, "img", 38);
    \u0275\u0275elementStart(2, "div")(3, "label", 39);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.name, $event) || (ctx_r2.product.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Crud_ng_template_14_small_6_Template, 2, 0, "small", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 42);
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.description, $event) || (ctx_r2.product.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 44);
    \u0275\u0275text(13, "Inventory Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.inventoryStatus, $event) || (ctx_r2.product.inventoryStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "span", 46);
    \u0275\u0275text(17, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 47)(19, "div", 48)(20, "p-radiobutton", 49);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 50);
    \u0275\u0275text(22, "Accessories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 48)(24, "p-radiobutton", 51);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 52);
    \u0275\u0275text(26, "Clothing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 48)(28, "p-radiobutton", 53);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label", 54);
    \u0275\u0275text(30, "Electronics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 48)(32, "p-radiobutton", 55);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label", 56);
    \u0275\u0275text(34, "Fitness");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 47)(36, "div", 57)(37, "label", 58);
    \u0275\u0275text(38, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p-inputnumber", 59);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_inputnumber_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.price, $event) || (ctx_r2.product.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 57)(41, "label", 60);
    \u0275\u0275text(42, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p-inputnumber", 61);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_inputnumber_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.quantity, $event) || (ctx_r2.product.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.image);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitted && !ctx_r2.product.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.inventoryStatus);
    \u0275\u0275property("options", ctx_r2.statuses);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.quantity);
  }
}
function Crud_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 64);
    \u0275\u0275listener("click", function Crud_ng_template_16_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 65);
    \u0275\u0275listener("click", function Crud_ng_template_16_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProduct());
    });
    \u0275\u0275elementEnd();
  }
}
var Crud = class _Crud {
  productService;
  messageService;
  confirmationService;
  productDialog = false;
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  product;
  selectedProducts;
  submitted = false;
  statuses;
  dt;
  exportColumns;
  cols;
  constructor(productService, messageService, confirmationService) {
    this.productService = productService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
  }
  exportCSV() {
    this.dt.exportCSV();
  }
  ngOnInit() {
    this.loadDemoData();
  }
  loadDemoData() {
    this.productService.getProducts().then((data) => {
      this.products.set(data);
    });
    this.statuses = [
      { label: "INSTOCK", value: "instock" },
      { label: "LOWSTOCK", value: "lowstock" },
      { label: "OUTOFSTOCK", value: "outofstock" }
    ];
    this.cols = [
      { field: "code", header: "Code", customExportHeader: "Product Code" },
      { field: "name", header: "Name" },
      { field: "image", header: "Image" },
      { field: "price", header: "Price" },
      { field: "category", header: "Category" }
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  editProduct(product) {
    this.product = __spreadValues({}, product);
    this.productDialog = true;
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.products.set(this.products().filter((val) => !this.selectedProducts?.includes(val)));
        this.selectedProducts = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Products Deleted",
          life: 3e3
        });
      }
    });
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  deleteProduct(product) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + product.name + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.products.set(this.products().filter((val) => val.id !== product.id));
        this.product = {};
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Deleted",
          life: 3e3
        });
      }
    });
  }
  findIndexById(id) {
    let index = -1;
    for (let i = 0; i < this.products().length; i++) {
      if (this.products()[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
  createId() {
    let id = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  getSeverity(status) {
    switch (status) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warn";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return "info";
    }
  }
  saveProduct() {
    this.submitted = true;
    let _products = this.products();
    if (this.product.name?.trim()) {
      if (this.product.id) {
        _products[this.findIndexById(this.product.id)] = this.product;
        this.products.set([..._products]);
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3e3
        });
      } else {
        this.product.id = this.createId();
        this.product.image = "product-placeholder.svg";
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3e3
        });
        this.products.set([..._products, this.product]);
      }
      this.productDialog = false;
      this.product = {};
    }
  }
  static \u0275fac = function Crud_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Crud)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Crud, selectors: [["app-crud"]], viewQuery: function Crud_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ProductService, ConfirmationService])], decls: 19, vars: 21, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["content", ""], ["footer", ""], ["styleClass", "mb-6"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} products", 3, "selectionChange", "value", "rows", "columns", "paginator", "globalFilterFields", "tableStyle", "selection", "rowHover", "showCurrentPageReport", "rowsPerPageOptions"], ["header", "Product Details", 3, "visibleChange", "visible", "modal"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], ["severity", "secondary", "label", "Delete", "icon", "pi pi-trash", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], [2, "width", "3rem"], [2, "min-width", "16rem"], ["pSortableColumn", "name", 2, "min-width", "16rem"], ["field", "name"], ["pSortableColumn", "price", 2, "min-width", "8rem"], ["field", "price"], ["pSortableColumn", "category", 2, "min-width", "10rem"], ["field", "category"], ["pSortableColumn", "rating", 2, "min-width", "12rem"], ["field", "rating"], ["pSortableColumn", "inventoryStatus", 2, "min-width", "12rem"], ["field", "inventoryStatus"], [2, "min-width", "12rem"], [3, "value"], [1, "rounded", 2, "width", "64px", 3, "src", "alt"], [3, "ngModelChange", "ngModel", "readonly"], [3, "value", "severity"], ["icon", "pi pi-pencil", 1, "mr-2", 3, "click", "rounded", "outlined"], ["icon", "pi pi-trash", "severity", "danger", 3, "click", "rounded", "outlined"], [1, "flex", "flex-col", "gap-6"], ["class", "block m-auto pb-4", 3, "src", "alt", 4, "ngIf"], ["for", "name", 1, "block", "font-bold", "mb-3"], ["type", "text", "pInputText", "", "id", "name", "required", "", "autofocus", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["class", "text-red-500", 4, "ngIf"], ["for", "description", 1, "block", "font-bold", "mb-3"], ["id", "description", "pTextarea", "", "required", "", "rows", "3", "cols", "20", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "inventoryStatus", 1, "block", "font-bold", "mb-3"], ["inputId", "inventoryStatus", "optionLabel", "label", "optionValue", "label", "placeholder", "Select a Status", "fluid", "", 3, "ngModelChange", "ngModel", "options"], [1, "block", "font-bold", "mb-4"], [1, "grid", "grid-cols-12", "gap-4"], [1, "flex", "items-center", "gap-2", "col-span-6"], ["id", "category1", "name", "category", "value", "Accessories", 3, "ngModelChange", "ngModel"], ["for", "category1"], ["id", "category2", "name", "category", "value", "Clothing", 3, "ngModelChange", "ngModel"], ["for", "category2"], ["id", "category3", "name", "category", "value", "Electronics", 3, "ngModelChange", "ngModel"], ["for", "category3"], ["id", "category4", "name", "category", "value", "Fitness", 3, "ngModelChange", "ngModel"], ["for", "category4"], [1, "col-span-6"], ["for", "price", 1, "block", "font-bold", "mb-3"], ["id", "price", "mode", "currency", "currency", "USD", "locale", "en-US", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "quantity", 1, "block", "font-bold", "mb-3"], ["id", "quantity", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "block", "m-auto", "pb-4", 3, "src", "alt"], [1, "text-red-500"], ["label", "Cancel", "icon", "pi pi-times", "text", "", 3, "click"], ["label", "Save", "icon", "pi pi-check", 3, "click"]], template: function Crud_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 8);
      \u0275\u0275template(1, Crud_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Crud_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-table", 9, 2);
      \u0275\u0275twoWayListener("selectionChange", function Crud_Template_p_table_selectionChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedProducts, $event) || (ctx.selectedProducts = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(7, Crud_ng_template_7_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(9, Crud_ng_template_9_Template, 23, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(11, Crud_ng_template_11_Template, 21, 18, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function Crud_Template_p_dialog_visibleChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.productDialog, $event) || (ctx.productDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(14, Crud_ng_template_14_Template, 44, 12, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(16, Crud_ng_template_16_Template, 2, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.products())("rows", 10)("columns", ctx.cols)("paginator", true)("globalFilterFields", \u0275\u0275pureFunction0(16, _c1))("tableStyle", \u0275\u0275pureFunction0(17, _c2));
      \u0275\u0275twoWayProperty("selection", ctx.selectedProducts);
      \u0275\u0275property("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c3));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.productDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c4));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    TableCheckbox,
    TableHeaderCheckbox,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    NgModel,
    ButtonModule,
    Button,
    RippleModule,
    ToastModule,
    ToolbarModule,
    Toolbar,
    RatingModule,
    Rating,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SelectModule,
    Select,
    RadioButtonModule,
    RadioButton,
    InputNumberModule,
    InputNumber,
    DialogModule,
    Dialog,
    TagModule,
    Tag,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    ConfirmDialogModule,
    ConfirmDialog,
    CurrencyPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Crud, [{
    type: Component,
    args: [{
      selector: "app-crud",
      standalone: true,
      imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule
      ],
      template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />
                <p-button severity="secondary" label="Delete" icon="pi pi-trash" outlined (onClick)="deleteSelectedProducts()" [disabled]="!selectedProducts || !selectedProducts.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="products()"
            [rows]="10"
            [columns]="cols"
            [paginator]="true"
            [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
            [tableStyle]="{ 'min-width': '75rem' }"
            [(selection)]="selectedProducts"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Manage Products</h5>
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search..." />
                    </p-iconfield>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th style="min-width: 16rem">Code</th>
                    <th pSortableColumn="name" style="min-width:16rem">
                        Name
                        <p-sortIcon field="name" />
                    </th>
                    <th>Image</th>
                    <th pSortableColumn="price" style="min-width: 8rem">
                        Price
                        <p-sortIcon field="price" />
                    </th>
                    <th pSortableColumn="category" style="min-width:10rem">
                        Category
                        <p-sortIcon field="category" />
                    </th>
                    <th pSortableColumn="rating" style="min-width: 12rem">
                        Reviews
                        <p-sortIcon field="rating" />
                    </th>
                    <th pSortableColumn="inventoryStatus" style="min-width: 12rem">
                        Status
                        <p-sortIcon field="inventoryStatus" />
                    </th>
                    <th style="min-width: 12rem"></th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="product" />
                    </td>
                    <td style="min-width: 12rem">{{ product.code }}</td>
                    <td style="min-width: 16rem">{{ product.name }}</td>
                    <td>
                        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" style="width: 64px" class="rounded" />
                    </td>
                    <td>{{ product.price | currency: 'USD' }}</td>
                    <td>{{ product.category }}</td>
                    <td>
                        <p-rating [(ngModel)]="product.rating" [readonly]="true" />
                    </td>
                    <td>
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
                    </td>
                    <td>
                        <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true" (click)="editProduct(product)" />
                        <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteProduct(product)" />
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-dialog [(visible)]="productDialog" [style]="{ width: '450px' }" header="Product Details" [modal]="true">
            <ng-template #content>
                <div class="flex flex-col gap-6">
                    <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.image" class="block m-auto pb-4" *ngIf="product.image" />
                    <div>
                        <label for="name" class="block font-bold mb-3">Name</label>
                        <input type="text" pInputText id="name" [(ngModel)]="product.name" required autofocus fluid />
                        <small class="text-red-500" *ngIf="submitted && !product.name">Name is required.</small>
                    </div>
                    <div>
                        <label for="description" class="block font-bold mb-3">Description</label>
                        <textarea id="description" pTextarea [(ngModel)]="product.description" required rows="3" cols="20" fluid></textarea>
                    </div>

                    <div>
                        <label for="inventoryStatus" class="block font-bold mb-3">Inventory Status</label>
                        <p-select [(ngModel)]="product.inventoryStatus" inputId="inventoryStatus" [options]="statuses" optionLabel="label" optionValue="label" placeholder="Select a Status" fluid />
                    </div>

                    <div>
                        <span class="block font-bold mb-4">Category</span>
                        <div class="grid grid-cols-12 gap-4">
                            <div class="flex items-center gap-2 col-span-6">
                                <p-radiobutton id="category1" name="category" value="Accessories" [(ngModel)]="product.category" />
                                <label for="category1">Accessories</label>
                            </div>
                            <div class="flex items-center gap-2 col-span-6">
                                <p-radiobutton id="category2" name="category" value="Clothing" [(ngModel)]="product.category" />
                                <label for="category2">Clothing</label>
                            </div>
                            <div class="flex items-center gap-2 col-span-6">
                                <p-radiobutton id="category3" name="category" value="Electronics" [(ngModel)]="product.category" />
                                <label for="category3">Electronics</label>
                            </div>
                            <div class="flex items-center gap-2 col-span-6">
                                <p-radiobutton id="category4" name="category" value="Fitness" [(ngModel)]="product.category" />
                                <label for="category4">Fitness</label>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-6">
                            <label for="price" class="block font-bold mb-3">Price</label>
                            <p-inputnumber id="price" [(ngModel)]="product.price" mode="currency" currency="USD" locale="en-US" fluid />
                        </div>
                        <div class="col-span-6">
                            <label for="quantity" class="block font-bold mb-3">Quantity</label>
                            <p-inputnumber id="quantity" [(ngModel)]="product.quantity" fluid />
                        </div>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (click)="hideDialog()" />
                <p-button label="Save" icon="pi pi-check" (click)="saveProduct()" />
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
      providers: [MessageService, ProductService, ConfirmationService]
    }]
  }], () => [{ type: ProductService }, { type: MessageService }, { type: ConfirmationService }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Crud, { className: "Crud", filePath: "src/app/pages/crud/crud.ts", lineNumber: 213 });
})();
export {
  Crud
};
//# sourceMappingURL=chunk-LKVXK2DJ.js.map
