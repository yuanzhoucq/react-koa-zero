const Koa = require('koa');
const router = require('./route');
const serve = require('koa-static');
const BodyParser = require('koa-bodyparser');


const app = new Koa();

app.use(BodyParser());
app.use(router.routes());
app.use(serve('../build'));

app.listen(5000);
console.log("Server started listening at 5000...");
