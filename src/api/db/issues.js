// @ts-check

'use strict';
var mongoose = require('mongoose');
var FetchIssue = mongoose.model('FetchIssue');

exports.getIssues = async () => {

    return await FetchIssue.find({})
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

    return await FetchIssue.findById(id)
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};

exports.getIssueByDate = async (date) => {

    return await FetchIssue.find({
            date: date
        })
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        })
};

exports.updateIssue = async (id, updated) => {

    return await FetchIssue.findOneAndUpdate({
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

    return await FetchIssue.findOneAndRemove({
            _id: id
        })
        .then(result => {
            return result;
        }).catch(err => {
            return null;
        });
};