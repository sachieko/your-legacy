import { createContext, useState, useEffect } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

export const AppDataContext = createContext();

export default function AppDataProvider({ children }) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    socket.on('character:load', data => {
      setCharacter(data.character);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
      socket.off('character:load');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  };

  const fetchCharacter = () => {
    socket.emit('character:get');
  };

  const appData = {
    isConnected, lastPong, sendPing, fetchCharacter, character
  };

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  )
};