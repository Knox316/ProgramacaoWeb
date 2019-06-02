var axios = require("axios");
var timeout = require('connect-timeout');
generic = require('./genericController');
issuesModel = require("../models/issuesModel");
const baseURL = "https://redmine-mock-api.herokuapp.com/api/v1/issues?after=";

function getIssuesPromisse(dtmIssuesAfter) {
  return axios.get(baseURL + dtmIssuesAfter);
};

function GetAllIssues(req, res) {
  getIssuesPromisse(req.params.dtmIssuesAfter).then(data => {
    generic.SendResponse(req, res, data);
  }).catch((err) => {

  });
}

function InsertAllIssues(req, res) {
  DropCollection(req, res, (data) => {
    getIssuesPromisse(req.params.dtmIssuesAfter).then(data => {
      await(model.InsertMany(data.Issues)).then(data =>
        generic.SendResponse(req, res, data)).catch(err =>
          generic.SendResponse(req, res, err));
    });
  });
}

async function CreateCollection(req, res) {
  await (issuesModel.CreateCollection()).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function GetAll(req, res) {
  await (issuesModel.GetAll()).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function Get(req, res) {
  await (issuesModel.Get(req.params.idToFind)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function Delete(req, res) {
  await (issuesModel.Delete(req.params.idToFind)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function Insert(req, res) {
  await (issuesModel.Insert(req.body)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function InsertMany(req, res) {
  await (issuesModel.InsertMany(req.body)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function Update(req, res) {
  await (issuesModel.Update(req.body)).then(data => generic.SendResponse(req, res, data)).catch(err => generic.SendResponse(req, res, err));
}

async function DropCollection(req, res, onThen = null, onError = null) {
  await (issuesModel.DropCollection()).then(data =>
    onThen ? onThen(data) : generic.SendResponse(req, res, data)).catch(err =>
      onError ? onError(data) : generic.SendResponse(req, res, err));
}

exports.CreateCollection = CreateCollection;
exports.GetAll = GetAll;
exports.Get = Get;
exports.Insert = Insert;
exports.InsertMany = InsertMany;
exports.Update = Update;
exports.Delete = Delete;
exports.InsertAllIssues = InsertAllIssues;
exports.DropCollection = DropCollection;

