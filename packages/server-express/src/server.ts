import express from "express";
// import http from "node:http";
import { listen } from "listhen";

const app = express();

// const server = http.createServer(app);

// console.log("LISTEN", app);
// app.listen(3890);
const { server } = await listen(app, { port: 3890 });

export default { app, server };
