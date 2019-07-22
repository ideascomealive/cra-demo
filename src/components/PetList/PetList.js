import React from 'react';
import Pet from './Pet/Pet'

const PetList = (props) => props.pets.map((pet, index) => {
        return <Pet
            key={pet.id}
            click={() => props.clicked(index)}
            changed={(event) => props.changed(event, pet.id)}
            name={pet.name}
            age={pet.age} />
    });

export default PetList;