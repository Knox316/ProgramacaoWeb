var express = require("express");
var router = express.Router();

const controller = require("../controllers/LoginController");

router.route("/GetAll").get(controller.GetAll);

router.route("/").get(controller.Get).post(controller.Insert);


module.exports = router;

