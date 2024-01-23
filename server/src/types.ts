import type { App as h3App, RouterMethod } from "h3";
import type { Listener } from "listhen";

export interface App {
  app: h3App;
  server: Listener["server"];
}

export type Routes = {
  path: string;
  name: string;
  method: RouterMethod;
  handler: () => void;
  validation: null;
};

interface RoutesModule {
  [key: string]: Routes[]
}

export interface CreateAppOptions {
  app: () => Promise<App>;
  routes: RoutesModule;
  socket?: (server: App["server"]) => void;
  mongodb?: () => Promise<void>;
}
