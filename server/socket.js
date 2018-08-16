const {notification} = require('./helpers/EventListeners');

function SocketHandler(socket) {
  socket.emit('chat message', 'bienvenue');
  socket.on('chat message', data => {
    console.log(`#### Chat messsage "${data}" received. ####`);
    socket.emit('chat message', data);
  });
}

function attachSocket(io) {
  io.on('connection', SocketHandler);
}

module.exports = {
  attachSocket
};
