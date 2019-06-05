var express = require("express");
var router = express.Router();
const controller = require("../controllers/issuesUserController");

router.route("/").get(controller.SendEmails);

module.exports = router;

