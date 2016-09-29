

const Contact = require('../model/contact');

exports.list = (req, res, next) => {
    Contact.find({}, (err, contacts) => {
        res.json(contacts);
    });
};

exports.add = (req, res, next) => {
    Contact.find({}, (err, contacts) => {
        res.json(contacts);
    });
};

exports.remove = (req, res, next) => {
    Contact.find({}, (err, contacts) => {
        res.json(contacts);
    });
};
