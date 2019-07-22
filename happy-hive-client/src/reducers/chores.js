const choresReducer = (state = [], action) => {
        
    switch(action.type) {

        case 'FETCH_CHORES':
            return action.chores;

        case 'ADD_CHORE':
            return state.concat(action.chores);

        default:
            return state;

    }
}

export default choresReducer;