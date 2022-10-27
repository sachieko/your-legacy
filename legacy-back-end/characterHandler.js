module.exports = (io, socket) => {
  const getCharacter = () => {
    socket.emit('character:load', {
      character: {
        strength: 10,
        dexterity: 11,
        constitution: 12,
        intelligence: 13,
        wisdom: 14,
        charisma: 15
      }
    });
  };

  socket.on('character:get', getCharacter);
};