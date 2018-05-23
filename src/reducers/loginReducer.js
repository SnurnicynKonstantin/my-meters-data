import * as types from '../actions/actionTypes';
import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';

export default function loginReducer(state = {}, action) {

    switch (action.type) {

        case types.LOGIN_SUCCESS: {
            localStorage.setItem('token', action.token);
            localStorage.setItem('roomNumber', action.room);
            return {
                "loginStatus": true,
                "token": action.token
            };
        }

        case types.LOGIN_FAIL: {
            return {"loginStatus": false};
        }


        default:
            return state;
    }
}