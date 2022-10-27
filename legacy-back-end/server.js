const dotenv = require('dotenv');
dotenv.config();
const { Server } = require('socket.io');
const app = require('express')();
const httpServer = require('http').createServer(app);
const bcrypt = require('bcrypt');
const options = {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
};
const io = require('socket.io')(httpServer, options);

const characterHandlers = require('./characterHandler');

io.on('connection', socket => {
  console.log('client connected at:', socket.id);

  socket.on('ping', () => {
    socket.emit('pong');
  });

  characterHandlers(io, socket);

  socket.on('disconnect', reason => {
    console.log(`${socket.id} disconnected. Reason: `, reason);
  });

});

httpServer.listen(process.env.PORT, err => {
  if (err) {
    console.log('Error: ', err);
  }
  console.log(`Server listening on port: ${process.env.PORT}`);
});