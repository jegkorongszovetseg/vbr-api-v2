import express from "express";
import { listen } from "listhen";
import { App } from "../types";

async function createAppServer(): Promise<App> {
  const app = express();

  const { server } = await listen(app, {
    port: process.env.SERVER_PORT,
  });

  return {
    app,
    server,
  };
}

export default createAppServer;
