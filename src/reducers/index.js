import { game } from './game';
import { units } from './units';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    game,
    units
})

export default rootReducer;