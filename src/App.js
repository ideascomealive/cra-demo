import React, { Component } from 'react';
import './App.css';
import Pet from './Pet/Pet';

class App extends Component {
    render() {
        return (
        <div className="App">
            <h1 className="App-title">Hi Everybody</h1>
            <Pet />
        </div>
        );
    }
}

export default App;