// User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
console.log('teste');
UserSchema.pre('save', function (next) {
    console.log('teste1');

    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        console.log('teste2');

        // Saving reference to this because of changing scopes
        const document = this;
        //console.log(document);
        bcrypt.hash(document.password, saltRounds,
            function (err, hashedPassword) {
                //console.log(err);
                console.log(hashedPassword);
                if (err) {
                    next(err);
                } else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

module.exports = mongoose.model('User', UserSchema);