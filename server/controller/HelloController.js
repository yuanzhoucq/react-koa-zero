const HelloModel = require("../models/HelloModel");

async function getHelloName(ctx) {
  ctx.body = `Hello, ${await HelloModel.getHelloName()}!`
}

module.exports = {
  getHelloName
};