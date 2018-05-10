const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connection');

  // socket.emit('newEmail', {
  //   from: 'coolkid@coolkids.com',
  //   text: 'Hello, how are you',
  //   createdAt: 123
  // });

  socket.emit('newMessage', {
    from: 'coolkid2',
    text: 'hello hello',
    createdAt: 456
  });

  socket.on('createMessage', message => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});

module.exports = { app };
