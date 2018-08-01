// Config file for pm2
// Reference: https://pm2.io/doc/en/runtime/guide/ecosystem-file/

module.exports = {
  apps: [{
    name: "app",
    script: "./koa.js",
    env: {
      NODE_ENV: "production",
    }
  }]
};
