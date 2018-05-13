import * as types from './actionTypes';

export function getItems() {
    return {
        type: types.GET_ITEMS
    };
}

export function addItem(item) {
    return {
        type: types.ADD_ITEM,
        item
    };
}

export function deleteItem(key) {
    return {
        type: types.DELETE_ITEM,
        key
    };
}

export function incrementItemCount(key) {
    return {
        type: types.INCREMENT_COUNT,
        key
    };
}

export function decrementItemCount(key) {
    return {
        type: types.DECREMENT_COUNT,
        key
    };
}