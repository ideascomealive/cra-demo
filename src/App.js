import React, { Component } from 'react';
import './App.css';
import Pet from './Pet/Pet';

class App extends Component {
    state = {
        pets: [
            { id: '26834', name: 'Houla', age: 14 },
            { id: '33764', name: 'Casey', age: 12 },
            { id: '82743', name: 'Sam', age: 10 }            
        ],
        showPets: false
    }

    deletePetHandler = (petIndex) => {
        const pets = [...this.state.pets];
        pets.splice(petIndex, 1);
        this.setState({pets: pets});
    }

    //pass in the id from the map method
    petChangeHandler = (event, id) => {
        //use .findIndex to locate the correct id
        const petIndex = this.state.pets.findIndex(p => {
            return p.id === id;
        });
        
        //then we can use the spread operator to avoid mutating the state directly through reference
        const pet = {
            ...this.state.pets[petIndex]
        };

        //set the .name value to the event.target.value
        pet.name = event.target.value;

        //create a new pets object and add the new pet value at petIndex without mutating the state directly
        const pets = [...this.state.pets];
        pets[petIndex] = pet;

        //update state.pets with the new pets array
        this.setState({pets: pets});
    }
          
    togglePetsHandler = () => {
      const show = this.state.showPets;
      this.setState({showPets: !show});
    }

    render() {
        const styles = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        
        let petsRender = null;

        if (this.state.showPets) {
            petsRender = (
            <div>
              {this.state.pets.map((pet, index) => {
                  return <Pet
                      key={pet.id}
                      click={() => this.deletePetHandler(index)}
                      changed={(event) => this.petChangeHandler(event, pet.id)}
                      name={pet.name}
                      age={pet.age} />
              })}
            </div>
            );
        } 

        return (
        <div className="App">
            <h1 className="App-title">Hi Everybody</h1>
            <button 
                style={styles}
                onClick={this.togglePetsHandler}>Toggle Pet</button>
            {petsRender}
        </div>
        );
    }
}

export default App;