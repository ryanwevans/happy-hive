const choresReducer = (
    state = [], 
    action) => {
        switch(action.type) {

            case 'FETCH_CHORES':
                return state.concat(action.chores);

            default:
                return state;

        }
}

export default choresReducer;