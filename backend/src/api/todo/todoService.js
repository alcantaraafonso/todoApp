//Importando o módulo do Schema que foi criado em todo.js
const todo = require('./todo');

//Criando os métodos disponíveis via API
todo.methods(['get', 'post', 'put', 'delete']);

//Linha obrigatória para que em uma pesquisa, retorne-se a linha do BD já atualizada.
//Sem esta linha, a API trará o dado sem a atualição que foi feita nele
todo.updateOptions({new: true, runValidators: true})

//Expondo as APIs
module.exports = todo