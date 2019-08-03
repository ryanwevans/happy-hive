const achieversReducer = (state = {
    achievers: [],
    current_achiever: {}
}, action) => {

    switch(action.type) {

        case 'FETCH_ACHIEVERS':
            return {
                ...state,
                achievers: action.achievers
            };

        case 'ADD_ACHIEVER':
            const achiever = action.achiever
            return {
                ...state,
                achievers: [...state.achievers, achiever]
            };

        case 'SET_ACHIEVER':
            return {
                ...state,
                current_achiever: state.achievers.filter( achiever => achiever.id === action.achiever.id)
            }

        case 'UPDATE_ACHIEVER':
            const updatedAchiever = action.achiever
            return {
                ...state,
                achievers: [...state.achievers, updatedAchiever]
            };

        default:
            return state;
    }
}

export default achieversReducer;