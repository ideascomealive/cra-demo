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
    
    switchPetHandler = (newName) => {
        //never mutate state directly example: `this.state.pets = []` will not work
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

    render() {
        // we add styles as a js object
        const styles = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        // we add a reference inline to the style we defined above
        return (
        <div className="App">
            <h1 className="App-title">Hi Everybody</h1>
            <button 
                style={styles}
                onClick={this.switchPetHandler.bind(this, 'Snarf')}>Switch Pet</button>
            <Pet name={this.state.pets[0].name} 
                age={this.state.pets[0].age} />
            <Pet name={this.state.pets[1].name} 
                age={this.state.pets[1].age} />
            <Pet name={this.state.pets[2].name} 
                age={this.state.pets[2].age} 
                click={this.switchPetHandler.bind(this, 'Lionel')}
                changed={this.petChangeHandler} >I am ferocious beast</Pet>
        </div>
        );
    }
}

export default App;