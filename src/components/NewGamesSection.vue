<template>
  <section class="new__game__section wrapper ">
    <H3>NEW GAMES</H3>
    <div class="grid_5_columns card-list">
      <GamingCard class="gaming__card card"  v-for="(game,index) in newGames" :key="index" :game="game" />
    </div>
  </section>
</template>

<script>
import json from "@/data/games.json"
import GamingCard from "@/components/global/cards/GamingCard"
export default {
  data() {
    return {
     games : json.games
    }
  },
  components: {
    GamingCard
  },
  computed: {
    newGames() {
      const arr = this.games;
      const number = 8;
      const newArray = this.games.slice(0,number)
      return newArray
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @use "main.scss";

.gaming__card{
  cursor: pointer;
}

.new__game__section h3 {
  margin-bottom: $M;
}

</style>