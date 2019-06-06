// @ts-check

'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');
var repo = require('../persistance/users');
let request = require('request');
var ObjectId = require('mongoose').Types.ObjectId;
const baseUrl = "https://redmine-mock-api.herokuapp.com/api/v1/users/"
//var mapperEnc = require('../dtos/fabricaDTO');


function getFromUser(uri) {

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
/**
 * /api/v1/users/{id}?forceMail=email@address
 * ?forceMail=email@address.domain
 */
exports.getForceById = async (id) => {
    var uri = baseUrl.concat(id).concat('forceMail=email@address');
    console.log(uri);
    return await getFromUser(uri);
};

exports.getForce = async () => {
    var uri = baseUrl.concat('?forceMail=email@address.domain');
    console.log(uri);
    return await getFromUser(uri);
};

exports.getUsers = async () => {
    var all = await repo.getUsers();

    //return mapperEnc.fabricaDTO(all);
    return all;
};

function getFromCatalogo(uri) {

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


exports.createUser = async (data) => {

    var enc;
    try {
        enc = new User(data); //can throw
        var ret = await repo.createUser(enc);

        return ret;
    } catch (e) {
        throw new Error("User invalida: " + e.message);
    }
};

exports.getUserById = async (id) => {

    if (!ObjectId.isValid(id)) {
        throw new Error("Invalid ID: " + id);
    }

    var ret = await repo.getUserById(id);

    if (!ret)
        throw new Error("User com id: " + id + " não encontrada.");

    return ret;
};

exports.getUserByName = async (name) => {

    var ret = await repo.getUserByName(name);

    if (!ret)
        throw new Error("User com nome: " + name + " não encontrada.");

    return ret;
};

exports.updateUser = async (id, data) => {

    if (!ObjectId.isValid(id)) {
        throw new Error("Invalid ID: " + id);
    }

    try {
        var updated = await repo.updateUser(id, data);

        if (!updated)
            throw new Error("User com id: " + id + " não encontrada.");

        return updated;
    } catch (e) {
        throw new Error("User invalida: " + e.message);
    }
};


exports.deleteUser = async (id) => {

    if (!ObjectId.isValid(id)) {
        throw new Error("Invalid ID: " + id);
    }

    var deleted = await repo.deleteUser(id);

    if (!deleted)
        throw new Error("User com id: " + id + " não encontrada.");

    return deleted;
};