// Import our User schema
const Login = require('../models/Login');

// POST route to register a user
function Login(req, res) {
    const {
        email,
        password
    } = req.body;
    const login = new Login({
        email,
        password
    });
    login.save(function (err) {
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    });
};

module.exports = {
    Login: login
}