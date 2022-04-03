const express = require('express');
//const path = require('path');

const redirectionsRouter = require('./routes/redirections');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(redirectionsRouter);

module.exports = app;