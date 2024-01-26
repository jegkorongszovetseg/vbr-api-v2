import { defineRequestMiddleware, getHeaders } from 'h3'
import type { H3Event } from 'h3'

// import { sendError } from '../utils/use-response'
// import { AuthError } from '../utils/errors'

export const auth = defineRequestMiddleware((event: H3Event) => {
  const headers = getHeaders(event)

  // eslint-disable-next-line no-console
  console.log('auth', headers.host)
  // sendError(event, new AuthError())
})
