import React, { Component } from 'react';
//import Wrapper component
import Wrapper from '../../../hoc/Wrapper';
import './Pet.css';

class Pet extends Component {
  render() {
  console.log('Child Components rendering')
    return (
      <Wrapper>
        {/*Wrap everything in a HOC instead of a div*/}
        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Wrapper>
    );
  }
}


export default Pet;