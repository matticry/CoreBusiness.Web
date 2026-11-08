import {
  InjectionToken
} from "./chunk-I57DOXJD.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:8080/api/v1",
  defaultUserImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
};

// src/app/core/config/api.config.ts
var API_URL = new InjectionToken("API_URL", {
  providedIn: "root",
  factory: () => environment.apiUrl
});

export {
  API_URL
};
//# sourceMappingURL=chunk-INDSNBJL.js.map
