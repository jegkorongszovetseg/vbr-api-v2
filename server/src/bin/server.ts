import express from "express";
import { listen } from "listhen";
import type { App } from "../types";

async function createAppServer(): Promise<App> {
  const app = express();

  console.log("process.env.SERVER_PORT", process.env.SERVER_PORT);
  const { server } = await listen(app, {
    port: process.env.SERVER_PORT,
  });

  return {
    app,
    server,
  };
}

export default createAppServer;
