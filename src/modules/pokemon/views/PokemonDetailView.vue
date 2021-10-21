<template>
  <div>
    <div class="card">
      <button class="goBack" @click="$router.push({name: 'pokemon'})">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button class="favorite" @click="addFavorite">
        <i class="fa fa-heart"></i>
      </button>
      <div class="card-info">
        <div class="pokemon">
          <h1>{{ pokemon.name }}</h1>
          <img :src="imgSrc" alt="image pokemon" class="pokemon-image">
          <p class="pokemon-id">#{{ pokemon.id }}</p>
        </div>
        <div class="info">
          <div class="abilities">
            <h3>Habilidades</h3>
            <ul>
              <li
                v-for="(abilities, index) in pokemon.abilities"
                :key="index"
              >
                {{ abilities.ability.name }}
              </li>
            </ul>
          </div>
          <div class="information">
            <h3>Information</h3>
            <p><span>Peso: </span>{{ pokemon.weight }} lb</p>
            <p><span>Size: </span>{{  }}</p>
            <p><span>Género: </span>34</p>
          </div>
        </div>
        <!-- <p>{{ pokemon }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
    }
  },
  methods: {
    ...mapActions('pokemon', ['loadPokemon']),
    loadInfo() {
      const id = this.$route.params.id
      this.loadPokemon(id)
    },
    addFavorite() {
      console.log({poke: this.pokemon});
    }
  },
  computed: {
    ...mapState('pokemon', ['pokemon'])
  },
  created() {
    this.loadInfo()
  }
}
</script>

<style lang="stylus" scoped>
button
  cursor: pointer
  color: white
  top: 0
  height: 50px
  font-size: 20px
  position: absolute
  width: 50px
button.goBack
  background: #0dcaf0
  border: 1px solid #0dcaf0
  left: 0px
button.favorite
  background: #dc3545
  border: 1px solid #dc3545
  right: 0px
.card
  align-items: center
  background: white
  color: black
  display: flex
  justify-content: center
  padding: 20px 30px
  margin: 2em auto
  width: 75%
  position: relative
  .card-info
    display: flex
    flex-direction: row
    justify-content: space-around
    width: 100%
    text-transform: capitalize
    .pokemon
      display: flex
      flex-direction: column
      justify-content: center
      img.pokemon-image
        background: #2c3e50
        border-radius: 50%
        height: 100px
        width: 100px
      .pokemon-id
        font-size: 20px
        font-weight: bold
        margin-bottom: 0px
        text-align: center
    .info
      display: flex
      flex-direction: column
      .abilities        
        h3
          font-weight: bold
        ul
          padding-left: 10px
          li
            color: white
            background: #198754
            border-radius: 15px
            display: inline-block
            list-style: none
            padding: 5px 10px
            margin-right: 5px
            margin-bottom: 5px
      .information
        p
          margin: 5px 0px
          span
            font-weight: bold

</style>