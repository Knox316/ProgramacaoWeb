var mongo = require('mongodb');
const DB = require("../models/DB");
var uuid = require('uuid');
var strIssues = 'Issues';
var db = new DB();

function CreateCollection() {
    return db.CreateCollection(strIssues);
}

function GetAll() {
    return db.GetAll(strIssues);
}

function Get(idToFind) {
    return db.Get(strIssues, { "id": Number(idToFind) });
}

function Delete(idToFind) {
    return db.Delete(strIssues, { "id": Number(idToFind) });
}

function Insert(newObj) {
    if ('_id' in newObj)
        newObj = uuid();

    return db.Insert(strIssues, newObj);
}

function InsertMany(newObjs) {
    newObjs = newObjs.map(elem => {
        if ('_id' in elem)
            elem._id = uuid();
        return elem;
    });

    return db.InsertMany(strIssues, newObjs);
}

function Update(newObj) {
    return db.Update(strIssues, { "_id": newObj._id }, newObj);
}

function DropCollection() {
    return db.DropCollection(strIssues);

}
module.exports = {
    CreateCollection: CreateCollection,
    GetAll: GetAll,
    Get: Get,
    Delete: Delete,
    Insert: Insert,
    InsertMany: InsertMany,
    Update: Update,
    DropCollection: DropCollection
}