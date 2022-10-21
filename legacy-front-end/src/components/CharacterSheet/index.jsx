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
    <AbilityScore value={strength} add={() => setStrength(prev => prev++)} subtract={() => setStrength(prev => prev--)}/>
    <AbilityScore value={dexterity} add={() => setDexterity(prev => prev++)} subtract={() => setDexterity(prev => prev--)}/>
    <AbilityScore value={constitution} add={() => setConstitution(prev => prev++)} subtract={() => setConstitution(prev => prev--)}/>
    <AbilityScore value={intelligence} add={() => setIntelligence(prev => prev++)} subtract={() => setIntelligence(prev => prev--)}/>
    <AbilityScore value={wisdom} add={() => setWisdom(prev => prev++)} subtract={() => setWisdom(prev => prev--)}/>
    <AbilityScore value={charisma} add={() => setCharisma(prev => prev++)} subtract={() => setCharisma(prev => prev--)}/>
    </>
  );
};

export default CharacterSheet;