const mongoose = require('mongoose');
const Config = require("../../config");
const database = Config.database;
const logger = Config.log4js.getLogger('database');

class BaseModel {
  constructor(modelName, collectionName, structure) {
    this.name = collectionName;

    mongoose.connect(database.url, {useNewUrlParser: true});
    //show connection detail
    let dbConnection = mongoose.connection;
    dbConnection.on("error", function (e) {
      console.log("connection error " + modelName + " " + e);
    });
    dbConnection.once("open", function () {
      console.log("connected to database for collection: " + collectionName);
    });

    //write logger
    this.logger = logger;

    //save mongoose schema
    const schema = new mongoose.Schema(structure);
    //create model
    this.model = mongoose.model(modelName, schema, collectionName);
  }

  static get mongoose() {
    return mongoose
  }

  // instance model
  getModel() {
    return this.model;
  }

  async getAllData() {
    try {
      return await this.model.find()
    } catch (err) {
      this.logger.debug(`Getting all data of ${this.name} failed: `, err);
      return false
    }
  }
}

module.exports = BaseModel;
