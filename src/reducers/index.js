import {combineReducers} from 'redux';
import login from './loginReducer';
import meters from './metersReducer';
import administrativeMeters from './administrativeMetersReducer';

const rootReducer = combineReducers({
    login,
    meters,
    administrativeMeters
});

export default rootReducer;