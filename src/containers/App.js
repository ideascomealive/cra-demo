import React, { Component } from 'react';
import './App.css';
import PetList from '../components/PetList/PetList';

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

    petChangeHandler = (event, id) => {
        const petIndex = this.state.pets.findIndex(p => {
            return p.id === id;
        });
        
        const pet = {
            ...this.state.pets[petIndex]
        };

        pet.name = event.target.value;

        const pets = [...this.state.pets];
        pets[petIndex] = pet;

        this.setState({pets: pets});
    }
          
    togglePetsHandler = () => {
      const show = this.state.showPets;
      this.setState({showPets: !show});
    }

    render() {
        const styles = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        
        let petsRender = null;

        if (this.state.showPets) {
            petsRender = (
            <div>
              <PetList pets={this.state.pets} 
                    clicked={this.deletePetHandler}
                    changed={this.petChangeHandler} />
            </div>
            );
            styles.backgroundColor = 'red'
        } 

        //create an empty array to hold our class name
        const classes = [];
        
        //check the length of the array and dynamically add classes
        if (this.state.pets.length <= 2) {
            classes.push('red');
        }
        if (this.state.pets.length <= 1) {
            classes.push('huge');
        }

        //add class.join and an empty space to dynamically set className of the h1
        return (
        <div className="App">
            <h1 className={classes.join(' ')}>Hi Everybody</h1>
            <button 
                style={styles}
                onClick={this.togglePetsHandler}>Toggle Pet</button>
            {petsRender}
        </div>
        );
    }
}

export default App;