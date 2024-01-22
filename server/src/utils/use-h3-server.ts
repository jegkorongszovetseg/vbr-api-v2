import type { App } from "h3";
import { eventHandler } from "h3";

export function useH3Server(app: App, routes) {
  app.use(
    "/",
    eventHandler(() => "Hello world!!")
  );
}
