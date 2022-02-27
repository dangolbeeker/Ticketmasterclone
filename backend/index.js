const express = require('express');
const server = express();
const jwt = require('jsonwebtoken');


server.get('/', (req, res) => {
    res.status(200).json({ api: 'running'});


module.exports = server;
