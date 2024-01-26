import type { ZodError as _ZodError } from 'zod'

export class ErrorBase<DataT = unknown> extends Error {
  statusCode = 500
  statusMessage?: string
  data?: DataT
  cause?: unknown

  constructor(error: string | _ZodError) {
    super(error = '')
    if (typeof error === 'string')
      this.statusMessage = error
  }
}

export class ParamValidationError extends ErrorBase {
  constructor(error: _ZodError) {
    // console.log(error)
    super(error)
    this.statusMessage = 'ZOD-ERROR'
  }
}

// export class AuthError extends ErrorBase {
//   constructor() {
//     super()
//     this.statusCode = 401
//     this.statusMessage = 'Auth Error'
//   }
// }
