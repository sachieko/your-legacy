import { createContext, useState, useContext, useEffect } from "react";
import { AppDataContext } from "./AppDataProvider";

export const characterSheetContext = createContext();

export default function CharacterSheetProvider(props) {
  const { socket } = useContext(AppDataContext);
  const [character, setCharacter] = useState({
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
  });

  useEffect(() => {
    socket.on('character:load', data => {
      setCharacter(data.character);
    });
    
    return () => {
      socket.off('character:load');
    };
    
  }, [socket]);

  const characterData = {
    character, setCharacter
  };

  return (
    <characterSheetContext.Provider value={characterData}>
      {props.children}
    </characterSheetContext.Provider>
  );
};