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
    
    // Create Socket.IO server with explicit cors configuration
    const io = new ServerIO(httpServer, {
      path: path,
      addTrailingSlash: false, // No need for ts-ignore with proper typing
      cors: {
        origin: process.env.NODE_ENV === 'production' 
          ? false // Disable CORS in production
          : ["http://localhost:3000"], // Allow localhost in development
        methods: ["GET", "POST"],
        credentials: true
      }
    });
    
    // Store the Socket.IO instance on the server
    res.socket.server.io = io;
    
    // Set up your socket event handlers here
    io.on("connection", (socket) => {
      console.log("Socket connected:", socket.id);
      
      // Your socket event handlers...
      
      socket.on("disconnect", () => {
        console.log("Socket disconnected:", socket.id);
      });
    });
  }

  res.end();
}

export default ioHandler;