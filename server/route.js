const Router = require('koa-router');
const {sayHelloWorld} = require("./controller/HelloController");

const router = new Router();

//hello world
router.get("/", sayHelloWorld);

module.exports = router;