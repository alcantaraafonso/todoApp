import React from 'react';
import IconButton from '../template/IconButton';

export default props => (
    <div className='todoForm' role='form'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='description' className='form-control' 
                placeholder='Adicione uma tarefa'
                value={props.description}
                onChange={props.handleChange}></input>
        </div>
        <div className='col-xs-12 col-sm-3 col-md-2'>
            <IconButton style='primary' onClick={props.handleAdd} 
                icon='plus'></IconButton>
            {/* <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button> */}
        </div>
    </div>
)