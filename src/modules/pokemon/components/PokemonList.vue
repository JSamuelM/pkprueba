<template>
  <div class="container">
    <div class="input">
      <input
        type="text"
        placeholder="Buscar Pokemon..."
        v-model="name"
      >
    </div>
    <div class="d-flex pokemon-list-container">
      <Pokemon
        v-for="(pokemon, index) in pokemonsByName"
        :key="pokemon"
        :pokemon="pokemon"
        :id="index + 1"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'
export default {
  components: {
    Pokemon: defineAsyncComponent(() => import('./Pokemon.vue'))
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    
  },
  computed: {
    ...mapGetters('pokemon', ['getPokemonsByName']),
    pokemonsByName() {
      return this.getPokemonsByName(this.name)
    },
  },
}
</script>

<style lang="stylus" scoped>
.pokemon-list-container
  flex-direction: row
  flex-wrap: wrap
  align-items: center
  justify-content: center
  width: 100%
  > div
    flex: 48%
    height: 100px
.input
  margin: 0 auto
  width: 50%
  input
    height: 20px
    font-size: 16px
    padding: 5px 10px
    width: 100%
</style>