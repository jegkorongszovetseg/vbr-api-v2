import type { Express } from "express";

export function routes(router: Express) {
  router.get("/", (req, res) => {
    res.send("Hello World!!" + Math.random());
  });
}
