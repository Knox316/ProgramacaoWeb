const jwt = require('jsonwebtoken');
var express = require("express");
var router = express.Router();

router.post('/', function (req, res) {
    const {
        email,
        password
    } = req.body;
    User.findOne({
        email
    }, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else if (!user) {
            res.status(401)
                .json({
                    error: 'Incorrect email or password'
                });
        } else {
            user.isCorrectPassword(password, function (err, same) {
                if (err) {
                    res.status(500)
                        .json({
                            error: 'Internal error please try again'
                        });
                } else if (!same) {
                    res.status(401)
                        .json({
                            error: 'Incorrect email or password'
                        });
                } else {
                    // Issue token
                    const payload = {
                        email
                    };
                    const token = jwt.sign(payload, process.env.SECRET, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, {
                            httpOnly: true
                        })
                        .sendStatus(200);
                }
            });
        }
    });
});

module.exports = router;