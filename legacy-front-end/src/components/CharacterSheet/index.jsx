import { useContext } from "react";
import { characterSheetContext } from "../../providers/CharacterSheetProvider";
import { AppDataContext } from "../../providers/AppDataProvider";
import AbilityScore from "./AbilityScore";
import Button from "../Button";
import TextField from "./TextField";
import './CharacterSheet.scss';

const CharacterSheet = () => {
  const { socket } = useContext(AppDataContext);
  const { character, setCharacter } = useContext(characterSheetContext);
  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    characterName,
    characterClass,
    race
   } = character;
  const abilitySetter = (abilityScore, value) => {
    setCharacter( prev => ({ ...prev, [abilityScore]: value })); // Updates only the selected ability score
  };

  const textSetter = (field, value) => {
    setCharacter( prev => ({ ...prev, [field]: value}));
  };

  const fetchCharacter = () => {
    socket.emit('character:get');
  };

  const saveCharacter = () => {
    socket.emit('character:post', character);
  };

  return (
    <>
    <div className="biography">
      <TextField onChange={textSetter} placeholder='Name' value={characterName} field={'characterName'} />
      <TextField onChange={textSetter} placeholder='Class' value={characterClass} field={'characterClass'} />
      <TextField onChange={textSetter} placeholder='Race' value={race} field={'race'} />
    </div>
    <div className='ability-scores'>
      <AbilityScore name='Strength' value={strength} setter={abilitySetter} />
      <AbilityScore name='Dexterity' value={dexterity} setter={abilitySetter} />
      <AbilityScore name='Constitution' value={constitution} setter={abilitySetter} />
      <AbilityScore name='Intelligence' value={intelligence} setter={abilitySetter} />
      <AbilityScore name='Wisdom' value={wisdom} setter={abilitySetter} />
      <AbilityScore name='Charisma' value={charisma} setter={abilitySetter} />
    </div>
    <Button onClick={fetchCharacter} text={'Load Character'} />
    <Button onClick={saveCharacter} text={'Save Character'} />
    <Button onClick={() => console.log(character)} text={'Log Char'} />
    </>
  );
};

export default CharacterSheet;