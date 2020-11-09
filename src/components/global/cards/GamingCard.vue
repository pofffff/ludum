<template>
  <article @click="showGameInfo"  class="gaming__card"> 
    <div class="card__image">
    <img :src="require(`@/assets/${game.images[0]}`)" alt="">
    </div>
    <div class="gaming__card__text">
      <h3>{{game.name}}</h3>
      <h4>{{game.description}}</h4>
      <p class="p1">It's a 5v5 tac-shooter matchup to plant or defuse the Spike in a one-life-per-round, first to 13 series.</p>
      <PrimaryButton button_text="Buy 12,00£" />
    </div>
  </article>
</template>

<script>
import PrimaryButton from "@/components/global/buttons/PrimaryButton"
export default {
data() {
  return {
    
  }
},
props: {
  game: Object
},
components: {
  PrimaryButton
},
methods: {
  showGameInfo() {
    this.$router.push('/game-info').then(() => window.scrollTo(0, 0));
  }
}
}
</script>

<style lang="scss" scoped>
  img {
    border-radius: $border-radius;
    height: 100%;
    object-fit: fill;
    object-position: center;
    width: 100%;
  }

.card__image {
  height: 200px;
  margin-bottom: $S;
}

.gaming__card__text p {
  margin-bottom: $M;
}

.gaming__card__text h3 {
  text-transform: uppercase;
}

</style>