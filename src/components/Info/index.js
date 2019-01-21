import React from 'react';
import './info.css';
import loader from '../../hoc/Loader';

import stickyComponent from '../../hoc/Sticky';

const info = ({selectedPokemon}) => {
    const pokemon = selectedPokemon[0];

    return(
        <div className="info">
            <div>
                <h1>Selected Pokemon</h1>
                <h2 className={`poke-header`}> {pokemon.num} - {pokemon.name}</h2>
                <img src={pokemon.img}/>
                <ul>
                    {pokemon.type.map( (type, i) => <li key={i} className={type}>{type}</li>)}
                </ul>
                <ul>
                    {pokemon.weaknesses.map( (type, i) => <li key={i} className={type}>{type}</li>)}
                </ul>
            </div>   
        </div>
    )
}

export default stickyComponent(loader('selectedPokemon')(info));