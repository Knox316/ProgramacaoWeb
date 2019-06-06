var axios = require("axios");
var generic = require('./genericController');
var usersModel = require("../models/usersModel")
const baseURL = "https://redmine-mock-api.herokuapp.com/api/v1/users";

var getUsersPromisse = axios.get(baseURL + "?forceMail=email@address.domain");

function GetUsers(req, res) {
    getUsersPromisse.then(data => {
        generic.SendResponse(req, res, data);
    }).catch((err) => {

    });
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