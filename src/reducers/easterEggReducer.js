export default function easterEggsReducer(state = {}, action) {

    switch (action.type) {

        case 'ACTIVATE_EASTEREGG':
            return  [].concat(state, action.payload)
        
        case 'DEACTIVATE_EASTEREGG':
            return state.filter((val) => val.id !== action.payload.id)
        
        default:
            return state;
    }
}