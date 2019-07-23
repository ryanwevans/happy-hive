import { combineReducers } from 'redux';
import choresReducer from './chores';
import choreFormDataReducer from './choreFormData'
import rewardsReducer from './rewards';
import rewardFormDataReducer from './rewardFormData'

const rootReducer = combineReducers({
    chores: choresReducer,
    choreFormData: choreFormDataReducer,
    rewards: rewardsReducer,
    rewardFormData: rewardFormDataReducer
    // acheivers: acheiversReducer
});

export default rootReducer;