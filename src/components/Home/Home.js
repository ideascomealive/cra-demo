//imported useRef to create functional refs
import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = (props) => {

    //set up my ref using useRef hook - it will auto click the button :) - null as an initial value
    const toggleBtnRef = useRef(null);
    //toggleBtnRef.current.click(); // if it is run the click here it will throw an error because it has not rendered yet

    useEffect(() => {
        console.log('Home.js useEffect - update render');
        setTimeout(() => {
            alert('Home.js http request finished - update render');
        }, 1000);
    }, [props.pets]);
    
    useEffect(() => {
        console.log('Home.js useEffect - creation render');
        // not using in favor of button click
        // setTimeout(() => {
        //     alert('Home.js http request finished - creation render');
        // }, 1000);
        // will only run after first creation so we add the click to the ref
        toggleBtnRef.current.click();

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
          ref={toggleBtnRef}
      </div>
    );
};

export default React.memo(Home);