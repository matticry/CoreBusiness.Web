import {
  ActivatedRoute,
  Router
} from "./chunk-5RZFN4DP.js";
import {
  Password,
  PasswordModule,
  getControlError,
  takeUntilDestroyed
} from "./chunk-BRTC2ZLB.js";
import {
  AuthService,
  NotificationService
} from "./chunk-PCM2WHU7.js";
import "./chunk-KIAEJV5R.js";
import "./chunk-INDSNBJL.js";
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
  HttpErrorResponse
} from "./chunk-2J5W32J3.js";
import "./chunk-7WUWB5XB.js";
import "./chunk-MA4JJ4RV.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  finalize,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-I57DOXJD.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/auth/login/login.ts
function Login_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldError(ctx_r0.form.controls.email));
  }
}
function Login_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldError(ctx_r0.form.controls.password));
  }
}
var Login = class _Login {
  auth = inject(AuthService);
  notify = inject(NotificationService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  fb = inject(NonNullableFormBuilder);
  destroyRef = inject(DestroyRef);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  fieldError = getControlError;
  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.notify.warn("Completa el correo y la contrase\xF1a");
      return;
    }
    const { email, password } = this.form.getRawValue();
    this.loading.set(true);
    this.auth.login(email, password).pipe(finalize(() => this.loading.set(false)), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.notify.success("Bienvenido");
        const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") ?? "/pages/users";
        this.router.navigateByUrl(returnUrl);
      },
      error: (error) => {
        if (!(error instanceof HttpErrorResponse)) {
          this.notify.error(error instanceof Error ? error.message : "No se pudo iniciar sesi\xF3n");
        }
      }
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 23, vars: 7, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-surface-50", "dark:bg-surface-950", "p-4"], [1, "w-full", "max-w-md", "bg-surface-0", "dark:bg-surface-900", "rounded-3xl", "shadow-xl", "border", "border-surface-200", "dark:border-surface-800", "p-8"], [1, "text-center", "mb-8"], [1, "mx-auto", "mb-4", "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-primary-100", "dark:bg-primary-900/40"], [1, "pi", "pi-bolt", "text-2xl", "text-primary"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-0"], [1, "text-muted-color", "mt-1"], [1, "flex", "flex-col", "gap-5", 3, "ngSubmit", "formGroup"], [1, "flex", "flex-col", "gap-1"], ["for", "email", 1, "font-medium", "text-surface-900", "dark:text-surface-0"], ["pInputText", "", "id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "correo@ejemplo.com", 1, "w-full"], [1, "text-red-500"], ["for", "password", 1, "font-medium", "text-surface-900", "dark:text-surface-0"], ["inputId", "password", "formControlName", "password", "placeholder", "Contrase\xF1a", 3, "toggleMask", "feedback", "fluid"], ["type", "submit", "label", "Iniciar sesi\xF3n", "icon", "pi pi-sign-in", "styleClass", "w-full", 3, "loading"], [1, "text-center", "text-xs", "text-muted-color", "mt-6"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "Facturaci\xF3n Electr\xF3nica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Inicia sesi\xF3n para continuar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_9_listener() {
        return ctx.login();
      });
      \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, "Correo electr\xF3nico");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 10);
      \u0275\u0275conditionalCreate(14, Login_Conditional_14_Template, 2, 1, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "label", 12);
      \u0275\u0275text(17, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-password", 13);
      \u0275\u0275conditionalCreate(19, Login_Conditional_19_Template, 2, 1, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "p-button", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p", 15);
      \u0275\u0275text(22, "CoreBusiness \xB7 Acceso restringido");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 14 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("toggleMask", true)("feedback", false)("fluid", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.touched && ctx.form.controls.password.invalid ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading());
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonModule, Button, InputTextModule, InputText, PasswordModule, Password], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [ReactiveFormsModule, ButtonModule, InputTextModule, PasswordModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="min-h-screen flex items-center justify-center bg-surface-50 dark:bg-surface-950 p-4">\n    <div class="w-full max-w-md bg-surface-0 dark:bg-surface-900 rounded-3xl shadow-xl border border-surface-200 dark:border-surface-800 p-8">\n        <div class="text-center mb-8">\n            <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-900/40">\n                <i class="pi pi-bolt text-2xl text-primary"></i>\n            </div>\n            <h1 class="text-2xl font-bold text-surface-900 dark:text-surface-0">Facturaci\xF3n Electr\xF3nica</h1>\n            <p class="text-muted-color mt-1">Inicia sesi\xF3n para continuar</p>\n        </div>\n\n        <form [formGroup]="form" (ngSubmit)="login()" class="flex flex-col gap-5">\n            <div class="flex flex-col gap-1">\n                <label for="email" class="font-medium text-surface-900 dark:text-surface-0">Correo electr\xF3nico</label>\n                <input pInputText id="email" type="email" formControlName="email" autocomplete="email" placeholder="correo@ejemplo.com" class="w-full" />\n                @if (form.controls.email.touched && form.controls.email.invalid) {\n                <small class="text-red-500">{{ fieldError(form.controls.email) }}</small>\n                }\n            </div>\n\n            <div class="flex flex-col gap-1">\n                <label for="password" class="font-medium text-surface-900 dark:text-surface-0">Contrase\xF1a</label>\n                <p-password inputId="password" formControlName="password" [toggleMask]="true" [feedback]="false" [fluid]="true" placeholder="Contrase\xF1a" />\n                @if (form.controls.password.touched && form.controls.password.invalid) {\n                <small class="text-red-500">{{ fieldError(form.controls.password) }}</small>\n                }\n            </div>\n\n            <p-button type="submit" label="Iniciar sesi\xF3n" icon="pi pi-sign-in" [loading]="loading()" styleClass="w-full" />\n        </form>\n\n        <p class="text-center text-xs text-muted-color mt-6">CoreBusiness \xB7 Acceso restringido</p>\n    </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/pages/auth/login/login.ts", lineNumber: 21 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-OGCLLEHN.js.map
