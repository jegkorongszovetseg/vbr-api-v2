import type { Express } from "express";
import type { Listener } from "listhen";

export interface App {
  app: Express;
  server: Listener["server"];
}

export interface CreateAppOptions {
  app: () => Promise<App>;
  router: Express;
  socket?: (server: App['server']) => void;
  mongodb?: () => Promise<void>;
}
