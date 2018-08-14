const Router = require('koa-router');
const HelloController = require("./controllers/HelloController");
const {login, getUser} = require("./controllers/AuthController");

const router = new Router();

//hello world
router.get("/", (ctx) => {HelloController.sayHelloWorld(ctx)});

router.post("/login", login);
router.get("/getuser", getUser);

module.exports = router;