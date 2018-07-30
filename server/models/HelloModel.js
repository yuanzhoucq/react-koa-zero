const BaseModel = require("./BaseModel");

class HelloModel extends BaseModel {
  constructor() {
    const structure = {
      name: String
    };
    super("HelloModel", "hello", structure);
  }

  async getHelloName() {
    try {
      const r = await this.model.findOne({name: "world"});
      if (!r) {
        await new this.model({name: "world"}).save();
        const r = await this.model.findOne({name: "world"});
        return r.name
      }
      else return r.name
    } catch (err) {
      this.logger.debug("GetHelloName error", err);
      return false;
    }
  }
}

module.exports = new HelloModel();
