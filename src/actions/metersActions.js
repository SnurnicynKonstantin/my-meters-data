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

export function createMeters(meters) {
    return function(dispatch) {
        return metersApi.createMeters(meters).then(res=>res.json()).then(res => {
                    if(res.status == true) {
                        dispatch(createMetersSuccess(res.meters));
                    } else {
                        dispatch(createMetersFail());
                    }
                }).catch(error => {
                    console.log("ERROR", error);
                    throw(error);
                });
    }
}

export function createMetersSuccess(meters) {
    return {
        type: types.CREATE_METERS_SUCCESS,
        meters
    };
}

export function createMetersFail() {
    return {
        type: types.CREATE_METERS_FAIL
    };
}