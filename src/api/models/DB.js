var mongo = require('mongodb');

class DB {

    constructor() {
        this.strDbName = "mydb";
        this.MongoClient = mongo.MongoClient
        this.url = "mongodb://localhost:27017/" + this.strDbName;
    };

    /**
     * Builds a connection to DataBase
     * @param {*} callback (err, dbo)=>{}
     */
    Connect(callback) {
        this.MongoClient.connect(this.url, { native_parser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            callback(err, dbo)
        });
    }

    CreatDb() {
        this.MongoClient.connect(this.url, { native_parser: true }, function (err, db) {
            if (err) throw err;
            console.log("Database created!");
            db.close();
        });
    }

    CreateCollection(strModelName) {
        return new Promise((resolve, reject) => {
            this.Connect((err, dbo) => {
                if (err) reject(err);
                dbo.createCollection(strModelName, function (err, res) {
                    if (err) throw err;
                    resolve({ Status: "Collection created" });
                });
            });
        });
    }

    Delete(strModelName, query) {
        return new Promise((resolve, reject) => {
            this.Connect((err, dbo) => {
                if (err) reject(err);
                dbo.collection(strModelName).deleteOne(query, function (err, result) {
                    if (err) throw err;
                    resolve(result);
                });
            });
        });
    }

    Get(strModelName, query) {
        return new Promise((resolve, reject) => {
            this.Connect((err, dbo) => {
                if (err) reject(err);
                dbo.collection(strModelName).find(query).toArray(function (err, result) {
                    if (err) throw err;
                    resolve(result);
                });
            });
        });
    }

    GetAll(strModelName) {
        return new Promise((resolve, reject) => {
            this.Connect((err, dbo) => {
                if (err) reject(err);
                dbo.collection(strModelName).find({}).toArray(function (err, result) {
                    if (err) throw err;
                    resolve(result);
                });
            });
        });
    }

    Insert(strModelName, newModel) {
        return new Promise((resolve, reject) => {
            this.Connect((err, dbo) => {
                if (err) reject(err);
                dbo.collection(strModelName).insertOne(newModel, function (err, res) {
                    if (err) throw err;
                    resolve({ Status: "Sucess" });
                });
            });
        });
    }

    InsertMany(strModelName, newModels) {
        return new Promise((resolve, reject) => {
            this.Connect((err, dbo) => {
                if (err) reject(err);
                dbo.collection(strModelName).insertMany(newModels, function (err, res) {
                    if (err) throw err;
                    resolve({ Status: "Sucess", Inserted: res.insertedCount });
                });
            });
        });
    }

    Update(strModelName, query, newModel) {
        return new Promise((resolve, reject) => {
            this.Connect((err, dbo) => {
                if (err) reject(err);
                dbo.collection(strModelName).updateOne(query, { $set: newModel }, function (err, res) {
                    if (err) throw err;
                    resolve({ Status: "Sucess" });
                });
            });
        });
    }

    DropCollection(strModelName) {
        return new Promise((resolve, reject) => {
            this.Connect((err, dbo) => {
                if (err) reject(err);
                dbo.collection(strModelName).drop(function (err, delOK) {
                    if (err)
                        switch (err.code) {
                            case 26: {
                                resolve({ Status: err.codeName });
                                break;
                            }
                            default: {
                                throw err;
                            }
                        }
                    else
                        resolve({ Status: delOK ? "Collection deleted" : "Something went wrong!" });
                });
            });
        });
    }
}

module.exports = DB;
