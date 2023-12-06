import express from "express";
import type { Express } from "express";
import { CreateAppOptions } from "./types";

export default async function createApp(
  options: CreateAppOptions
): Promise<void> {
  const { app, router, socket, mongodb } = options;
  const { app: expressApp, server } = await app();
  defaultExpressSettings(expressApp);

  // APP
  // ROUTER
  socket?.(server);
  expressApp.use(router);

  // Databese
  await mongodb?.();
}

function defaultExpressSettings(app: Express) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  // app.use(cors());
  // app.use(cookieParser());
  app.disable("x-powered-by");
}
