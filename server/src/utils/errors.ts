import type { ZodError as _ZodError } from 'zod'

export class ErrorBase<DataT = unknown> extends Error {
  statusCode = 500
  statusMessage?: string
  data?: DataT
  cause?: unknown

  constructor(message?: string, opts: { cause?: unknown } = {}) {
    super(message, opts)
  }
}

export class ParamValidationError extends ErrorBase {
  constructor(error: _ZodError) {
    // console.log(error)
    super(error)
    this.statusMessage = 'ZOD-ERROR'
  }
}

export class AuthError extends ErrorBase {
  constructor() {
    super()
    this.statusCode = 401
    this.statusMessage = 'Auth Error'
  }
}
