var express = require("express");
var router = express.Router();
const controller = require("../../controllers/email.controller");


/* GET ALL USERS*/
router.get("/", controller.PostSendEmail);


module.exports = router;
