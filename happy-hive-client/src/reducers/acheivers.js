const acheiversReducer = (state = [], action) => {

    switch(action.type) {

        case 'FETCH_ACHEIVERS':
            return action.acheivers;

        case 'ADD_ACHEIVER':
            return state.concat(action.acheiver);

        case 'UPDATE_ACHEIVER':
            const acheiver = action.acheiver
            return {
                ...state.acheivers, acheiver
            };

        default:
            return state;
    }
}

export default acheiversReducer;