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
<<<<<<< HEAD
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
=======
}

async function GetUsersById(req, res) {
    try {
        var user = await axios.get(baseURL + "/" + req.params.id)

        generic.SendResponse(req, res, user.data);

    } catch (err) {
        console.error('Axios Error:', err)
    }
}

function InsertAllUsers(req, res) {
    getUsersPromisse.then(data => {
        await(usersModel.InsertMany(data)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
    });
}

async function CreateCollection(req, res) {
    await (usersModel.CreateCollection()).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function GetAll(req, res) {
    await (usersModel.GetAll()).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function Get(req, res) {
    await (usersModel.Get(req.params.idToFind)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function Delete(req, res) {
    await (usersModel.Delete(req.params.idToFind)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function Insert(req, res) {
    await (usersModel.Insert(req.body)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function InsertMany(req, res) {
    await (usersModel.InsertMany(req.body)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function Update(req, res) {
    await (usersModel.Update(req.body)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

exports.CreateCollection = CreateCollection;
exports.GetAll = GetAll;
exports.Get = Get;
exports.Insert = Insert;
exports.InsertMany = InsertMany;
exports.Update = Update;
exports.Delete = Delete;
exports.getUsersPromisse = getUsersPromisse;
exports.GetUsers = GetUsers;
exports.GetUsersById = GetUsersById;
>>>>>>> 09b771f5bed4a573514e6f7d1061601692a8f1a9
