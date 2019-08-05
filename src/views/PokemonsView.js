import React from 'react';
import PokemonCard from '../components/PokemonCard'
// The two main mobx-react functions that you will use in components.
import {inject, observer } from 'mobx-react'

class PokemonsView extends React.Component {

  // In MobX, you are able to directly modify the state in stores. 
  handleChangeTitle = () => {
    this.props.pokemonStore.pageTitle = "Pokemon List"
  }

  // You can also call fucntions within Stores which modify the state to trigger a re-render.
  handleFetchPokemon = () => {
    this.props.pokemonStore.fetchPokemon()
  }

  render() {
    // You can deconstruct the state in render() to reduce code repitition
    const {pokemons, pokemonsStatus} = this.props.pokemonStore
    const {firstName, lastName} = this.props.userStore

    // Common practice to protect against long API calls
    if (pokemonsStatus === 'Fetching') return null
    return (
      <div>
        <h1>{`${firstName} ${lastName}'s ${this.props.pokemonStore.pageTitle}`}</h1>
        <button onClick={this.handleChangeTitle} className="ui button">Change Title</button>
        <button onClick={this.handleFetchPokemon} className="ui button">Add Next 20 Pokemon</button>
        <div className="ui cards">
            {pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon} />)}
        </div>
      </div>
    );
  }
}

// Very similar to Redux syntax. Inject allows you to access specific stores in the component.
// observer takes in a single argument, the current component. 
export default inject("userStore", "pokemonStore")(observer(PokemonsView));