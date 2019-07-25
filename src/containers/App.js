import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home/Home';
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
        let petsRender = null;

        if (this.state.showPets) {
            petsRender = (
            <div>
              <PetList pets={this.state.pets} 
                    clicked={this.deletePetHandler}
                    changed={this.petChangeHandler} />
            </div>
            );
        } 

        //pass title directly to Home
        return (
        <div className="App">
            <Home
                title={this.props.title}
                showPets = {this.state.showPets}
                pets={this.state.pets} 
                clicked={this.togglePetsHandler}
                />
            {petsRender}
        </div>
        );
    }
}

export default App;