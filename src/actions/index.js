import actionTypes from './actionTypes';

let id = 0;

export const addTodo = (value) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: {
            newValue: value,
            index: id++
        },
    };
};

export const toggleTodo = (index) => {
    return {
        type: actionTypes.TOGGLE_ITEM,
        payload: {
          index: index,
        },
    };
};

export const changeFilter = (visibility) => {
    return {
        type: actionTypes.CHANGE_FILTER,
        payload: {
          visibility: visibility,
        },
    };
};