import React, { Component } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        }


        //independente de quem chama, o handleAdd terá sua instância de Todo atralado a ele
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange(e).bind(this);
    }

    handleAdd() {
        console.log("handle Add")
        console.log(this)
    }

    handleChange(e) {
        //passo o state para ter acesso a todo o conteudo de objeto
        this.state({
            ...this.state,
            description: e.target.value

        })

    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                {/** passando o endereço de referência da função para que ela seja executada no filho */}
                <TodoForm handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description}/> 
                <TodoList />
            </div>
        )
    }
}
