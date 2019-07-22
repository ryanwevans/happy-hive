import { combineReducers } from 'redux';
import choresReducer from './chores';
import choreFormDataReducer from './choreFormData'
import rewardsReducer from './rewards';

const rootReducer = combineReducers({
    chores: choresReducer,
    choreFormData: choreFormDataReducer,
    rewards: rewardsReducer,
    // acheivers: acheiversReducer
});

export default rootReducer;