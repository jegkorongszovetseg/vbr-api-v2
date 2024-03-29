import { z } from 'zod'
import { test } from '../controllers/test'
import type { Routes } from '../types'

export { vbrApiV2Routes } from './vbr-api-v2'

export const testRoute = [
  {
    path: '/test',
    name: 'test',
    method: 'get',
    handler: test,
    validation: {
      name: z.string().trim().min(1),
      age: z.string().optional(),
    },
  },
] as Routes[]
