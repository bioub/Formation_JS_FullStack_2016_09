'use strict';

const express = require('express');
const mongoose = require('mongoose');
const contact = require('./routes/contact');

mongoose.connect('mongodb://localhost/addressbook');

var app = express();

app.use('/api/v1.0/contacts', contact);

/*
app.get('/api/v1.0/contacts', (req, res, next) => {});
app.post('/api/v1.0/contacts', (req, res, next) => {});
app.delete('/api/v1.0/contacts/:id', (req, res, next) => {});
*/

app.listen(80, () => {
    console.log('http://localhost/');
});