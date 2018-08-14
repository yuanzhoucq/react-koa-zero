"use strict";
/**
 * Base Controller
 */

class BaseController {
  /**
   * constructor
   * @param model
   */
  constructor(model) {
    this.iModel = model;
  }

  /**
   * get all data of the requested model
   * @param ctx
   * @returns {Promise<void>}
   */
  async getAll(ctx) {
    const data = await this.iModel.getAllData();
    if (!data || data.length === 0) {
      ctx.throw(404, "There aren't any data or database error");
      return;
    }

    ctx.body = data;

  }

  /**
   * @param model
   */
   setModel(model) {
    this.iModel = model;
  }
}

module.exports = BaseController;