const log4js = require('log4js');
log4js.configure({
  appenders: {
    out: {type: 'stdout'}
  },
  categories: {
    default: {appenders: ['out'], level: 'debug'},
    database: {appenders: ['out'], level: 'debug'}
  }
});


let Config = {
  database: {
    url: "mongodb://localhost:27017/test"
  },
  log4js,
  API: {
    GoogleMapApiKey: ""
  },
  WeChat: {
    miniApp: {
      appId: "",
      appSecret: ""
    }
  }
};

module.exports = Config;