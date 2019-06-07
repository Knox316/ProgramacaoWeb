// @ts-check
const request = require('request');

const FetchIssue = require('../models/FetchIssue');
let repo = require('../db/issues');
const {
  ObjectId
} = require('mongoose').Types;

const baseURL = 'https://redmine-mock-api.herokuapp.com/api/v1/';

// const baseUrl = "https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00"
function getFromIssue(uri) {
  return new Promise((resolve, reject) => {
    request.get(
      uri, {
        rejectUnauthorized: false,
        json: true,
      },
      (err, res, body) => {
        if (err) return reject(err);
        try {
          resolve(body);
        } catch (e) {
          reject(e);
        }
      },
    );
  });
}
// var mapperEnc = require('../dtos/fabricaDTO');

exports.getIssueByDate = async (date) => {
  const uri = baseURL.concat('issues?after=').concat(date);
  return await getFromIssue(uri);
};

exports.createIssue = async (data) => {
  let enc;
  try {
    enc = new FetchIssue(data); // can throw
    const ret = await repo.createIssue(enc);
    return ret;
  } catch (e) {
    throw new Error(`User invalida: ${e.message}`);
  }
};