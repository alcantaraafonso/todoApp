const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED': {
            return { ...state, description: action.payload }
        }
        case 'TODO_SEARCHED': {
            return { ...state, list: action.payload}
        }
        case 'CLEAR_FORM' : {
            return { ...state, description: '' } //para limpar o campo uma vez inserido
        }
        default:
            return state
    }
}