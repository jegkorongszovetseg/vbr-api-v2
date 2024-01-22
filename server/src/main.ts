import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";
import dotenv from "dotenv";
import createApp from "./bootstrap";
import appServer from "./bin/server-h3";
import { router } from "./routes";
import socket from "./bin/socket";
import { setup } from "./bin/mongodb";

// server
// DB
// routes
// Middlewares
// Controllers
// utils

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../../.env") });

createApp({
  app: appServer,
  routes: router,
  socket,
  mongodb: setup,
});
