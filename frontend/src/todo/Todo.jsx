import React from 'react';
// import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// const URL = 'http://localhost:3003/api/todos'

// export default class Todo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         description: '',
    //         list: []
    //     }


    //     //independente de quem chama, o handleAdd terá sua instância de Todo atralado a ele
    //     // this.handleAdd = this.handleAdd.bind(this);
    //     // this.handleChange = this.handleChange.bind(this);
    //     // this.refresh = this.refresh.bind(this);
    //     // this.handleRemove = this.handleRemove.bind(this);
    //     // this.handleDone = this.handleDone.bind(this);
    //     // this.handlePending = this.handlePending.bind(this);
    //     this.handleSearch = this.handleSearch.bind(this);
    //     this.handleClear = this.handleClear.bind(this);

    //     // this.refresh();
    // }

    // /**
    //  * Pega a lista de task organizada por datas
    //  * @param description: o parametro que será buscando
    //  * Pulo do gato description = '' declarar a variável já no parametro e se algum parametro for
    //  * passado, ele usa esse valor, caso contrário, a variavel fica vazia
    //  */
    // refresh(description = '') {
    //     //testa de description é vazia, nula ou undefined
    //     const search = description ? `&description__regex=/${description}/` : ''
    //     axios.get(`${URL}?sort=-createdAt${search}`)
    //         .then((response) => this.setState({
    //             ...this.state,
    //             description: description,
    //             list: response.data
    //         }))
    // }

    // /**
    //  * Adiciona uma task
    //  */
    // handleAdd() {
    //     axios.post(URL, {description: this.state.description})
    //         .then(response => this.refresh());
    // }

    // /**
    //  * pega o valor do input
    //  * @param {*} e evento do onChance para pegar o target
    //  */
    // handleChange(e) {
    //     //Como o estado deve ser imutável, passo uma cópia do state.
    //     //Sempre deve-se fazer isso
    //     this.setState({
    //         ...this.state,
    //         description: e.target.value

    //     })

    // }

    // /**
    //  * remove uma task, chamando a respectiva API
    //  * @param {*} todo o objeto task que deve ser removido
    //  */
    // handleRemove(todo) {
    //     axios.delete(`${URL}/${todo._id}`)
    //         .then(() => this.refresh(this.state.description))
    // }

    // /**
    //  * faz uma requisição PUT e altera o valor DONE
    //  * @param {*} todo o objeto task que deve ser marcado com PENDENTE
    //  */
    // handlePending(todo) {
    //     axios.put(`${URL}/${todo._id}`, { ...todo, done: false } )
    //         .then(response => this.refresh(this.state.description))
    // }

    // /**
    //  * faz uma requisição PUT e altera o valor DONE
    //  * @param {*} todo o objeto task que deve ser marcado com FEITO
    //  */    
    // handleDone(todo) {
    //     axios.put(`${URL}/${todo._id}`, { ...todo, done: true } )
    //         .then(response => this.refresh(this.state.description))
    // }

    // /**
    //  * Faz uma busca dado o que é digitado no campo de tarefas
    //  */
    // handleSearch() {
    //     this.refresh(this.state.description);
    // }

    // handleClear() {
    //     this.refresh();
    // }

export default props => {
    return (
        <div>
            <PageHeader name='Tarefas' small='Cadastro' />
            <TodoForm /> 

            <TodoList />
        </div>
    )
}
