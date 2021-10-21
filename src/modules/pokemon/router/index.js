export default {
  name: 'pokemon',
  component: () => import(/* webpackChunkName: "pokemon-view" */ '@/modules/pokemon/views/PokemonView.vue'),
  // children: [
  //   {
  //     path: ':id',
  //     name: 'pokemon-id',
  //     component: () => import(/* webpackChunkName: "pokemon-view" */ '@/modules/pokemon/views/PokemonDetailView.vue')
  //   },
  // ]
}