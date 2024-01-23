import process from 'node:process'
import { Server } from 'socket.io'
import type { App } from '../types'

export default function (server: App['server']): void {
  const io = new Server(server, {
    cors: {
      origin: process.env.SITE_URL,
      methods: ['GET', 'POST'],
      allowedHeaders: ['x-api-key'],
      credentials: true,
    },
  })
  // console.log(io, typeof io)

  io.of('/').on('connection', (socket) => {
    // eslint-disable-next-line no-console
    console.log('Socket connection:', socket.id)
  })
}
