import { defineEventHandler, createRouter } from "h3";
import type { Routes } from "../types";


export function useRouter(routes: Routes[]) {
  const router = createRouter();

  for (const route of routes) {
    router.add(
      route.path,
      defineEventHandler(route.handler),
      route.method,
    );
  }

  return router;
}
