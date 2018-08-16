// Config file for pm2
// Reference: https://pm2.io/doc/en/runtime/guide/ecosystem-file/

module.exports = {
  apps: [{
    name: "app",
    script: "./server.js",
    env: {
      NODE_ENV: "production",
    }
  }]
};
