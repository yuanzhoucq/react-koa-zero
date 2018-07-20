const Router = require('koa-router');

const router = new Router();

//hello world
router.get("/", ctx => {
  ctx.body = "Hello, world!"
});

module.exports = router;