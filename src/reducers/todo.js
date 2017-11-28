import actionTypes from '../actions/actionTypes';

const initialState = {
  value: [],
  visibility: 'all'
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return Object.assign({}, state, {
        value: [...state.value, {
          text: action.payload.newValue,
          done: false,
          index: action.payload.index
        }],
      });
    case actionTypes.TOGGLE_ITEM:
      return Object.assign({}, state, {
        value: state.value.map(e => {
          if (e.index === action.payload.index) {
            return Object.assign({}, e, {
              done: !e.done
            });
          } else {
            return e;
          }
        }),
      });
    case actionTypes.CHANGE_FILTER:
      return Object.assign({}, state, {
        visibility: action.payload.visibility
      });
    default:
      return state;
  }
};

export default todo;
