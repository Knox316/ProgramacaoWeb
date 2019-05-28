var express = require("express");
var axios = require("axios");
var router = express.Router();
const controller = require("../../controllers/users.controller");


/* GET ALL USERS*/
router.route("/", controller.getUsersById);

/* GET USERS BY ID */
router.get("/:id", controller.getUsersById);

module.exports = router;
