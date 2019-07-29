import React, { Component } from 'react';
import Pet from './Pet/Pet'

class PetList extends Component { 
  static getDerivedStateFromProps(props, state) {
    console.log('PetList - getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('PetList - shouldComponentUpdate');
    
    //we only allow a re-render if pets is updated
    //this only works because we used the rest operator to build a new reference
    if (nextProps.pets !== this.props.pets) {
        return true;
    } else {    
        return false;
    }
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