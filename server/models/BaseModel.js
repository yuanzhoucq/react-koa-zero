const mongoose = require('mongoose');
const Config = require("../../config");
const database = Config.database;
const logger = Config.log4js.getLogger('database');

class BaseModel {
  //static mongoose = mongoose;
  constructor(modelName, collectionName, structure) {
    mongoose.connect(database.url, {useNewUrlParser: true});

    //show connection detail
    let dbConnection = mongoose.connection;
    dbConnection.on("error", function (e) {
      console.log("connection error " + modelName + " " + e);
    });
    dbConnection.once("open", function () {
      console.log("connected to database collection: " + collectionName);
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
    let data;
    try {
      data = await this.model.find();
      return data;
    } catch (err) {
      this.logger.debug("finding all data failed : " + this.name, err);
      return false;
    }
  }
}

module.exports = BaseModel;
