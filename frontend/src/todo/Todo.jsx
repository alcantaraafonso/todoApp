import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        }


        //independente de quem chama, o handleAdd terá sua instância de Todo atralado a ele
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.refresh = this.refresh.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handlePending = this.handlePending.bind(this);

        this.refresh();
    }

    /**
     * Pega a lista de task organizada por datas
     */
    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then((response) => this.setState({
                ...this.state,
                description: '',
                list: response.data
            }))
    }

    /**
     * Adiciona uma task
     */
    handleAdd() {
        axios.post(URL, {description: this.state.description})
            .then(response => this.refresh());
    }

    /**
     * pega o valor do input
     * @param {*} e evento do onChance para pegar o target
     */
    handleChange(e) {
        //Como o estado deve ser imutável, passo uma cópia do state.
        //Sempre deve-se fazer isso
        this.setState({
            ...this.state,
            description: e.target.value

        })

    }

    /**
     * remove uma task, chamando a respectiva API
     * @param {*} todo o objeto task que deve ser removido
     */
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => this.refresh())
    }

    /**
     * 
     * @param {*} todo o objeto task que deve ser marcado com PENDENTE
     */
    handlePending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false } )
            .then(response => this.refresh())
    }

    /**
     * 
     * @param {*} todo o objeto task que deve ser marcado com FEITO
     */    
    handleDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true } )
            .then(response => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                {/** passando o endereço de referência da função para que ela seja executada no filho */}
                <TodoForm handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description}/> 

                <TodoList list={ this.state.list }
                    handleRemove={ this.handleRemove } 
                    handleDone={ this.handleDone }
                    handlePending={ this.handlePending }
                    />
            </div>
        )
    }
}
