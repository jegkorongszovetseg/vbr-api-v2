import { z } from "zod";
export { vbrApiV2Routes } from "./vbr-api-v2";
import { test } from '../controllers/test';
import { Routes } from "../types";

export const testRoute = [
  {
    path: "/test",
    name: "test",
    method: 'get',
    handler: test,
    validation: {
      name:  z.string(),
      age:  z.string().optional(),
    },
  },
] as Routes[];
