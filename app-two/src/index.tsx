import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("app-two") as Element,
});

// For lazy loading within an application to work you need to set webpack's public path
// basically webpack's internal module system always looks for code-splits (modules) at the root
export default function setPublicPath() {
  return Promise.all([getUrl()]).then((values) => {
    const [url] = values;
    const webpackPublicPath = url.slice(0, url.lastIndexOf("/") + 1);
    // @ts-ignore
    __webpack_public_path__ = webpackPublicPath;
    return true;
  });
}

function getUrl() {
  // @ts-ignore
  return window.System.resolve("@alexz/app-two");
}

export const bootstrap = [
  () => {
    return setPublicPath();
  },
  reactLifecycles.bootstrap,
];
export const mount = [reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount];
