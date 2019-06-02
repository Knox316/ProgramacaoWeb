var express = require("express");
var router = express.Router();
const controller = require("../controllers/usersController");

router.post("/Update", controller.Update);

router.route("/InsertMany").post(controller.InsertMany);

router.route("/CreateCollection").post(controller.CreateCollection);

router.route("/:idToFind").get(controller.Get).delete(controller.Delete);

router.route("/").get(controller.GetAll).post(controller.Insert);

module.exports = router;
