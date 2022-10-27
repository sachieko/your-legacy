import { useState, useEffect, useContext } from 'react';
import CharacterSheet from "./components/CharacterSheet";
import CharacterSheetProvider from "./providers/CharacterSheetProvider";
import { AppDataContext } from './providers/AppDataProvider';

const App = function() {
  const { socket } = useContext(AppDataContext);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

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

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, [socket]);

  const sendPing = () => {
    socket.emit('ping');
  };

  const fetchCharacter = () => {
    socket.emit('character:get');
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CharacterSheetProvider>
        <CharacterSheet />
      </CharacterSheetProvider>
      <button onclick={fetchCharacter}>Load Character</button>
      <p>Connected: { '' + isConnected }</p>
      <p>Last Pong: { lastPong || '-' }</p>
      <button onClick={sendPing}>Send ping</button>
    </div>
  );
};

export default App;
