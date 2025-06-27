import { Server, Socket } from "socket.io";

import http from "http";

import app from "./app";

export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
  pingInterval: 25000, // Send ping every 25 seconds
  pingTimeout: 5000, // Wait 5 seconds for pong before considering dead
  connectionStateRecovery: {
    maxDisconnectionDuration: 120000, // 2 minutes
    skipMiddlewares: true,
  },
});

io.on("connection", (socket: Socket) => {
  console.log(`${socket.id} joined`);

  socket.on("disconnecting", () => console.log(`${socket.id} left`));
});
