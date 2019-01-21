import React from 'react';
import Pokemon from './Pokemon'
import './pokemons.css';
import Focusable from '../../hoc/Focusable';
import loader from '../../hoc/Loader';

const pokemons = ({pokemons, onPokemonClicked})=> {
    return(
        <div className="pokemons">
            {
                pokemons.map( (pokemon, i) => 
                    <Focusable
                        onHover={onPokemonClicked} 
                        data={pokemon} 
                        key={i}>
                        <Pokemon 
                            onPokemonClicked={onPokemonClicked} 
                            pokemon={pokemon}/>
                    </Focusable>
                )
            }
        </div>
    )
}

export default loader('pokemons')(pokemons);