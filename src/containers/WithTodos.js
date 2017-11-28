import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
       value: state.todo.value,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (value) => {
      if (value) {
        dispatch(actions.addTodo(value));
      }
    }
  };
};

const WithTodos = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDo);

export default WithTodos;
