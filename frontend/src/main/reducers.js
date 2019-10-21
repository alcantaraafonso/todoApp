import { combineReducers } from 'redux';

//Quando exporta-se como default, não precisa das Chaves
import todoReducers from '../todo/TodoReducers'

/**
 * O rootReducers será a combinação de todos os reducers da APP
 */
const rootReducer = combineReducers({
    todo: todoReducers
})

export default rootReducer