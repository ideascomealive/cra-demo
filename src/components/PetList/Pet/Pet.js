import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper';
import './Pet.css';

class Pet extends Component {
  //add constructor to create a ref
  constructor(props) {
    super();
    //React.createRef
    this.inputElementRef = React.createRef();
  }

  //reference from constructor and React.createRe(); - inputElementRef
  componentDidMount() {
    //add .current for current element
    this.inputElementRef.current.focus();
  }
  render() {
  console.log('Child Components rendering')
    return (
      <Wrapper>
        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input 
        type="text" 
        // ref={(inputEl) => {this.inputElement = inputEl}} //removed other ref
        ref={this.inputElementRef}
        onChange={this.props.changed} 
        value={this.props.name} />
      </Wrapper>
    );
  }
}


export default Pet;