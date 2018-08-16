const Koa = require('koa');
const session = require('koa-session');
const mount = require('koa-mount');
const router = require('./route');
const serve = require('koa-static');
const BodyParser = require('koa-bodyparser');
const Config = require("../config");

const app = new Koa();
app.keys = ['react-koa-zero-secret'];
const SESSION_CONFIG = {
  key: 'react-koa-zero-secret', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true,
  /** (boolean) can overwrite or not (default true) */
  httpOnly: true,
  /** (boolean) httpOnly or not (default true) */
  signed: true,
  /** (boolean) signed or not (default true) */
  rolling: false,
  /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(SESSION_CONFIG, app));

app.use(BodyParser());
app.use(router.routes());
app.use(mount("/admin", serve('../build')));

module.exports = app;
