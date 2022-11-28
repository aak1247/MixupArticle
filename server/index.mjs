import {
  __export
} from "./chunk-URSW3MP6.mjs";

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "prod";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "undefined";

// .ice/entry.server.ts
import * as runtime from "@ice/runtime/server";

// .ice/runtimeModules.ts
var statics = [];
var commons = [];

// src/app.ts
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});

// .ice/index.ts
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from "@ice/runtime/router";
import { defineAppConfig, useAppData, useData, useConfig, Meta, Title, Links, Scripts, Data, Main, history, KeepAliveOutlet, useMounted, ClientOnly, defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime";

// src/app.ts
var app_default = defineAppConfig(() => ({}));

// src/document.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
function Document() {
  return /* @__PURE__ */ _jsxs("html", {
    children: [
      /* @__PURE__ */ _jsxs("head", {
        children: [
          /* @__PURE__ */ _jsx("meta", {
            charSet: "utf-8"
          }),
          /* @__PURE__ */ _jsx("meta", {
            name: "description",
            content: "ice.js 3 lite scaffold"
          }),
          /* @__PURE__ */ _jsx("link", {
            rel: "icon",
            href: "/favicon.ico"
          }),
          /* @__PURE__ */ _jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          }),
          /* @__PURE__ */ _jsx(Meta, {}),
          /* @__PURE__ */ _jsx(Title, {}),
          /* @__PURE__ */ _jsx(Links, {})
        ]
      }),
      /* @__PURE__ */ _jsxs("body", {
        children: [
          /* @__PURE__ */ _jsx(Main, {}),
          /* @__PURE__ */ _jsx(Scripts, {})
        ]
      })
    ]
  });
}

// asset-manifest:virtual:assets-manifest.json
var virtual_assets_manifest_default = { publicPath: "/MixupArticle/", entries: { main: ["js/framework.js", "js/533.js", "css/main.css", "js/main.js"] }, pages: { index: ["js/60.js", "css/index.css", "js/index.js"] }, assets: {} };

// .ice/routes.ts
var routes_default = [
  {
    path: "",
    load: () => import(
      /* webpackChunkName: "index" */
      "./pages-L6C777XH.mjs"
    ),
    componentName: "index",
    index: true,
    id: "index",
    exact: true,
    exports: [
      "default"
    ]
  }
];

// .ice/routes-config.bundle.mjs
var routes_config_default = {};

// .ice/entry.server.ts
var runtimeModules = {
  commons,
  statics
};
var getRouterBasename = () => {
  var _a, _b, _c;
  const appConfig = runtime.getAppConfig(app_exports);
  return (_c = (_b = (_a = appConfig == null ? void 0 : appConfig.router) == null ? void 0 : _a.basename) != null ? _b : "/") != null ? _c : "";
};
var setRuntimeEnv = (renderMode) => {
  if (renderMode === "SSG") {
    process.env.ICE_CORE_SSG = "true";
  } else {
    process.env.ICE_CORE_SSR = "true";
  }
};
async function renderToHTML2(requestContext, options = {}) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, routePath, disableFallback } = options;
  setRuntimeEnv(renderMode);
  return await runtime.renderToHTML(requestContext, {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    routePath,
    disableFallback,
    routesConfig: routes_config_default
  });
}
async function renderToResponse2(requestContext, options = {}) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, disableFallback } = options;
  setRuntimeEnv(options);
  runtime.renderToResponse(requestContext, {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    disableFallback,
    routesConfig: routes_config_default
  });
}
export {
  renderToHTML2 as renderToHTML,
  renderToResponse2 as renderToResponse
};
