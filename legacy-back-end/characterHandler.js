module.exports = (io, socket) => {

  const charPlaceholder = {
    character: {
      strength: 10,
      dexterity: 11,
      constitution: 12,
      intelligence: 13,
      wisdom: 14,
      charisma: 15,
      characterName: 'Yusei Tachibana',
      characterClass: 'Fighter',
      race: 'Human',
    }
  };
  
  const getCharacter = () => { // Loads the character from the server. Placeholder character
    socket.emit('character:load', charPlaceholder);
  };

  socket.on('character:get', getCharacter);

  const saveCharacter = (characterData) => {
    // make call to database with character data
    charPlaceholder.character = { ...characterData };
    console.log(charPlaceholder.character);
    // Promise resolves to success or error
  };

  socket.on('character:post', saveCharacter);
};