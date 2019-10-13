const restful = require('node-restful');

const mongoose = restful.mongoose;

//Definindo o Schema que a aplicação usará
//Descrição da tarega é uma string e sendo obrigatória
//Feito ou não é um booleano, obrigatório e o default será inicialmente falso
//data em que a tarefa foi criada
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }

})

//Exportando para que outros arquivos possam vê-lo
module.exports = restful.model('todo', todoSchema);

