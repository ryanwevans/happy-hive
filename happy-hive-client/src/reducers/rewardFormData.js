const initialState = {
    name: '',
    description: '',
    value: 0,
    claimed: false,
    claimed_by: ''
}

const rewardFormDataReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case 'UPDATED_REWARD_FORM_DATA':
            return action.rewardFormData;

        case 'RESET_REWARD_FORM_DATA':
            return initialState;

        default:
            return state;
    }
}

export default rewardFormDataReducer;