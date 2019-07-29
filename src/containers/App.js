import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home/Home';
import PetList from '../components/PetList/PetList';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('App.js constructor')
    }
    
    state = {
        pets: [
            { id: '26834', name: 'Houla', age: 14 },
            { id: '33764', name: 'Casey', age: 12 },
            { id: '82743', name: 'Sam', age: 10 }            
        ],
        showPets: false,
        showHome: true,
    }

    static getDerivedStateFromProps(props, state) {
        console.log('App.js getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('App.js componentDidMount');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('App.js shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('App.js componentDidUpdate');
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
    console.log('Render')
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

        return (
        <div className="App">
        <button onClick={ () => {
            this.setState({ showHome: false });
        }}>Remove Home</button>
        {/* Change prop to petsLength and only provide the length */}
        {this.state.showHome ? ( 
            <Home 
                title={this.props.title}
                showPets = {this.state.showPets}
                petsLength={this.state.petsLength} 
                clicked={this.togglePetsHandler}
                />
                
                ) : null}
            {petsRender}
        </div>
        );
    }
}

export default App;