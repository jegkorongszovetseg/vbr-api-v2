import { defineRequestMiddleware, getHeaders } from 'h3'
import type { H3Event } from 'h3'

export const apiAuth = defineRequestMiddleware((event: H3Event) => {
  const headers = getHeaders(event)
  console.log(headers.host)
})
