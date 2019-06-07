var mongoose = require('mongoose');
var idvalidator = require('mongoose-id-validator');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    users: [{
        id: Number,
        login: String,
        firstname: String,
        lastname: String,
        mail: String,
        created_on: String,
        last_login_on: String
    }]
});

UserSchema.plugin(idvalidator);

module.exports = mongoose.model('FetchUsers', UserSchema);