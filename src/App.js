//import useState instead of component
import React, { useState } from 'react';
import './App.css';
import Pet from './Pet/Pet';

//change class to function
const App = props => {
    //create initial state using useState and array destructuring
   const [petState, setPetState] = useState({
    pets: [
        { name: 'Houla', age: 14 },
        { name: 'Casey', age: 12 },
        { name: 'Sam', age: 10 }            
    ],
    //if I had additional state it will get lost with useState
    //when switchPetHandler is called this value will be lost
    moreState: 'some other value'
   });

   //add the handler as a function inside a function
   const switchPetHandler = () => {
   //call the updater function to change the state    
    setPetState({
        pets: [
            { name: 'Chance', age: 4 },
            { name: 'Sassy', age: 14 },
            { name: 'Shadow', age: 14 }            
        ]
    });
   };

   //functional components only need to return jsx
   //we change the way we tie the element state value
    return (
        <div className="App">
            <h1 className="App-title">Hi Everybody</h1>
            <button onClick={switchPetHandler}>Switch Pet</button>
            <Pet name={petState.pets[0].name} age={petState.pets[0].age} />
            <Pet name={petState.pets[1].name} age={petState.pets[1].age} />
            <Pet name={petState.pets[2].name} age={petState.pets[2].age}>I'm a ferocious beast</Pet>
        </div>
    );
}

export default App;