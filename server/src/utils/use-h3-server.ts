import { createRouter } from 'h3'
import type { App } from 'h3'
import type { CreateAppOptions } from '../types'
import { apiAuth } from '../middlewares/api-auth'
import { useRouter } from './use-h3-router'
import { useNestedRoutes } from './use-nested-routes'

export function useH3Server(app: App, routes: CreateAppOptions['routes']) {
  const router = createRouter()
  app.use(router)

  useNestedRoutes({
    router,
    path: '/api/v2/**',
    middlewares: [apiAuth],
    routes: useRouter(routes.testRoute),
  })
}
