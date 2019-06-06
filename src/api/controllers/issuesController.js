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
  });
};

exports.getIssueByDate = async (req, res) => {

  var enc = await svc.getIssueByDate(req.params.date)
    .catch(err => {
      res.status(404).send(JSON.stringify(err.message));
    });
  if (enc) res.json(enc);
};