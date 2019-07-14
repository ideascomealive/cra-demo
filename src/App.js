import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        // return (
        // <div className="App">
        //   <header className="App-header">
        //     <h1 className="App-title">Welcome to React</h1>
        //   </header>
        //   <p className="App-intro">
        //     To get started, edit <code>src/App.js</code> and save to reload.
        //   </p>
        // </div>
        // );

        // this is a js way to create a react component - could run in the browser standalone
        return React.createElement('div', null, 'h1', 'Hi Everybody');
    }
}

export default App;