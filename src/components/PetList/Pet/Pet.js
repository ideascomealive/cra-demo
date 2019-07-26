import React, { Component } from 'react';
import './Pet.css';

class Pet extends Component {
  render() {
  console.log('Child Components rendering')
    return (
      <div className="Pet">
        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}


export default Pet;