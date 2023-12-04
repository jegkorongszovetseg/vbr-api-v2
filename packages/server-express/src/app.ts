// server
// DB
// routes
// Middlewares
// Controllers
// utils

// createApp()

import createApp from "./bootstrap";
import appServer from "./server";
// import { router } from "./routes";
import { routes } from "vbr-api-v2-routes";
import socket from "./socket";

await createApp({
  app: appServer,
  routes,
  socket,
});
