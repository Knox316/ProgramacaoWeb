var express = require("express");
var router = express.Router();
const controller = require("../controllers/emailController");

/**
 * @swagger
 * definition:
 *   email:
 *     properties:
 *       from:
 *         type: string
 *       to:
 *         type: string
 *       subject:
 *         type: string
 *       html:
 *         type: string
 */

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
 *       - name: email
 *         description: user object
 *         in: body
 *         required: true 
 *         schema:
 *           $ref: '#/definition/email'
 *     responses:
 *       200:
 *         description: Successfully send
 */
router.route("/")
    .post(controller.SendEmail);

module.exports = router;