import React from 'react';
import './Pet.css';
//import radium
import Radium from 'radium';

const pet = (props) => {
    return (
      <div className="Pet">
        <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    )
};

//export pet call radium 
export default Radium(pet);