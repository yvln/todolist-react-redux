import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const displayValue = ( value, onClickItem ) => {
  if (value.length !== 0) {
    return value.map(e => {
      return <div className={`todoItem ${e.done ? 'completed' : 'todo'}`} onClick={() => {onClickItem(e.index)}} key={e.index}>{e.text}</div>
    })
  } else {
    return;
  }
} 

const Display = ({ value, onClickItem, changeFilter, visibility }) => {
  return (
    <div className='down'>
      <div className='list'>
        {displayValue(value, onClickItem)}
      </div>
      <div className='buttons'>
        <div className={`button ${visibility === 'all' ? 'selected' : 'notselected'}`} onClick={() => {changeFilter('all')}}>View All</div>
        <div className={`button ${visibility === 'completed' ? 'selected' : 'notselected'}`} onClick={() => {changeFilter('completed')}}>Completed</div>
        <div className={`button ${visibility === 'todo' ? 'selected' : 'notselected'}`} onClick={() => {changeFilter('todo')}}>To do</div>
      </div>
    </div>
  )
}

Display.propTypes = {
  onClickItem: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.any,
  visibility: PropTypes.string.isRequired
};

export default Display;