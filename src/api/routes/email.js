var express = require("express");
var router = express.Router();
const controller = require("../controllers/emailController");



var app = express();
app.use(express.json());

/* GET ALL USERS*/
router.route("/").post(controller.SendEmail);

module.exports = router;