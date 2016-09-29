'use strict';

const Contact = require('../model/contact');

exports.list = (req, res, next) => {
    Contact.find({}, 'prenom nom', (err, contacts) => {
        if (err) {
            return next(err);
        }

        res.json(contacts);
    });
};

exports.add = (req, res, next) => {
    var contact = new Contact(req.body);
    contact.save((err, contact) => {
        if (err) {
            return next(err);
        }

        res.statusCode = 201;
        res.json(contact);
    });
};

exports.remove = (req, res, next) => {
    let id = req.params.id;
    Contact.findByIdAndRemove(id, (err, contact) => {
        if (err) {
            return next(err);
        }

        if (!contact) {
            return next();
        }

        res.json(contact);
    });
};
