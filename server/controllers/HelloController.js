const HelloModel = require("../models/HelloModel");

async function sayHelloWorld(ctx) {
  ctx.body = `Hello, ${await HelloModel.getHelloName()}!`
}

module.exports = {
  sayHelloWorld
};