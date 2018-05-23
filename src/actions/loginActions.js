import loginApi from '../api/loginApi';
import * as types from './actionTypes';

export function login(user) {
    return function(dispatch) {
        return loginApi.login(user).then(res=>res.json()).then(res => {
                    if(res.status == true) {
                        dispatch(loginSuccess(res.token, user.room));
                    } else {
                        dispatch(loginFail());
                    }
                }).catch(error => {
                    console.log("ERROR", error);
                    throw(error);
                });
    }
}

export function loginSuccess(token, room) {
    return {
        type: types.LOGIN_SUCCESS,
        token,
        room
    };
}

export function loginFail() {
    return {
        type: types.LOGIN_FAIL
    };
}