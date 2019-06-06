var express = require("express");
var router = express.Router();
const controller = require("../controllers/emailController");



var app = express();
app.use(express.json());

/**
 * @swagger
 * /email:
 *   post:
 *     tags:
 *       - email
 *     description: sends email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tarun
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/user'
 *     responses:
 *       200:
 *         description: Successfully send
 */
router.route("/").post(controller.SendEmail);

module.exports = router;