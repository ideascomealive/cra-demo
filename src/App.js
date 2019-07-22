import React, { Component } from 'react';
import './App.css';
import Pet from './Pet/Pet';

class App extends Component {
    state = {
        pets: [
            { name: 'Houla', age: 14 },
            { name: 'Casey', age: 12 },
            { name: 'Sam', age: 10 }            
        ],
        showPets: false
    }
    
    switchPetHandler = (newName) => {
        this.setState({
            pets: [
                { name: newName, age: 4 },
                { name: 'Sassy', age: 14 },
                { name: 'Shadow', age: 14 }            
            ]
        })
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
        
        //start with a default state of null
        let petsRender = null;

        //create condition inside the render but outside jsx return
        if (this.state.showPets) {
            petsRender = (
            <div>
              {this.state.pets.map(pet => {
                  return <Pet
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