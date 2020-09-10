import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@alexz/navbar",
  app: () => System.import("@alexz/navbar"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@alexz/app-one",
  app: () => System.import("@alexz/app-one"),
  activeWhen: ["/app-one"],
});
registerApplication({
  name: "@alexz/app-two",
  app: () => System.import("@alexz/app-two"),
  activeWhen: ["/app-two"],
});

start({
  urlRerouteOnly: true,
});
