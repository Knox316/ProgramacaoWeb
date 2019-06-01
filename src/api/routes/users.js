var express = require("express");
var router = express.Router();
const controller = require("../controllers/usersController");


/* GET ALL USERS*/
router.get("/", controller.getUsers);

router.get("/getAllUsers", controller.getAllUsers);

/* GET USERS BY ID */
router.get("/:id", controller.getUsersById);

router.put("/insertAllUsers", controller.insertAllUsers);

module.exports = router;

