import React from 'react';
import './Pet.css';

const pet = (props) => {
  //child component render
  console.log('Child Components rendering')
    return (
      <div className="Pet">
        <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    )
};

export default pet;