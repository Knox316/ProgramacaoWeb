// @ts-check

'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.getUsers = async () => {

    return await User.find({})
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};


exports.createUser = async (newUser) => {

    return await newUser.save()
        .then(result => {
            return result;
        }).catch(err => {
            throw err;
        })

};

exports.getUserById = async (id) => {

    return await User.findById(id)
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};

exports.getUserByName = async (name) => {

    return await User.find({
            username: name
        })
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};

exports.updateUser = async (id, updated) => {

    return await User.findOneAndUpdate({
            _id: id
        }, updated, {
            new: true
        })
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};


exports.deleteUser = async (id) => {

    return await User.findOneAndRemove({
            _id: id
        })
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        });
};