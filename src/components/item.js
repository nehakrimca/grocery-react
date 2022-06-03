import React from 'react';
import './item.css';

function item(props) {
  return (
    <div className='item-style'>
      <h3> {props.item.name} </h3>
      <h3>{props.item.calorie}</h3>
      <button name={props.item.name} className='remove-button' onClick={props.onClick} >
        Remove
      </button>
    </div>
  );
}

export default item;
