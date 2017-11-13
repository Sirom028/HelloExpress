var users = require('./db.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/users', users.findAll);
app.get('/users/:name', users.findByName);
app.get('/users/role/:role', users.findByRole);
app.listen(3003);
