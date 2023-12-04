import type { Express } from "express";

// export const router = express.Router() as Express;

// router.get("/", function (req, res) {
//   res.send("Hello World!!" + Math.random());
// });

// export default router;

export function routes(router: Express) {
  router.get("/", (req, res) => {
    res.send("Hello World!!" + Math.random());
  });
}
