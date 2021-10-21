import axios from 'axios'

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export const pokemonImageApi = axios.create({
  baseURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
})
