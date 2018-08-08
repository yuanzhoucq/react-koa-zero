const {checkAuth} = require("../middleware/Auth");

async function login(ctx) {
  const {username, password} = ctx.request.body;
  if (username === "hello" && password === "world") {
    ctx.session.userrole = "admin";
    ctx.body = {userRole: "admin"};
  }
  else {
    ctx.session.userrole = "guest";
    ctx.body = {userRole: "guest"}
  }
}

module.exports = {
  login,
  getUser: checkAuth
};