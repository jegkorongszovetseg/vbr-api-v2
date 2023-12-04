// server
// DB
// routes
// Middlewares
// Controllers
// utils

// createApp()

import createApp from "./bootstrap";
import server from "./server";
import router from "./routes";
import socket from "./socket";

createApp({
  app: server,
  router,
  socket,
});
