<template>
  <section class="filter__section">
    <h3>MOT POPULAR GAMES</h3>
    <div class="grid_4_columns">
        <GamingCard v-for="(game,index) in this.games" :key="index" :game="game" />
    </div>
  </section>
</template>

<script>
import GamingCard from "@/components/global/cards/GamingCard"
import json from "@/data/games.json"
export default {
  data() {
    return {
      games: json.games
    }
  },
  components: {
    GamingCard
  }
}
</script>

<style lang="scss" scoped>
  .filter__section h3 {
    text-align: center;
  }
</style>