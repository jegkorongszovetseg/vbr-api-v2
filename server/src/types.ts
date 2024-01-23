import type { RouterMethod, App as h3App } from 'h3'
import type { Listener } from 'listhen'
import type { ZodRawShape } from 'zod'

export interface App {
  app: h3App
  server: Listener['server']
}

export interface Routes {
  path: string
  name: string
  method: RouterMethod
  handler: () => void
  validation: ZodRawShape | null
}

interface RoutesModule {
  [key: string]: Routes[]
}

export interface CreateAppOptions {
  app: () => Promise<App>
  routes: RoutesModule
  socket?: (server: App['server']) => void
  mongodb?: () => Promise<void>
}
