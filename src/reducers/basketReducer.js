import * as types from '../actions/actionTypes';
import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';

export default function basketReducer(state = [], action) {

    switch (action.type) {
        case types.ADD_ITEM: {

            let countedItem = state.filter(item => item.key === action.item.key)[0];
            if (countedItem)
                countedItem.counter++;
            else {
                countedItem = action.item;
                countedItem.counter = 1;
            }

            return [
                ...state.filter(item => item.key !== action.item.key),
                countedItem
            ];
        }

        case types.DELETE_ITEM:
            return [
                ...state.filter(item => item.key !== action.key)
            ];

        case types.GET_ITEMS:
            return [
                ...state
            ];

        case types.INCREMENT_COUNT: {
            let countedItem = state.filter(item => item.key === action.key)[0];
            countedItem.counter++;

            return [
                ...state.filter(item => item.key !== action.key),
                countedItem
            ];
        }

        case types.DECREMENT_COUNT: {
            let countedItem = state.filter(item => item.key === action.key)[0];
            countedItem.counter === 0 ? countedItem.counter = 0 : countedItem.counter--;

            return [
                ...state.filter(item => item.key !== action.key),
                countedItem
            ];
        }

        case types.CLEAR_ORDER: {
            return [];
        }


        default:
            return state;
    }
}