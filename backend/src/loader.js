//Importando o arquivo criado em /config
const serve = require('./config/server');

require('./config/database');

//requerindo um módulo e passando um parâmetro para ele
require('./config/routes')(serve);