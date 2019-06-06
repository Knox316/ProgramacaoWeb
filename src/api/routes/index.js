var express = require("express");
var router = express.Router();

/**
 * @swagger
 * definition:
 *   index:
 *     properties:
 */

/**
 * @swagger
 * /index:
 *   get:
 *     tags:
 *       - index
 *     description: app index
 *     produces:
 *       - application/json
 *     parameters:
 *           $ref: '#/definition/index'
 *     responses:
 *       200:
 *         description: Express Index
 */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

module.exports = router;