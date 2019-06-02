var axios = require("axios");
generic = require('./genericController');
model = require("../models/usersModel")
const baseURL = "https://redmine-mock-api.herokuapp.com/api/v1/users";


var getUsersPromisse = axios.get(baseURL + "?forceMail=email@address.domain");

function GetUsers(req, res, send = true) {
    getUsersPromisse.then(data => {
        generic.SendResponse(req, res, data);
    }).catch((err) => {

    });
}

async function GetUsersById(req, res) {
    try {
        var user = await axios.get(baseURL + "/" + req.params.id)
        console.log(user.data);
        res.json(user.data);

    } catch (err) {
        console.error('Axios Error:', err)
    }
}

function InsertAllUsers(req, res) {
    getUsersPromisse.then(data => {
        model.insertAllUsers(data);
        res.json("OK");
    });
}

function GetAllUsers(res, req) {
    model.getAllUsers();
}

exports.getUsers = GetUsers;
exports.getUsersById = GetUsersById;
exports.insertAllUsers = InsertAllUsers;
exports.getAllUsers = GetAllUsers;