const achieversReducer = (state = {
    achievers: [],
    current_achiever: sessionStorage.username || {}
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
            console.log(state.achievers)
            return {
                ...state,
                current_achiever: state.achievers.filter( achiever => achiever.name === action.achieverName)
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