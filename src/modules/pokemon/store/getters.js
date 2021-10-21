export const getPokemonsByName = (state) => (term = '') => {
  if (term.length === 0) {
    return state.pokemons
  }

  return state.pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getPokemon = (state) => {
  return state.pokemon
}

export const getPokemonByUrl = (state) => (url = '') => {
  const pokemon = 
    state.pokemons.find(pokemon => pokemon.url === url)

  if (!pokemon) return

  return pokemon
}