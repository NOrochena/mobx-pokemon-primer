// The two main mobx-react functions that you will use in MobX Stores. 
// Observable is a tag you put on specific state attributes that you want components to update on change
// Decorate is a function that takes a Store and an oobject of the 
// specific state attributes that you want to tag with observable.
import { observable, decorate } from 'mobx'

// MobX stores are commonly just classes
export class PokemonStore {
    // State attributes with initial values.
    pokemons = []
    pokemonsStatus = "Complete"
    currentOffset = 0
    pageTitle = 'MobX Primer'

    // Async function that makes a fetch call to the Pokemon Api than 
    // alters the state attributes: pokemons, currentOffset, and pokemonStatus
    async fetchPokemon() {
        this.pokemonsStatus = "Fetching"
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.currentOffset}&limit=20`)
        const json = await resp.json()
        this.pokemons = [...this.pokemons, json.results].flat()
        this.currentOffset += 20
        this.pokemonsStatus = "Complete"
    }
}

// Docrate functions are invoked in the same file as the Store it will accept as an arguument.
// The PokemonStore attributes: pokesmons, pokemonStatus, and pageTitle will trigger an rerender
// on components in which they exist because they are marked with observable here. 
decorate(PokemonStore, {
    pokemons: observable,
    pokemonsStatus: observable,
    pageTitle: observable
})
 // Exporting an instance of the PokemonStore
export default new PokemonStore()