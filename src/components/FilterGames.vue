<template>
  <section class="filter__section">
    <h3>BROWSE</h3>
    <div class="filter">
      <h5>BROWSE BY CATEGORIES</h5>
      <p class="p1">Top selling games</p>
      <p class="p1">New releases</p>
      <p class="p1">Most popular games</p>
      <p class="p1">Upcoming</p>
      <p class="p1">Featured</p>
      <p class="p1">Classics</p>
      <h5>BROWSE BY GENRE</h5>
      <p class="p1">Adventure</p>
      <p class="p1">Action</p>
      <p class="p1">RPG</p>
      <p class="p1">Sports</p>
      <p class="p1">Strategy</p>
      <p class="p1">Racing</p>
      <p class="p1">Massive Multiplayer</p>
      <p class="p1">Casual</p>
      <p class="p1">Free to play</p>
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

  .filter p {
    font-family: $body_font;
    margin-bottom: 12px;
  }

  h5 {
    color: $site_color;
    margin-bottom: 12px;
  }


</style>