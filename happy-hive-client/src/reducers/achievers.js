const achieversReducer = (state = {
    achievers: [],
    current_achiever: null
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

        case 'UPDATE_ACHIEVER':
            const updatedAchiever = action.achiever
            return {
                ...state,
                achievers: [...state.achievers, updatedAchiever]
            };
                
        case 'SET_CURRENT_ACHIEVER':
            return ({
                ...state,
                current_achiever: state.achievers.filter( achiever => achiever.id === action.achiever.id)
            }, console.log(state.current_achiever))

        case 'CLEAR_CURRENT_ACHIEVER':
            return {
                ...state,
                current_achiever: null
            }

        default:
            return state;
    }
}

export default achieversReducer;