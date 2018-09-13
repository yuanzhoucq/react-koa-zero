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
  server: {
    port: 5000
  },
  database: {
    url: "mongodb://192.168.1.200:27017/test"
  },
  log4js,
  API: {
    GoogleMapApiKey: "",
    TencentMapApiKey: "",
  },
  WeChat: {
    miniApp: {
      appId: "",
      appSecret: "",
      templateID: ""
    }
  }
};

if (process.env.NODE_ENV === "production") {
  Config.database.url = "";
  Config.server.port = 5000
}

module.exports = Config;