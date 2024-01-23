import { defineEventHandler, defineRequestMiddleware, createRouter, useBase } from "h3";
import type { App } from "h3";
import { useRouter } from "./use-h3-router";
import { CreateAppOptions } from "../types";

export function useH3Server(app: App, routes: CreateAppOptions["routes"]) {
  const router = createRouter();
  app.use(router);

  const zodAuth = defineRequestMiddleware(() => {
    // Do anything you want here like authentication, rate limiting, etc.
    console.log('onRequest-2');
    // Never return anything from onRequest to avoid to close the connection
  });
  //  const testRoute = useRouter(routes.testRoute)

  //  router.use("/api/v2/**", useBase("/api/v2",  useRouter(routes.testRoute).handler));
  router.use(
    "/api/v2/**",
    defineEventHandler({
      onRequest: [zodAuth],
      handler: useBase("/api/v2", useRouter(routes.testRoute).handler),
    })
  );

  // apiRouter.use(
  //   '/test',
  //   defineEventHandler({
  //     onRequest: [auth, zodAuth],
  //     handler: () => {
  //       console.log('/test');
  //       return 'API v1/test';
  //     },
  //   })
  // );
}
