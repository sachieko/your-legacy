import { useContext } from "react";
import { characterSheetContext } from "../../providers/CharacterSheetProvider";
import AbilityScore from "./AbilityScore";
import './CharacterSheet.scss';

const CharacterSheet = () => {
  const { character, setCharacter } = useContext(characterSheetContext);

  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = character;
  const abilitySetter = (abilityScore, value) => {
    setCharacter( prev => ({ ...prev, [abilityScore]: value })); // Updates only the selected ability score
  };

  return (
    <>
    <div className='ability-scores'>
      <AbilityScore name='Strength' value={strength} setter={abilitySetter} />
      <AbilityScore name='Dexterity' value={dexterity} setter={abilitySetter} />
      <AbilityScore name='Constitution' value={constitution} setter={abilitySetter} />
      <AbilityScore name='Intelligence' value={intelligence} setter={abilitySetter} />
      <AbilityScore name='Wisdom' value={wisdom} setter={abilitySetter} />
      <AbilityScore name='Charisma' value={charisma} setter={abilitySetter} />
    </div>
    </>
  );
};

export default CharacterSheet;