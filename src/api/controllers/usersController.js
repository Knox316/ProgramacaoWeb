// @ts-check

'use strict';
var svc = require('../services/users');

exports.getAllUsers = async (req, res) => {
    res.json(await svc.getUsers());
};


exports.createUser = async (req, res) => {

    let issue = await svc.createUser(req.body)
        .catch(err => {
            res.status(404).send(JSON.stringify(err.message));
        });

    if (issue) res.json({
        message: "Issue criada.",
        Issue: issue
    });
};



exports.getUserById = async (req, res) => {

    var enc = await svc.getUserById(req.params.id)
        .catch(err => {
            res.status(404).send(JSON.stringify(err.message));
        });
    if (enc) res.json(enc);
};


exports.updateUser = async (req, res) => {

    var enc = await svc.updateUser(req.params.id, req.body)
        .catch(err => {
            res.status(404).send(JSON.stringify(err.message));
        });

    if (enc) res.json({
        message: "Issue atualizada!",
        Atualizada: enc
    });
};


exports.deleteUser = async (req, res) => {

    var enc = await svc.deleteUser(req.params.id)
        .catch(err => {
            res.status(404).send(JSON.stringify(err.message));
        });

    if (enc) res.json({
        message: 'Issue apagada!',
        Apagada: enc
    });
};

exports.getForce = async (req, res) => {
    res.json(await svc.getForce());
};