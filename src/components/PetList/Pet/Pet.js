import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper';
import './Pet.css';

class Pet extends Component {

  //added componentDidMount() with reference
  componentDidMount() {
    //inputElement will be set by the time componentDidMount runs
    this.inputElement.focus();
  }
  render() {
  console.log('Child Components rendering')
    return (
      <Wrapper>
        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        {/* Set an internal property called this.inputElement */}
        <input 
        type="text" 
        ref={(inputEl) => {this.inputElement = inputEl}}
        onChange={this.props.changed} 
        value={this.props.name} />
      </Wrapper>
    );
  }
}


export default Pet;