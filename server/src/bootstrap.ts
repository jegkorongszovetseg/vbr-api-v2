// import express from "express";
// import type { Express } from "express";
import { useH3Server }  from './utils/use-h3-server';
import { CreateAppOptions } from "./types";

export default async function createApp(
  options: CreateAppOptions
): Promise<void> {
  const { app, routes, socket, mongodb } = options;
  const { app: serverApp, server } = await app();

  useH3Server(serverApp, routes)

  // APP
  // ROUTER
  socket?.(server);

  // Databese
  await mongodb?.();
}
