const rewardsReducer = (state = [], action) => {
        
    switch(action.type) {

        case 'FETCH_REWARDS':
            return action.rewards;

        case 'ADD_REWARD':
            return state.concat(action.reward)

        default:
            return state;
            
    }
}

export default rewardsReducer;