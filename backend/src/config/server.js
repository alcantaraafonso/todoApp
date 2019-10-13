const port = 3003

const bodyParser = require('body-parser');
//Servidor web que roda em cima do Node
const express = require('express');

//Importando o CORS
const allowCors = require('./cors');

const server = express();

server.use(bodyParser.urlencoded({extended: true}));

server.use(bodyParser.json());

server.use(allowCors);

server.listen(port, function() {
    console.log(`Backend is running on port ${port}.`);
})

module.exports = server;