import { createContext } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

export const AppDataContext = createContext();

export default function AppDataProvider({ children }) {
  
  const appData = {
    socket
  };

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  )
};