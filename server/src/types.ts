import type { Express } from "express";
import type { App as h3App } from "h3";
import type { Listener } from "listhen";

export interface App {
  app: Express | h3App;
  server: Listener["server"];
}

export interface CreateAppOptions {
  app: () => Promise<App>;
  routes: any;
  socket?: (server: App['server']) => void;
  mongodb?: () => Promise<void>;
}
