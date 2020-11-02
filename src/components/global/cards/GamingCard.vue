<template>
  <article class="gaming__card"> 
    <h3>{{game.name}}</h3>
    <img :src="require(`@/assets/${game.images[0]}`)" alt="">
    <h4>{{game.description}}</h4>
    <p>It's a 5v5 tac-shooter matchup to plant or defuse the Spike in a one-life-per-round, first to 13 series. More than guns and bullets, you'll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine.Creativity is your greatest weapon.</p>
    <PrimaryButton button_text="Buy" />
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