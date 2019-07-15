//import useState instead of component
import React, { Component } from 'react';
import './App.css';
import Pet from './Pet/Pet';

class App extends Component {
    state = {
        pets: [
            { name: 'Houla', age: 14 },
            { name: 'Casey', age: 12 },
            { name: 'Sam', age: 10 }            
        ]
    }
    
    switchPetHandler = () => {
        //never mutate state directly example: `this.state.pets = []` will not work
        this.setState({
            pets: [
                { name: 'Chance', age: 4 },
                { name: 'Sassy', age: 14 },
                { name: 'Shadow', age: 14 }            
            ]
        })
    }

    //we add a reference to the method in onClick
    render() {
        return (
        <div className="App">
            <h1 className="App-title">Hi Everybody</h1>
            <button onClick={this.switchPetHandler}>Switch Pet</button>
            <Pet name={this.state.pets[0].name} age={this.state.pets[0].age} />
            <Pet name={this.state.pets[1].name} age={this.state.pets[1].age} />
            <Pet name={this.state.pets[2].name} age={this.state.pets[2].age} click={this.switchPetHandler} >I am ferocious beast</Pet>
        </div>
        );
    }
}

export default App;