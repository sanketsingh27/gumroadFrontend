import { createContext, useContext, useState, useEffect } from "react";
import io from "socket.io-client";
const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("wss://agile-crag-24804.herokuapp.com/", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    console.log({ newSocket });
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
