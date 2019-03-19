const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../database/models');
const router = require('./routes');

const server = express(); // to make our server const we have to invoke express
const PORT = 3000;

server.use(bodyParser.json());
server(bodyParser.urlencoded({extended: true})); //parse nested objects
server.use('/', express.static(path.join(__dirname, '../client/dist'))); //our html is static... html does not change, dirname is the path into this file, then it searches for the index.html in dist

server.use('/api', router); 

server.listen(PORT, () => console.log(`connected to port: ${PORT}`));