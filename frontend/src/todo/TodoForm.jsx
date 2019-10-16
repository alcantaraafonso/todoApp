import React from 'react';
import IconButton from '../template/IconButton';

export default props =>{ 

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        } 
    }

    return (
        <div className='todoForm' role='form'>
            <div className='col-xs-12 col-sm-9 col-md-10'>
                <input id='description' className='form-control' 
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}></input>
            </div>
            <div className='col-xs-12 col-sm-3 col-md-2'>
                <IconButton style='primary' onClick={props.handleAdd} 
                    icon='plus'></IconButton>
                <IconButton style='info' onClick={props.handleSearch} 
                    icon='search'></IconButton>
                <IconButton style='default' onClick={props.handleClear} 
                    icon='close'></IconButton>
                {/* <button className='btn btn-primary'>
                    <i className='fa fa-plus'></i>
                </button> */}
            </div>
        </div>
)}