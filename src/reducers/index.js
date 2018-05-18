import {combineReducers} from 'redux';
import login from './loginReducer';
import meters from './metersReducer';

const rootReducer = combineReducers({
    login,
    meters
});

export default rootReducer;