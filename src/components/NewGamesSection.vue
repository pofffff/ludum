<template>
  <section class="new__game__section wrapper">
    <H3>NEW GAMES</H3>
    <div class="grid_5_columns">
      <GamingCard v-for="(game,index) in newGames" :key="index" :game="game" />
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
      const number = 5;
      const newArray = this.games.slice(0,number)
      return newArray
    }
  },
}
</script>

<style lang="scss" scoped>
  @use "main.scss";
</style>