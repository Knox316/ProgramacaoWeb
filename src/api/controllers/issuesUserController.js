var generic = require('./genericController');
const IssuesUser = require("../models/IssuesUser")

var issuesUser = new IssuesUser();


async function SendEmails(req, res) {
    issuesUser.SendEmails();
    generic.SendResponse(req, res, 'Running');
}

exports.SendEmails = SendEmails;

