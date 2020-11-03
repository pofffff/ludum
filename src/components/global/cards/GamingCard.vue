<template>
  <article class="gaming__card"> 
    <img :src="require(`@/assets/${game.images[0]}`)" alt="">
    <div>
      <h3>{{game.name}}</h3>
    <h4>{{game.description}}</h4>
    <p>It's a 5v5 tac-shooter matchup to plant or defuse the Spike in a one-life-per-round, first to 13 series.</p>
    <PrimaryButton button_text="Buy" />
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
}
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
</style>