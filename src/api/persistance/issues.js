// @ts-check

'use strict';
var mongoose = require('mongoose');
var Issue = mongoose.model('Issue');

exports.getIssues = async () => {

    return await Issue.find({})
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};


exports.createIssue = async (newIssue) => {

    return await newIssue.save()
        .then(result => {
            return result;
        }).catch(err => {
            throw err;
        })

};

exports.getIssueById = async (id) => {

    return await Issue.findById(id)
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};

exports.getIssueByDate = async (date) => {

    return await Issue.find({
            date: date
        })
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};

exports.updateIssue = async (id, updated) => {

    return await Issue.findOneAndUpdate({
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


exports.deleteIssue = async (id) => {

    return await Issue.findOneAndRemove({
            _id: id
        })
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        });
};