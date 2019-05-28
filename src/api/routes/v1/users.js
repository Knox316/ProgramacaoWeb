var express = require("express");
var axios = require("axios");
var router = express.Router();
const controller = require("../../controllers/users.controller");


/* GET ALL USERS*/
router
  .route("/")
  .get(controller.getUsersById);

/* GET USERS BY ID */
router
  .get("/:id")
  .get(controller.getUsersById);

module.exports = router;
