import React, { useEffect } from 'react';
import './Home.css';

const Home = (props) => {

    useEffect(() => {
        console.log('Home.js useEffect - update render');
        setTimeout(() => {
            alert('Home.js http request finished - update render');
        }, 1000);
    }, [props.pets]);
    
    useEffect(() => {
        console.log('Home.js useEffect - creation render');
        setTimeout(() => {
            alert('Home.js http request finished - creation render');
        }, 1000);

        return () => {
            console.log('Home.js useEffect - unmount cleanup work ')
        };
    }, []); 
    
    useEffect(() => {
        return () => {
            console.log('Home.js useEffect - all cleanup work ')
        };
    }); 

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
    
    if (props.petsLength <= 2) {
        classes.push('red');
    }
    if (props.petsLength <= 1) {
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

export default React.memo(Home);