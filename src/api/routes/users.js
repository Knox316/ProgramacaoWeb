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
router.get('/', usersController.getAllIssues);
router.post('/', usersController.createIssue);

<<<<<<< HEAD
// "/issues/id"
router.get('/:id', usersController.getAllIssues);
router.put('/:id', usersController.updateIssue);
router.delete('/:id', usersController.deleteIssue);
=======
router.route("/:idToFind")
    .get(controller.Get)
    .delete(controller.Delete);
    
router.get("/FromAPI", controller.GetUsers);
router.get("/FromAPI/:idToFind", controller.GetUsersById);
>>>>>>> 09b771f5bed4a573514e6f7d1061601692a8f1a9

router.get('/force', usersController.getForce);


// exports.GetUsers = GetUsers;
// exports.GetUsersById = GetUsersById;
module.exports = router;