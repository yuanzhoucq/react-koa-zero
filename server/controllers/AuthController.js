const {checkAuth} = require("../middleware/Auth");

const BaseController = require('./BaseController');

class AuthController extends BaseController {


  async login(ctx){
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

  async getUser(ctx, next){
    checkAuth(ctx,next);
  }

}
module.exports = new AuthController();