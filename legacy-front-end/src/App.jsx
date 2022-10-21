import CharacterSheet from "./components/CharacterSheet";
import CharacterSheetProvider from "./providers/CharacterSheetProvider";

const App = function() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CharacterSheetProvider>
        <CharacterSheet />
      </CharacterSheetProvider>
    </div>
  );
};

export default App;
