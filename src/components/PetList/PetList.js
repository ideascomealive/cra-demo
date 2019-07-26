import React, { Component } from 'react';
import Pet from './Pet/Pet'

//converted to class syntax, needs {Component} import, render method and this.props.NAME changes
class PetList extends Component { 
  render() {
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