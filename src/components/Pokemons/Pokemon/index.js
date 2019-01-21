import React, { Component } from 'react';
import './pokemon.css';
import {Icon} from 'react-fa';

const pokemon = ({pokemon, onPokemonClicked}) => {
    return(
        <div className="pokemon" onClick={()=> onPokemonClicked(pokemon)}>
            <div className="img-container">
                <img src={pokemon.img} alt={pokemon.name}/>
            </div>
            <h3 className="pokemon-name" >{pokemon.name}</h3>
            <div className="poke-details">
                <div>
                    { pokemon.type.map( (type, i) => <Icon key={i} className={type} name="circle"/> ) }
                </div>
                |
                <div>
                    { pokemon.weaknesses.map( (type, i) => <Icon key={i} className={type} name="circle"/> ) }
                </div>
            </div>
        </div>
    )
}

export default pokemon;