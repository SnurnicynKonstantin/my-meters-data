import {combineReducers} from 'redux';
import basket from './basketReducer';

const rootReducer = combineReducers({
    basket
});

export default rootReducer;