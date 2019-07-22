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

    petChangeHandler = (event) => {
        this.setState({
            pets: [
                { name: 'Chance', age: 4 },
                { name: 'Sassy', age: 14 },
                { name: event.target.value, age: 14 }            
            ]
        })
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
                onClick={this.togglePetsHandler}>Switch Pet</button>
            {petsRender}
        </div>
        );
    }
}

export default App;