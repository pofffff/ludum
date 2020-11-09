<template>
  <section class="special__offer__section wrapper">
    <h3>SPECIAL OFFERS</h3>
    <div clasS="grid_5_columns card-list">
         <SpecialOfferCard class="card" v-for="(game,index) in SpecialOfferGames" :key="index" :game="game" />
    </div>
  </section>
</template>

<script>
 import json from "@/data/games.json"
import SpecialOfferCard from "@/components/global/cards/SpecialOfferCard"
export default {
  data() {
    return {
         games : json.games
    }
  },
  components: {
    SpecialOfferCard
  },
  computed: {
    SpecialOfferGames() {
      const arr = this.games;
      const number = 13;
      const newArray = this.games.slice(5,number)
      return newArray
    }
  }
}
</script>

<style lang="scss scoped">

</style>