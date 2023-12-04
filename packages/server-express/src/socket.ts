import { Server } from 'socket.io';

export default function useSocket(server) {
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
