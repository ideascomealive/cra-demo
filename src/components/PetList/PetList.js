import React, { Component } from 'react';
import Pet from './Pet/Pet'

class PetList extends Component { 
  //getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log('PetList - getDerivedStateFromProps', props);
    return state;
  }

  //have to return true - update or false - don't update
  //commonly check prev vs current props and state to determine if you allow the update 
  shouldComponentUpdate(nextProps, nextState) {
    console.log('PetList - shouldComponentUpdate');
    return true;
  }

  //getSnapshotBeforeUpdate - save some data before update
  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('PetList - getSnapshotBeforeUpdate');
      return {message: 'Hi Snarf!!!'};
  }
  
  //last to run after update happens - you will use this frequently
  //added snapshot from getSnapshotBeforeUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('PetList - componentDidUpdate');
      console.log(snapshot);
  }
  render() {
    //render runs before getSnapshotBeforeUpdate
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