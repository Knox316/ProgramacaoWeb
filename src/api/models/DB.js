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
}

module.exports = DB;
