
const express = require('express');

//É necessário exportar essa função para que no momento que o módulo routes for usado, ele use a mesma instância que foi
//criada no módulo servers.js
module.exports = function(server) {
    const router = express.Router();

    //isso que dizer que qualquer URL que tiver /api fará uso essa instância de router
    server.use('/api', router);

    //TODO Routers
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos');

}