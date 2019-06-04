var mongo = require('mongodb');
const DB = require("../models/DB");
var uuid = require('uuid');

var strUsers = 'Users';
var db = new DB();

function CreateCollection() {
    return db.CreateCollection(strUsers);
}

function GetAll() {
    return db.GetAll(strUsers);
}

function Get(idToFind) {
    return db.Get(strUsers, { "id": Number(idToFind) });
}

function Delete(idToFind) {
    return db.Delete(strUsers, { "id": Number(idToFind) });
}

function Insert(newObj) {
    if ('_id' in newObj)
        newObj = uuid();

    return db.Insert(strUsers, newObj);
}

function InsertMany(newObjs) {
    newObjs = newObjs.map(elem => {
        if ('_id' in elem)
            elem._id = uuid();
        return elem;
    });

    return db.InsertMany(strUsers, newObjs);
}

function Update(newObj) {
    return db.Update(strUsers, { "_id": newObj._id }, newObj);
}

module.exports = {
    CreateCollection: CreateCollection,
    GetAll: GetAll,
    Get: Get,
    Delete: Delete,
    Insert: Insert,
    InsertMany: InsertMany,
    Update: Update
}