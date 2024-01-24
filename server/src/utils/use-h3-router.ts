import { createRouter, defineEventHandler, defineRequestMiddleware } from 'h3'
import type { Routes } from '../types'
import { paramsValidation } from '../middlewares/params-validation'

export function useRouter(routes: Routes[], requestMiddlewares = []) {
  const router = createRouter()

  for (const route of routes) {
    const validationMiddleware = route.validation
      ? defineRequestMiddleware(e => paramsValidation(e, route.validation))
      : null

    router.add(
      route.path,
      defineEventHandler({
        onRequest: validationMiddleware
          ? [validationMiddleware, ...requestMiddlewares]
          : [...requestMiddlewares],
        handler: route.handler,
      }),
      route.method,
    )
  }

  return router
}
