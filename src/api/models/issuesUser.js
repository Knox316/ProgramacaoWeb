class IssuesUser {
    constructor(issueId, userId, review) {
        this.IssueId = issueId;
        this.UserId = userId;
        this.Review = review;
        this.db = new DB();
        this.strIssuesUser = "IssuesUser";
    }

    InsertReview() {
        this.db.Get(this.strIssuesUser, { IssueId: this.IssueId, UserId: this.userId }).then(data => {
            if (data)
                generic.SendResponse(req, res, { Status: "This Issue was already reviewed" });
            else
                db.Insert(strIssues, {
                    IssueId: this.IssueId,
                    UserId: this.UserId,
                    Review = this.review
                });
        }).catch((err) => {

        });;
    }

    SendEmails(issues) {
        issues.forEach(element => {

        });
    }
}