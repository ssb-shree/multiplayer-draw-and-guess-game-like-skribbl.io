"use client";
import CollectUserDetails from "@/components/home-page/CollectUserDetails";
import DrawingRoom from "@/components/main-game/DrawingRoom";

import useUserStore from "@/store/user";

import { useEffect, useRef } from "react";

import { io } from "socket.io-client";

const Homepage = () => {
  const { user } = useUserStore();

  const socketRef = useRef(null);

  useEffect(() => {
    const handleSocketError = (err) => {
      console.error("Socket error:", err.message || err);
      toast.custom(
        toastMessage(false, "Connection failed - trying to reconnect...")
      );
    };

    const connectSocket = async () => {
      if (!socketRef.current) {
        const socket = await io("http://localhost:8080", {
          "force new connection": true,
          reconnectAttempt: "Infinity",
          timeout: 10000,
          transports: ["websocket"],
        });
        socketRef.current = socket;

        socket.on("connect-error", handleSocketError);
        socket.on("connect-failed", handleSocketError);
      }
    };

    connectSocket();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, []);

  return (
    <main className="w-screen h-screen">
      {user?.inRoom ? <DrawingRoom /> : <CollectUserDetails />}
    </main>
  );
};

export default Homepage;
