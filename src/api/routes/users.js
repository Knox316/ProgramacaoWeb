var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

// "/issues/id"
router.get('/', usersController.getUsers);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

router.get('/force', usersController.getForce);


// exports.GetUsers = GetUsers;
// exports.GetUsersById = GetUsersById;
module.exports = router;