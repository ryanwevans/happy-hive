const rewardsReducer = (
    state = [], 
    action) => {
        switch(action.type) {

            case 'FETCH_REWARDS':
                return state.concat(action.rewards);

            default:
                return state;
    }
}

export default rewardsReducer;