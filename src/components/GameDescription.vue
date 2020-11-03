<template>
  <section class="gameinfo__description">
  <div>
  <img src="@/assets/valorant/valorant_3.jpg" alt="valorant" class="valo">
  <h3>Description</h3>
  <p class="p2">It's a 5v5 tac-shooter matchup to plant or defuse the Spike in a one-life-per-round, first to 13 series. More than guns and bullets, you'll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine.Creativity is your greatest weapon.</p>
  </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.gameinfo__description {
width: 350px;
height: 350px;
background-color: $card;
border-radius: $border-radius;

  img {
    width: 350px;
  }
  h3{
    text-align: center;
    margin: $S;
  }
  p{
    padding: $S;
  }
}

</style>