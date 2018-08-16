const {createReadStream} = require('fs');
const Router = require('koa-router');
const {sayHelloWorld} = require("./controllers/HelloController");
const {login, getUser} = require("./controllers/AuthController");

const router = new Router();

//hello world
router.get("/", sayHelloWorld);

router.post("/login", login);
router.get("/getuser", getUser);


//socket debug
router.get("/s", async (ctx) => {
  ctx.type = 'html';
  ctx.body = createReadStream('./socket.html');
});

module.exports = router;