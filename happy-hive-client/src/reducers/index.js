import { combineReducers } from 'redux';
import choresReducer from './chores';

const rootReducer = combineReducers({
    chores: choresReducer,
    // rewards: rewardsReducer,
    // acheivers: acheiversReducer
});

export default rootReducer;