import {
  defineEventHandler,
  createRouter,
  useBase,
} from "h3";
import type { App } from "h3";
import { useRouter } from "./use-h3-router";
import { CreateAppOptions } from "../types";
import { apiAuth } from "../middlewares/apiAuth";

export function useH3Server(app: App, routes: CreateAppOptions["routes"]) {
  const router = createRouter();
  app.use(router);

  router.use(
    "/api/v2/**",
    defineEventHandler({
      onRequest: [apiAuth],
      handler: useBase(
        "/api/v2",
        useRouter(routes.testRoute).handler
      ),
    })
  );
}
