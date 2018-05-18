import metersApi from '../api/metersApi';
import * as types from './actionTypes';

export function getMeters() {
    return function(dispatch) {
        return metersApi.getMeters().then(res=>res.json()).then(res => {
                    if(res.status == true) {
                        dispatch(metersSuccess(res.meters));
                    } else {
                        dispatch(metersFail());
                    }
                }).catch(error => {
                    console.log("ERROR", error);
                    throw(error);
                });
    }
}

export function metersSuccess(meters) {
    return {
        type: types.METERS_SUCCESS,
        meters
    };
}

export function metersFail() {
    return {
        type: types.METERS_FAIL
    };
}