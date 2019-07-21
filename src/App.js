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
        ],
        showPets: false //hide/show boolean
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
          
    //Using => arrow syntax binds `this`
    togglePetsHandler = () => {
      const show = this.state.showPets;
      this.setState({showPets: !show});
    }
    //with setState, state merges

    render() {
        const styles = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
        <div className="App">
            <h1 className="App-title">Hi Everybody</h1>
            <button 
                style={styles}
                onClick={this.togglePetsHandler}>Switch Pet</button>
          {this.state.showPets ? 
            <div>
              <Pet name={this.state.pets[0].name} 
                  age={this.state.pets[0].age} />
              <Pet name={this.state.pets[1].name} 
                  age={this.state.pets[1].age} />
              <Pet name={this.state.pets[2].name} 
                  age={this.state.pets[2].age} 
                  click={this.switchPetHandler.bind(this, 'Lionel')}
                  changed={this.petChangeHandler} >I am ferocious beast</Pet>
            </div> : null
          }
        </div>
        );
    }
}

export default App;