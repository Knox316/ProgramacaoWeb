// Import our User schema
const User = require('../../jwtAuth/models/Login.js');
// POST route to register a user
var express = require("express");
var router = express.Router();
router.post('/api/register', function (req, res) {
    const {
        email,
        password
    } = req.body;
    const user = new User({
        email,
        password
    });
    console.log(user);
    user.save(function (err) {
        console.log('teste2');
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    });
});




module.exports = router;