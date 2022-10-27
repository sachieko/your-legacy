import { useContext } from 'react';
import CharacterSheet from "./components/CharacterSheet";
import CharacterSheetProvider from "./providers/CharacterSheetProvider";
import { AppDataContext } from './providers/AppDataProvider';

const App = function() {
  const { isConnected, lastPong, fetchCharacter, sendPing } = useContext(AppDataContext);

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
