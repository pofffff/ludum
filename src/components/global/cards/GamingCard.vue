<template>
  <article class="gaming__card"> 
    <h3>VALORANT</h3>
    <img src="https://i.gadgets360cdn.com/large/valorant_1591074256451.jpeg?downsize=950:*&output-quality=80&output-format=webp" alt="">
    <h4>Description</h4>
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
  button_text: String
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