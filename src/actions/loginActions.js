import loginApi from '../api/loginApi';
import * as types from './actionTypes';

//export function sendMail(data, basket) {
//    return function(dispatch) {
//        orderApi.sendMail(data, basket).then(
//            dispatch(sendMailSuccess())
//        );
//        return dispatch(sendMailSuccess());
//    }
//}
//
//export function sendMailSuccess() {
//    return {
//        type: types.CLEAR_ORDER
//    };
//}

export function login(user) {
    return function(dispatch) {
        return loginApi.login(user).then(res=>res.json()).then(res => {
                    dispatch(loginSuccess(res));
                }).catch(error => {
                    console.log("ERROR", error);
                    throw(error);
                });
    }
}

export function loginSuccess(user) {
    console.log(user);
    return {
        type: types.LOGIN
    };
}