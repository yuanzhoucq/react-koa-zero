const BaseModel = require("./BaseModel");

class AccessTokenModel extends BaseModel {
  constructor() {
    const structure = {
      name: String,
      accessToken: String,
      expireTime: Number,
      tokenType: String,
      scope: String
    };
    super("AccessTokenModel", "accesstokens", structure);
  }
}

module.exports = new AccessTokenModel();
