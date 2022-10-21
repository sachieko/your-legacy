import { useContext } from "react";
import { characterSheetContext } from "../../providers/CharacterSheetProvider";
import AbilityScore from "./AbilityScore";
import './CharacterSheet.scss';

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
    <div className='ability-scores'>
      <AbilityScore name='Strength' value={strength} setter={setStrength} />
      <AbilityScore name='Dexterity' value={dexterity} setter={setDexterity} />
      <AbilityScore name='Constitution' value={constitution} setter={setConstitution} />
      <AbilityScore name='Intelligence' value={intelligence} setter={setIntelligence} />
      <AbilityScore name='Wisdom' value={wisdom} setter={setWisdom} />
      <AbilityScore name='Charisma' value={charisma} setter={setCharisma} />
    </div>
    </>
  );
};

export default CharacterSheet;