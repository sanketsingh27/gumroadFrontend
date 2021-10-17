import { createContext, useContext, useState, useEffect } from "react";
import io from "socket.io-client";
const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("http://localhost:5500", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    console.log({ newSocket });
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
