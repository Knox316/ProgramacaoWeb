var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');


/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *       id:
 *         type: integer
 *       login:
 *         type: string
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       mail:
 *         type: string
 *       createdon: 
 *         type: string
 *       last_login_on:
 *         type: string
 */


// "/issues/id"

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - users
 *     description: get all users from db
 *     produces:
 *       - application/json
 *     parameters:
 *           $ref: '#/definition/users'
 *     responses:
 *       200:
 *         description: Users
 */
router.get('/', usersController.getUsers);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

router.get('/force', usersController.getForce);


// exports.GetUsers = GetUsers;
// exports.GetUsersById = GetUsersById;
module.exports = router;