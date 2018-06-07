import * as types from '../actions/actionTypes';
import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';

export default function metersReducer(state = {}, action) {

    switch (action.type) {

        case types.METERS_SUCCESS: {
            return action.meters
        }

        case types.METERS_FAIL: {
            return {"metersStatus": false};
        }


        default:
            return state;
    }
}