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
        const n = await new this.model({name: "world"});
        await n.save();
        return await this.model.findOne({name: "world"}).name
      }
      else return r.name
    } catch (err) {
      this.logger.debug("GetHelloName error", err);
      return false;
    }
  }
}

module.exports = new HelloModel();
