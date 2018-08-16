const Config = require('../config');
const KoaApp = require('./koa');
const server = require('http').createServer(KoaApp.callback());
const io = require('socket.io')(server);
const socket = require('./socket');

server.listen(Config.server.port);
socket.attachSocket(io);

console.log('Starting listening at port ' + Config.server.port);
