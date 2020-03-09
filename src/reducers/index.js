import { counter } from './counter';
import { units } from './units';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter,
    units
})

export default rootReducer;