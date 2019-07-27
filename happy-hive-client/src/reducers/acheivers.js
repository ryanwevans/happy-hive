const acheiversReducer = (state = {
    acheivers: [],
    current_acheiver: {}
}, action) => {

    switch(action.type) {

        case 'FETCH_ACHEIVERS':
            return {
                ...state,
                acheivers: action.acheivers
            };

        case 'ADD_ACHEIVER':
            const acheiver = action.acheiver
            return {
                ...state,
                acheivers: [...state.acheivers, acheiver]
            };

        case 'SET_ACHEIVER':
            console.log(state.acheivers)
            return {
                ...state,
                current_acheiver: state.acheivers.filter( acheiver => acheiver.name === action.acheiverName)
            }

        case 'UPDATE_ACHEIVER':
            const updatedAcheiver = action.acheiver
            return {
                ...state,
                acheivers: [...state.acheivers, updatedAcheiver]
            };

        default:
            return state;
    }
}

export default acheiversReducer;