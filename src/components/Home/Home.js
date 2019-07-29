import React, { useEffect } from 'react';
import './Home.css';

const Home = (props) => {

    useEffect(() => {
        console.log('Home.js useEffect - update render');
        setTimeout(() => {
            alert('Home.js http request finished - update render');
        }, 1000);
    }, [props.pets]); //we added a second param to useEffect to only run when props.pets changes
    
    //you can have multiple useEffect()'s
    useEffect(() => {
        console.log('Home.js useEffect - creation render');
        setTimeout(() => {
            alert('Home.js http request finished - creation render');
        }, 1000);
    }, []); //an empty array will restrict useEffect() to the first render

    const styles = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    if (props.showPets) {
        styles.backgroundColor = 'red'
    }
    const classes = [];
    
    if (props.pets.length <= 2) {
        classes.push('red');
    }
    if (props.pets.length <= 1) {
        classes.push('huge');
    }
    
    return ( 
    <div>
      <h1 className={classes.join(' ')}>{props.title}</h1>
      <button 
            style={styles}
          onClick={props.clicked}>Toggle Pet</button>
      </div>
    );
};

export default Home;