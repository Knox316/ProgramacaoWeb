var express = require("express");
var router = express.Router();
const controller = require("../../controllers/users.controller");


/* GET ALL USERS*/
router.get("/", controller.getUsers);

/* GET USERS BY ID */
router.get("/:id", controller.getUsersById);

module.exports = router;
