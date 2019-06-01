var mongo = require('mongodb');
const DB = require("../models/DB");

var strUsers = 'Users';
var strDbName = "mydb";
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/" + strDbName;
var db = new DB();

function CreateCollection() {
    db.Connect((err, dbo) => {
        dbo.createCollection(strUsers, function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
}

function InsertAllUsers(newUsers) {
    db.Connect((err, dbo) => {
        dbo.collection(strUsers).insertMany(newUsers.data, function (err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
        });
    });
}

function GetAllUsers() {
    db.Connect((err, dbo) => {
        dbo.collection(strUsers).find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
        });

    });
}

module.exports = {
    insertAllUsers: InsertAllUsers,
    getAllUsers: GetAllUsers
}