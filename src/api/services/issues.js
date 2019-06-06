// @ts-check

'use strict';
var mongoose = require('mongoose');
let request = require('request');

var Issue = mongoose.model('Issue');
var repo = require('../persistance/issues');
var ObjectId = require('mongoose').Types.ObjectId;
const baseURL = "https://redmine-mock-api.herokuapp.com/api/v1/";

function getFromIssue(uri) {

    return new Promise((resolve, reject) => {
        request.get(uri, {
            rejectUnauthorized: false,
            json: true
        }, (err, res, body) => {
            if (err) return reject(err);

            try {
                resolve(body);
            } catch (e) {
                reject(e);
            }
        });
    });
}
//var mapperEnc = require('../dtos/fabricaDTO');

exports.getIssueByDate = async (date) => {
    var uri = baseURL.concat('issues?after=').concat(date);
    console.log(uri);
    return await getFromIssue(uri);
};

exports.getIssues = async () => {
    var all = await repo.getIssues();

    //return mapperEnc.fabricaDTO(all);
    return all;
};


exports.createIssue = async (data) => {

    var enc;
    try {
        enc = new Issue(data); //can throw
        var ret = await repo.createIssue(enc);

        return ret;
    } catch (e) {
        throw new Error("User invalida: " + e.message);
    }
};

exports.getIssueById = async (id) => {

    if (!ObjectId.isValid(id)) {
        throw new Error("Invalid ID: " + id);
    }

    var ret = await repo.getIssueById(id);

    if (!ret)
        throw new Error("User com id: " + id + " não encontrada.");

    return ret;
};

exports.updateIssue = async (id, data) => {

    if (!ObjectId.isValid(id)) {
        throw new Error("Invalid ID: " + id);
    }

    try {
        var updated = await repo.updateIssue(id, data);

        if (!updated)
            throw new Error("User com id: " + id + " não encontrada.");

        return updated;
    } catch (e) {
        throw new Error("User invalida: " + e.message);
    }
};


exports.deleteIssue = async (id) => {

    if (!ObjectId.isValid(id)) {
        throw new Error("Invalid ID: " + id);
    }

    var deleted = await repo.deleteIssue(id);

    if (!deleted)
        throw new Error("User com id: " + id + " não encontrada.");

    return deleted;
};