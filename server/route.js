const Router = require('koa-router');
const {getHelloName} = require("./controller/HelloController");

const router = new Router();

//hello world
router.get("/", getHelloName);

module.exports = router;