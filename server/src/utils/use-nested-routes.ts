import { defineEventHandler, useBase } from 'h3'
import type { Router, _RequestMiddleware } from 'h3'

interface NestedRoutes {
  router: Router
  path: string
  routes: Router
  middlewares?: _RequestMiddleware[]
}

export function useNestedRoutes({ router, path = '/', middlewares = [], routes }: NestedRoutes): void {
  router.use(
    path,
    defineEventHandler({
      onRequest: [...middlewares],
      handler: useBase(
        path.replace('**', ''),
        routes.handler,
      ),
    }),
  )
}
