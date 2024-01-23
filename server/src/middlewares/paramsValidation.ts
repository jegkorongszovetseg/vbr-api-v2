import { createError, getQuery } from 'h3'
import type { H3Event } from 'h3'
import { z } from 'zod'
import type { ZodRawShape } from 'zod'

export async function paramsValidation(event: H3Event, schema: ZodRawShape | null): Promise<void> {
  const params = getQuery(event)
  const result = z.object(schema || {}).safeParse(params)

  if (!result.success)
  // throw result.error.issues
  {
    throw createError({
      status: 500,
      message: 'Fatal error',
      fatal: true,
      data: { issues: result.error.issues },
    })
  }
}
