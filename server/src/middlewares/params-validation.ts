import { getQuery } from 'h3'
import type { H3Event } from 'h3'
import { z } from 'zod'
import type { ZodRawShape } from 'zod'
import { ParamValidationError } from '../utils/errors'
import { sendError } from '../utils/use-response'

export async function paramsValidation(event: H3Event, schema: ZodRawShape | null | undefined): Promise<void> {
  const params = getQuery(event)
  const result = z.object(schema || {}).safeParse(params)

  if (!result.success)
    sendError(event, new ParamValidationError(result.error))
}
