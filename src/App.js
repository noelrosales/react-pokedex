import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


import Header from './components/Header';
import Pokemons from './components/Pokemons';
import Info from './components/Info';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons : [],
      selectedPokemon : [],
      newPokemons:[],
      keyword : ''
    }
    this.pokemons = []
  }

  onSearch = (keyword) => {
    if(keyword === ''){
      this.loadData();
      return
    }

    this.setState({
      keyword : keyword
    })

    const filtered = this.pokemons.filter(monster => {
      return monster.name.toLowerCase().includes(keyword);
    })

    this.setState({
      pokemons:filtered
    })
  
  }

  onPokemonClicked = (pokemon) => {
    const selected = {...pokemon};
    selected.evolvedPokemons = [];
    const evolutions = [...(selected.next_evolution || []), ...(selected.prev_evolution || [])];
    
    for(let i = 0; i < evolutions.length; i++){
      const evolvedPokemon = this.state.pokemons.find((p)=> p.num === evolutions[i].num);
      selected.evolvedPokemons.push(evolvedPokemon);
    }

    this.setState({
      selectedPokemon : pokemon ? [ pokemon, ...selected.evolvedPokemons] : []
    })

    // this.setState(prevState => ({
    //   newPokemons: [...prevState.newPokemons, [ pokemon, ...selected.evolvedPokemons]]
    // }))

  }

  onPokemonRemove = (pokemon) => {
    //remove pokemon from list
  }

  componentDidMount(){
    this.loadData();
  }

  loadData(callback){
    axios.get('/data/pokedex.json')
      .then( res => {
        this.setState({
          pokemons : res.data.pokemons
        })
        this.pokemons = res.data.pokemons

        if(callback)
          callback(res.data.pokemons)
      })
  }

  render() {
    const {pokemons} = this.state;
    
    return (
      <div className="App">
        <Header onSearch= {this.onSearch}/>
        <Pokemons 
          pokemons={this.state.pokemons}
          onPokemonClicked = {this.onPokemonClicked}
        />
        <Info selectedPokemon = {this.state.selectedPokemon}/>
      </div>
    );
    
  }
}

export default App;
