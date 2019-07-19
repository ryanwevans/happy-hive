import { combineReducers } from 'redux';
import choresReducer from './chores';
import rewardsReducer from './rewards';

const rootReducer = combineReducers({
    chores: choresReducer,
    rewards: rewardsReducer,
    // acheivers: acheiversReducer
});

export default rootReducer;