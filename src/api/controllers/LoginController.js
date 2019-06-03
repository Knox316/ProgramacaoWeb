var generic = require('./genericController');
const Login = require("../models/Login")

var login = new Login();

async function Get(req, res) {
    await (login.Get(req.body)).then(
        data => generic.SendResponse(req, res, data && data.length > 0 ? data : "Login Not Found")).catch(
            err => generic.SendResponse(req, res, err));
}

async function Insert(req, res) {
    await (login.Insert(req.body)).then(
        data => generic.SendResponse(req, res, data)).catch(
            err => generic.SendResponse(req, res, err));
}

async function GetAll(req, res) {
    await (login.GetAll()).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

exports.Get = Get;
exports.Insert = Insert;
exports.GetAll = GetAll;
