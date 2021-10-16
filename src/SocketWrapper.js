import App from "./App";
import { useState, useEffect } from "react";
import io from "socket.io-client";

function SocketWrapper() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5500");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return <>{socket ? <App socket={socket} /> : <h3>Waiting for socket connection</h3>}</>;
}

export default SocketWrapper;
