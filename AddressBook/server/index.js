'use strict';

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const contact = require('./routes/contact');
const path = require('path');

mongoose.connect('mongodb://localhost/addressbook');

var app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.resolve(__dirname + '/../client')));

app.use('/api/v1.0/contacts', contact);

app.use('/api', (req, res, next) => {
    res.statusCode = 404;
    res.json({
        code: 404,
        message: 'Not Found'
    });
});

app.use('/api', (err, req, res, next) => {
    res.statusCode = 500;
    res.json({
        code: 500,
        message: err
    });
});

// On sert index.html au lieu d'un erreur 404
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

/*
app.get('/api/v1.0/contacts', (req, res, next) => {});
app.post('/api/v1.0/contacts', (req, res, next) => {});
app.delete('/api/v1.0/contacts/:id', (req, res, next) => {});
*/

app.listen(80, () => {
    console.log('http://localhost/');
});