<template>
  <section class="filter__section">
    <h3>BROWSE</h3>
    <div class="filter">
      <h5>BROWSE BY CATEGORIES</h5>
      <p>Top selling games</p>
      <p>New releases</p>
      <p>Most popular games</p>
      <p>Upcoming</p>
      <p>Featured</p>
      <p>Classics</p>
      <h5>BROWSE BY GENRE</h5>
      <p>Adventure</p>
      <p>Action</p>
      <p>RPG</p>
      <p>Sports</p>
      <p>Strategy</p>
      <p>Racing</p>
      <p>Massive Multiplayer</p>
      <p>Casual</p>
      <p>Free to play</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @use "main.scss";
  .filter {
    background-color: $card;
    padding: $M;
    border-radius: $border_radius;
  }

  .filter__section {
  }
</style>