import { pokemonApi, pokemonImageApi } from "@/api/pokemon"

export const loadPokemons = async ({commit}) => {
  const {data} = await pokemonApi.get('/pokemon?limit=150')

  commit('setPokemons', data.results)
}

// export const loadPokemonsImage = async ({commit}, url) => {
//   const resp = await pokemonImageApi.get(`/${url}`)
//   console.log(resp);
  
// }

export const loadPokemon = async ({commit}, id) => {
  await pokemonApi.get(`/pokemon/${id}`)
    .then((resp) => {
      commit('setPokemon', resp.data)
    })

}