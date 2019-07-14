import React, { Component } from 'react';
import './App.css';
import Pet from './Pet/Pet';

class App extends Component {
    render() {
        return (
        <div className="App">
            <h1 className="App-title">Hi Everybody</h1>
            <Pet name="Houla" age="14" />
            <Pet name="Casey" age="12" />
            <Pet name="Sam" age="10">I'm a ferocious beast</Pet>
        </div>
        );
    }
}

export default App;