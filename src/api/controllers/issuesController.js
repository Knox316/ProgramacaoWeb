// @ts-check

'use strict';
var svc = require('../services/issues');

exports.getAllIssues = async (req, res) => {
  res.json(await svc.getIssues());
};


exports.createIssue = async (req, res) => {

  let issue = await svc.createIssue(req.body)
    .catch(err => {
      res.status(404).send(JSON.stringify(err.message));
    });

  if (issue) res.json({
    message: "Issue criada.",
    Issue: issue
  });
};



exports.getIssueById = async (req, res) => {

  var enc = await svc.getIssueById(req.params.id)
    .catch(err => {
      res.status(404).send(JSON.stringify(err.message));
    });
  if (enc) res.json(enc);
};


exports.updateIssue = async (req, res) => {

  var enc = await svc.updateIssue(req.params.id, req.body)
    .catch(err => {
      res.status(404).send(JSON.stringify(err.message));
    });

  if (enc) res.json({
    message: "Issue atualizada!",
    Atualizada: enc
  });
};


exports.deleteIssue = async (req, res) => {

  var enc = await svc.deleteIssue(req.params.id)
    .catch(err => {
      res.status(404).send(JSON.stringify(err.message));
    });

  if (enc) res.json({
    message: 'Issue apagada!',
    Apagada: enc
  }); <<
  << << < HEAD
};

===
=== =
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
exports.GetAllIssues = GetAllIssues;
exports.SendEmailIssues = SendEmailIssues;
exports.getIssuesPromisse = getIssuesPromisse; >>>
>>> > 09 b771f5bed4a573514e6f7d1061601692a8f1a9


exports.getIssueByDate = async (req, res) => {

  var enc = await svc.getIssueByDate(req.params.date)
    .catch(err => {
      res.status(404).send(JSON.stringify(err.message));
    });
  if (enc) res.json(enc);
};