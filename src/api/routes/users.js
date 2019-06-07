// var express = require("express");
// var router = express.Router();
// const controller = require("../controllers/usersController");

// router.post("/Update", controller.Update);

// router.route("/InsertMany")
//     .post(controller.InsertMany);

// router.route("/CreateCollection")
//     .post(controller.CreateCollection);

// router.route("/:idToFind")
//     .get(controller.Get)
//     .delete(controller.Delete);

// router.route("/")
//     .get(controller.GetAll)
//     .post(controller.Insert);

// module.exports = router;

var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

// "/issues"
router.get('/', usersController.getAllUsers);
router.post('/', usersController.createUser);

// "/issues/id"
router.get('/:id', usersController.getAllUsers);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

router.get('/force', usersController.getForce);


// exports.GetUsers = GetUsers;
// exports.GetUsersById = GetUsersById;
module.exports = router;