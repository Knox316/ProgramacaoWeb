var express = require("express");
var router = express.Router();
const app = express()
var timeout = require('connect-timeout');
const controller = require("../controllers/issuesController");

/**
 * @swagger
 * definition:
 *   issues:
 *     properties:
 *       after:
 */

/**
 * @swagger
 * /issues/InsertAllIssues/:dtmIssuesAfter:
 *   post:
 *     tags:
 *       - issues
 *     description: sends gets issues after date
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: dtmIssuesAfter
 *         description: user object
 *         in: body
 *         required: true 
 *         schema:
 *           $ref: '#/definition/email'
 *     responses:
 *       200:
 *         description: Successfully send
 */
router.post("/InsertAllIssues/:dtmIssuesAfter", (req, res) => {
    SetTimeout(req, res, controller.InsertAllIssues)
});

router.post("/Update", controller.Update);

router.route("/InsertMany")
    .post(controller.InsertMany);

router.route("/CreateCollection")
    .post(controller.CreateCollection);

router.route("/:idToFind")
    .get(controller.Get)
    .delete(controller.Delete);

router.route("/")
    .get(controller.GetAll)
    .post(controller.Insert);

function SetTimeout(req, res, action) {
    setTimeout(() => {
        action(req, res)
    }, 180000); //ms
}
module.exports = router;