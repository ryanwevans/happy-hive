const choresReducer = (
    state = []
    , action) => {
        switch(action.type) {

            case 'FETCH_CHORES':
                return action.chores;

            default:
                return state;

        }
}

export default choresReducer;