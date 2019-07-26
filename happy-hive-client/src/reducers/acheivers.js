const acheiversReducer = (state = {
    current_acheiver: {},
    acheivers: []
}, action) => {

    switch(action.type) {

        case 'FETCH_ACHEIVERS':
            return action.acheivers;

        case 'ADD_ACHEIVER':
            const newAcheiver = action.acheiver
            return {
                ...state,
                acheivers: [...state.concat(newAcheiver)]
            };

        case 'SET_ACHEIVER':
            console.log(state)
            const currentAcheiver = state.find( acheiver => acheiver.name === action.acheiverName)
            return {
                ...state,
                current_acheiver: currentAcheiver
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