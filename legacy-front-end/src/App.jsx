import CharacterSheet from "./components/CharacterSheet";
import CharacterSheetProvider from "./providers/CharacterSheetProvider";

const App = function() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterSheetProvider>
          <CharacterSheet />
        </CharacterSheetProvider>
      </header>
    </div>
  );
};

export default App;
