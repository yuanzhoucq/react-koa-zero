const EventEmitter = require('events');

class Notification extends EventEmitter {
}

const notification = new Notification();

module.exports = {
  notification
};