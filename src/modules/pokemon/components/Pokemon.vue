<template>
  <div class="pokemon d-flex"
    @click="$router.push({name: 'pokemon-id', params: {id: id}})"
  >
    <div>
      <p>{{ pokemon.name }}</p>
      <!-- <ul>
        <li>Grass</li>
        <li>Poison</li>
      </ul> -->
    </div>
    <div>
      <img
        :src="imgSrc"
        alt="pokemon"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    }
  },
}
</script>

<style lang="stylus" scoped>
.pokemon
  align-items: center
  cursor: pointer
  background-color: white
  border: 1px solid #0dcaf0
  color: black
  justify-content: space-around
  margin: 10px 5px
  p
    font-weight: bold
    text-transform: capitalize
  ul
    padding: 0
    li
      list-style: none
      text-transform: capitalize
</style>