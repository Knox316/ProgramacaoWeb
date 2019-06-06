var express = require("express");
var router = express.Router();
const app = express()
var timeout = require('connect-timeout');
const controller = require("../controllers/issuesController");


/**
    issues = [
        id = Number,
        project = {
            id = Number,
            name: String
        },
        tracker = {
            id: Number,
            name: String
        },
        status = {
            id = Number,
            name = String
        },
        priority = {
            id = Number,
            name = String
        },
        author = {
            id = Number,
            name = String
        },
        assigned_to = {
            id = Number,
            name = String
        },
        subject = String,
        description = String,
        start_date = String,
        done_ratio = Number,
        closed_on = String,
        created_on = String,
        updated_on = String
 */
/**
 * @swagger
 * definition:
 *   issues:
 *     properties:
 *       total_count:
 *         type: number
 *       offset:
 *         type: number
 *       limit:
 *         type: number
 *       issues:
 *         type: array
 *         items:
 *          type:
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