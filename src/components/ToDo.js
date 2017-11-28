import React from 'react';
import PropTypes from 'prop-types';
import './ToDo.css';

const ToDo = ({ onSubmit }) => {
  let input = null;

  const onInputChange = (event) => {
    input = event.target.value;
  }
  
  return (
    <div className='up'>
      <div className='title'>
        <h1>My To Do List with Redux</h1>
      </div>
      
      <form className='inputUser' onSubmit={(event) => { event.preventDefault(); event.target.reset(); onSubmit(input) }}>
        <div style={{ marginBottom: '5px' }}>
          <input type='text' name="text" onChange={onInputChange} />
        </div>
        <div className='button' type="submit">add</div>
      </form>
      
    </div>
  )
}

ToDo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ToDo;