import { z } from 'zod'
import type { Routes } from '../types'

export const testRoute = [
  {
    path: '/login',
    name: 'test',
    method: 'get',
    handler: () => [],
    validation: {
      name: z.string(),
      age: z.string().optional(),
    },
  },
] as Routes[]
