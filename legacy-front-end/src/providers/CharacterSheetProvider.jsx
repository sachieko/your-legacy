import { createContext, useState } from "react";

export const characterSheetContext = createContext();

export default function CharacterSheetProvider(props) {
  // Ability score state
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  const characterData = {
    strength, setStrength,
    dexterity, setDexterity,
    constitution, setConstitution,
    intelligence, setIntelligence,
    wisdom, setWisdom,
    charisma, setCharisma
  };

  return (
    <characterSheetContext.Provider value={characterData}>
      {props.children}
    </characterSheetContext.Provider>
  );
};