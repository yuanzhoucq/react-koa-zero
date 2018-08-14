const HelloModel = require("../models/HelloModel");


const BaseController = require('./BaseController');

class HelloController extends BaseController {
	async sayHelloWorld(ctx) {
 		ctx.body = `Hello, ${await HelloModel.getHelloName()}!`
 		//ctx.body = "Hello";
	}

}
module.exports = new HelloController();