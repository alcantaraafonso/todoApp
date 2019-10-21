import axios from 'axios';

//URL da api de TODOs   
const URL = 'http://localhost:3003/api/todos'

//Usando no campo de inserção para pegar as suas alterações
export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const searchValue = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${searchValue}`)
            .then(response => dispatch({ type: 'TODO_SEARCHED', payload: response.data }))
        
    }
    //Usando o middleware promise para retornar o dado. O middleware promise basea-se no uso de uma promessa de retorno
    // return
    //     { type: 'TODO_ADDED', payload: request },
    // 

}

export const add = (description = '') => {
    return dispatch => {
        axios.post(URL, { description })
            .then(response => dispatch(clearForm()))
            .then(response => dispatch(search()))
    }

    // const request = axios.post(URL, { description }) //o mesmo que description: description
    // return [
    //     { type: 'TODO_ADDED', payload: request },
    //     search()
    // ]
    
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true } )
            .then(response => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false } )
            .then(response => dispatch(search()))
    }
}

export const doRemove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`, { ...todo, done: false } )
            .then(response => dispatch(search()))
    }
}

/**
 * usando o middleware multi para chamar mais de uma action
 */
export const clearForm = () => ([
    { type: 'CLEAR_FORM', payload: '' }, 
    search()]
)