import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

import { NextApiResponseServerIo } from "@/types";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
  if (!res.socket.server.io) {
    const path = "/api/socket/io";
    const httpServer: NetServer = res.socket.server as any;
    
    console.log("🟢 Initializing new Socket.IO server...");

    const io = new ServerIO(httpServer, {
      path,
      cors: {
        origin: process.env.NODE_ENV === "production"
          ? "https://community-9rw3.onrender.com"
          : "http://localhost:3000", // Fixed: No need for an array here
        methods: ["GET", "POST"],
        credentials: true,
      },
      transports: ["websocket", "polling"], // 🔥 Ensures proper transport fallback
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("✅ Socket connected:", socket.id);

      socket.on("disconnect", (reason) => {
        console.log("❌ Socket disconnected:", socket.id, "Reason:", reason);
      });
    });

  } else {
    console.log("⚡ Using existing Socket.IO instance...");
  }

  res.end();
};

export default ioHandler;
