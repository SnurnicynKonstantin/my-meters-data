import orderApi from '../api/orderApi';
import * as types from './actionTypes';

export function sendMail(data, basket) {
    return function(dispatch) {
        orderApi.sendMail(data, basket).then(
            dispatch(sendMailSuccess())
        );
        return dispatch(sendMailSuccess());
    }
}

export function sendMailSuccess() {
    return {
        type: types.CLEAR_ORDER
    };
}