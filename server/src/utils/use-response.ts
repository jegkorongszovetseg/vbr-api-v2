import { sendError as h3SendError } from 'h3'
import type { H3Event } from 'h3'

export function sendData() {

}

export function sendError(event: H3Event, error: Error) {
  h3SendError(event, error)
}
