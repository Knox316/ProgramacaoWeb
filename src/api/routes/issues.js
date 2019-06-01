var express = require("express");
var router = express.Router();
const controller = require("../controllers/issuesController");
/* GET ALL ISSUES */
router
  .route('/')
  .get(controller.getAllIssues);
  
/* GET ALL ISSUES BY ID */
router
  .route("/:id")
  .get(controller.getAllIssuesById);

module.exports = router;
