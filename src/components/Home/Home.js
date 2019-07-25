import React from 'react';
import './Home.css';

const Home = (props) => {
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
    
    //use title in h1
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