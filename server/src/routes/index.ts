export { vbrApiV2Routes } from "./vbr-api-v2";
import { test } from '../controllers/test';
import { Routes } from "../types";

export const testRoute = [
  {
    path: "/test",
    name: "test",
    method: 'get',
    handler: test,
    validation: null,
  },
] as Routes[];
