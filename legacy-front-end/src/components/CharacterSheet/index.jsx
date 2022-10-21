import { useContext } from "react";
import { characterSheetContext } from "../../providers/CharacterSheetProvider";
import AbilityScore from "./AbilityScore";

const CharacterSheet = () => {
  const {
    strength, setStrength,
    dexterity, setDexterity,
    constitution, setConstitution,
    intelligence, setIntelligence,
    wisdom, setWisdom,
    charisma, setCharisma

  } = useContext(characterSheetContext);
  return (
    <>
    <AbilityScore name='Strength' value={strength} add={setStrength} subtract={setStrength}/>
    <AbilityScore name='Dexterity' value={dexterity} add={setDexterity} subtract={setDexterity}/>
    <AbilityScore name='Constitution' value={constitution} add={setConstitution} subtract={setConstitution}/>
    <AbilityScore name='Intelligence' value={intelligence} add={setIntelligence} subtract={setIntelligence}/>
    <AbilityScore name='Wisdom' value={wisdom} add={setWisdom} subtract={setWisdom}/>
    <AbilityScore name='Charisma' value={charisma} add={setCharisma} subtract={setCharisma}/>
    </>
  );
};

export default CharacterSheet;