import React, { Component } from 'react';
import Pet from './Pet/Pet'

class PetList extends Component { 
  static getDerivedStateFromProps(props, state) {
    console.log('PetList - getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('PetList - shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('PetList - getSnapshotBeforeUpdate');
      return {message: 'Hi Snarf!!!'};
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('PetList - componentDidUpdate');
      console.log(snapshot);
  }
  render() {
    console.log('PetList - render')
    return this.props.pets.map((pet, index) => {
        return (
            <Pet
            key={pet.id}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, pet.id)}
            name={pet.name}
            age={pet.age} />
        );
    });
  }
}

export default PetList;