import { connect } from 'react-redux';
import Display from '../components/Display';
import * as actions from '../actions';

const visibilityTody = (list, filter) => {
  if (filter === 'all') {
    return list;
  } else if (filter === 'completed') {
    return list.filter(e => {
      return e.done;
    })
  } else if (filter === 'todo') {
    return list.filter(e => {
      return !e.done;
    })
  }   
}

const mapStateToProps = (state) => {
    return {
       value: visibilityTody(state.todo.value, state.todo.visibility),
       visibility: state.todo.visibility,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickItem: (index) => {
      dispatch(actions.toggleTodo(index));
    },
    changeFilter: (visibility) => {
      dispatch(actions.changeFilter(visibility));
    }
  };
};

const WithDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display);

export default WithDisplay;
