const issuesController = require("../controllers/issuesController");
const usersController = require("../controllers/usersController.js");
// var DB = require("../models/DB");
var Email = require("../models/Email");
const issuesServices = require('../services/issues');
let usersServices = require('../services/users');

class IssuesUser {
    constructor(issueId, userId, review) {
        this.IssueId = issueId;
        // this.db = new DB();
        this.email = new Email();
        this.strIssuesUser = "IssuesUser";
    }

    SendEmails() {
        let self = this;

        Promise.all([issuesServices.getIssues(), usersServices.getUsers()]).then(values => {
            var issues = values[0].data.issues;
            var users = values[1].data;

            issues.forEach(function (issue) {
                self.user = users.filter((user) => { return user.id == issue.assigned_to.id; });

                self.email.Email.SendEmail(user.mail);
            });
        })

    }
}

module.exports = IssuesUser;