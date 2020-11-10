<template>
  <section class="gameinfo__description">
    <div>
      <img src="@/assets/valorant/valorant_1.jpg" alt="valorant" class="valo" />
      <h3>Description</h3>
      <p class="p2">
        It's a 5v5 tac-shooter matchup to plant or defuse the Spike in a
        one-life-per-round, first to 13 series. More than guns and bullets,
        you'll choose an Agent armed with adaptive, swift, and lethal abilities
        that create opportunities to let your gunplay shine.Creativity is your
        greatest weapon.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gameinfo__description {
  width: 50%;
  height: max-content;
  background-color: $card;
  border-radius: $border-radius;
  box-shadow: $small_card_box_shadow;

  img {
    width: 100%;
  }
  h3 {
    text-align: center;
    margin: $S;
  }
  p {
    padding: $S;
  }
}
@media only screen and (max-width: 700px) {
  .gameinfo__description {
    width: 85vw;
    margin-bottom: $M;

    img {
      width: 85vw;
    }
  }
}
</style>
