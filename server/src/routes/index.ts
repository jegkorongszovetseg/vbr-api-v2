import express from "express";
import type { Express } from "express";

export const router = express.Router() as Express;

router.get("/", (req, res) => {
  res.send("Hello World!!" + Math.random());
});
