var express = require("express");
var router = express.Router();
const app = express()
var timeout = require('connect-timeout');
const controller = require("../controllers/issuesController");

router.post("/InsertAllIssues/:dtmIssuesAfter", (req, res) => { SetTimeout(req, res, controller.InsertAllIssues) });

router.post("/Update", controller.Update);

router.route("/InsertMany").post(controller.InsertMany);

router.route("/CreateCollection").post(controller.CreateCollection);

router.route("/GetAllIssues/:dtmIssuesAfter").get(controller.GetAllIssues);

router.route("/SendEmailIssues").get(controller.SendEmailIssues);

router.route("/:idToFind").get(controller.Get).delete(controller.Delete);

router.route("/").get(controller.GetAll).post(controller.Insert);

function SetTimeout(req, res, action) {
    setTimeout(() => {
        action(req, res)
    }, 180000); //ms
}
module.exports = router;

