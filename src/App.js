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

    render() {
        return (
        <div className="App">
            <h1 className="App-title">Hi Everybody</h1>
            <button>Switch Pet</button>
            <Pet name={this.state.pets[0].name} age={this.state.pets[0].age} />
            <Pet name={this.state.pets[1].name} age={this.state.pets[1].age} />
            <Pet name={this.state.pets[2].name} age={this.state.pets[2].age}>I'm a ferocious beast</Pet>
        </div>
        );
    }
}

export default App;