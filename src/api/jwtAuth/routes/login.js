var express = require("express");
var router = express.Router();
const Login = require('../../jwtAuth/models/Login.js');
//const controller = require("../controllers/LoginController");

//router.route("/api/register").get(controller.);

//router.route("/").get(controller.Get).post(controller.Insert);
//POST route to register a user
router.post('/api/register', function (req, res) {
    const {
        email,
        password
    } = req.body;
    const login = new Login({
        email,
        password
    });
    console.log(login);
    login.save(function (err) {
        console.log(err);
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    });
});




module.exports = router;