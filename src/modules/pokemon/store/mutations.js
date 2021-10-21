export const setPokemons = (state, pokemons) => {
  state.pokemons = [...state.pokemons, ...pokemons]
  state.isLoading = false
}

export const setPokemon = (state, pokemon) => {
  state.pokemon = {...pokemon}
}
