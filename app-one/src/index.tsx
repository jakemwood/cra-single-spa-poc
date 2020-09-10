import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// @ts-ignore
console.log(__webpack_require__.p);
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("app-one") as Element,
});

export const bootstrap = [
  async () => {
    // @ts-ignore
    __webpack_public_path__ = "//localhost:3000";
    // @ts-ignore
    __webpack_require__.p = "//localhost:3000";
    console.log("bootstrap step!");
    // @ts-ignore
    console.log(__webpack_public_path__, __webpack_require__.p);
    return Promise.resolve();
  },
  reactLifecycles.bootstrap,
];
export const mount = [reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount];
