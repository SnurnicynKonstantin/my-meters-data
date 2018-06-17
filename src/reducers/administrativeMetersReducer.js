import * as types from '../actions/actionTypes';
import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';

export default function administrativeMetersReducer(state = {}, action) {

    switch (action.type) {

        case types.GET_ADMINISTRATIVE_METERS_SUCCESS: {
            return {
                       meters: action.meters,
                       street: action.street
                   }
        }

        case types.GET_ADMINISTRATIVE_METERS_FAIL: {
            return {"metersStatus": false};
        }


        default:
            return state;
    }
}