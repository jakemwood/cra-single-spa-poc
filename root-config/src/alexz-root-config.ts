import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@alexz/app-one",
  app: () => System.import("@alexz/app-one"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
