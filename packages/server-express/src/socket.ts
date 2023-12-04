import { Server } from "socket.io";
import { App } from "./types";

export default function useSocket(server: App['server']): void {
  const io = new Server(server, {
    cors: {
      origin: process.env.SITE_URL,
      methods: ["GET", "POST"],
      allowedHeaders: ["x-api-key"],
      credentials: true,
    },
  });

  io.of("/").on("connection", (socket) => {
    console.log("Socket connection:", socket.id);
  });
}
