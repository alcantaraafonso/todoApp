// Módulo para habilitar o CORS
module.exports = function(request, response, next) {
    response.header('Access-Control-Allow-Origin','*');
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    response.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    next();
}