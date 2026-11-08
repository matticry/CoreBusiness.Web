import {
  Router
} from "./chunk-5RZFN4DP.js";
import {
  USER_PERMISSIONS
} from "./chunk-ONTYLXLW.js";
import {
  AuthService
} from "./chunk-PCM2WHU7.js";
import "./chunk-INDSNBJL.js";
import "./chunk-2J5W32J3.js";
import "./chunk-MA4JJ4RV.js";
import {
  inject
} from "./chunk-I57DOXJD.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/guards/permission.guard.ts
var permissionGuard = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    return router.createUrlTree(["/auth/login"]);
  }
  const requiredPermission = route.data["permission"];
  if (!requiredPermission) {
    return true;
  }
  const allowed = Array.isArray(requiredPermission) ? auth.hasAnyPermission(requiredPermission) : auth.hasPermission(requiredPermission);
  return allowed ? true : router.createUrlTree(["/auth/access"]);
};

// src/app/pages/pages.routes.ts
var pages_routes_default = [
  { path: "documentation", loadComponent: () => import("./chunk-BW7YX5FE.js").then((m) => m.Documentation), title: "Documentaci\xF3n" },
  { path: "crud", loadComponent: () => import("./chunk-LKVXK2DJ.js").then((m) => m.Crud), title: "CRUD" },
  { path: "empty", loadComponent: () => import("./chunk-EAMEFS6C.js").then((m) => m.Empty), title: "Vac\xEDo" },
  {
    path: "users",
    canActivate: [permissionGuard],
    data: { permission: USER_PERMISSIONS.READ },
    loadComponent: () => import("./chunk-BEJRCOS5.js").then((m) => m.UserList),
    title: "Usuarios"
  },
  { path: "work-items", loadComponent: () => import("./chunk-BF6J4OTU.js").then((m) => m.WorkItemsComponent), title: "Items de trabajo" },
  { path: "**", redirectTo: "/notfound" }
];
export {
  pages_routes_default as default
};
//# sourceMappingURL=chunk-HAILH6LP.js.map
