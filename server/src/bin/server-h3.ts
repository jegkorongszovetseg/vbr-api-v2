import process from 'node:process'
import { createApp, toNodeListener } from 'h3'
import { listen } from 'listhen'
import type { App } from '../types'

async function createAppServer(): Promise<App> {
  const app = createApp()

  // console.log('process.env.SERVER_PORT', process.env.SERVER_PORT)
  const { server } = await listen(toNodeListener(app), {
    port: process.env.SERVER_PORT,
  })

  return {
    app,
    server,
  }
}

export default createAppServer
