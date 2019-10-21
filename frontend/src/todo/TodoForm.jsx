import React, {Component } from 'react';
import IconButton from '../template/IconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clearForm } from './TodoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this)
    }

    /**
     * Método do ciclo de vida (Hooks)
     */
    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        //Usando o destructuring
        const { add, search, description, clearForm } = this.props

        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clearForm()
        } 
    }

    render() {
        //Usando o destructuring
        const { add, search, description, clearForm } = this.props
                
        return (
            <div className='todoForm' role='form'>
                <div className='col-xs-12 col-sm-9 col-md-10'>
                    <input id='description' className='form-control' 
                        placeholder='Adicione uma tarefa'
                        value={description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}></input>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-2'>
                    <IconButton style='primary' onClick={() => add(description)} //o resultado do onClick tem que ser uma função 
                        icon='plus'></IconButton>
                    <IconButton style='info' onClick={() =>search()} 
                        icon='search'></IconButton>
                    <IconButton style='default' onClick={() => clearForm()} 
                        icon='close'></IconButton>
                    {/* <button className='btn btn-primary'>
                        <i className='fa fa-plus'></i>
                    </button> */}
                </div>
            </div>
    )}
}

/**
 * Responsável por mapear todas os valores do estado que este componente usa para o seu props
 * @param {*} state -> o estado da App
 */
const mapStateToProps = state =>({
    description : state.todo.description
})

/**
 * Mapeia todas as actions para dentro do Props
 * @param dispatch -> é responsável por disparar as ações e enviá-las ao reducers
 */
const mapDispatchToProps = dispatch => bindActionCreators(
    { 
        changeDescription,
        search,
        add,
        clearForm
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)