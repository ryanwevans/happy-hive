const choresReducer = (state = [], action) => {
        
    switch(action.type) {

        case 'FETCH_CHORES':
            return action.chores;

        case 'ADD_CHORE':
            return state.concat(action.chore);

        case 'UPDATE_CHORE':
            const chore = action.chore
            return {
                ...state.chores, chore
            };

        default:
            return state;

    }
}

export default choresReducer;