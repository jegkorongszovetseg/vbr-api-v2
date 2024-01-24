import {
  createRouter,
  defineEventHandler,
  useBase,
} from 'h3'
import type { App } from 'h3'
import type { CreateAppOptions } from '../types'
import { apiAuth } from '../middlewares/api-auth'
import { useRouter } from './use-h3-router'

export function useH3Server(app: App, routes: CreateAppOptions['routes']) {
  const router = createRouter()
  app.use(router)

  router.use(
    '/api/v2/**',
    defineEventHandler({
      onRequest: [apiAuth],
      handler: useBase(
        '/api/v2',
        useRouter(routes.testRoute).handler,
      ),
    }),
  )
}
