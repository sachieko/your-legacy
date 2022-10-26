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

  // Character Info state

  const [characterName, setCharacterName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [background, setBackground] = useState('');
  const [race, setRace] = useState('');
  const [alignment, setAlignment] = useState('');
  const [level, setLevel] = useState(1);

  const levelUp = setLevel(prev => prev += 1);
  const levelDown = setLevel(prev => prev > 1 ? prev -= 1 : prev = 1);

  const characterData = {
    strength, setStrength,
    dexterity, setDexterity,
    constitution, setConstitution,
    intelligence, setIntelligence,
    wisdom, setWisdom,
    charisma, setCharisma,

    characterName, setCharacterName,
    characterClass, setCharacterClass,
    background, setBackground,
    race, setRace,
    alignment, setAlignment,
    level, levelUp, levelDown
  };

  return (
    <characterSheetContext.Provider value={characterData}>
      {props.children}
    </characterSheetContext.Provider>
  );
};