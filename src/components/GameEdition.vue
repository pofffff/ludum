<template>
  <section class="gameinfo__gameedition">
    <article class="gameedition">
      <h4>Standard edition</h4>
      <button class="primary_button">Buy 20,00£</button>
    </article>
    <article class="gameedition">
      <h4>Deluxe edition</h4>
      <button class="primary_button">Buy 35,00£</button>
    </article>
    <article class="gameedition">
      <h4>Collector's edition</h4>
      <button class="primary_button">Buy 60,00£</button>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gameedition {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  background-color: $card;
  padding: $M;
  border-radius: $border_radius;
  box-shadow: $small_card_box_shadow;
  margin: $M 0;

  h4 {
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 700px) {
  .gameedition {
    width: 85vw;
  }
  button {
    font-size: 12px;
  }
}
</style>
