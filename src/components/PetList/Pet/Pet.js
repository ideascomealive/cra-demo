import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper';
import './Pet.css';

class Pet extends Component {
  constructor(props) {
    super();
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
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
        ref={this.inputElementRef}
        onChange={this.props.changed} 
        value={this.props.name} />
      </Wrapper>
    );
  }
}


export default Pet;