<template>
<section class="filter__mobile">
    <div @click="showFilter" >
    <h3>BROWSE</h3>
    <img src="@/assets/arrow.png" alt="">
  </div>
   <section v-if="toggleFilter" class="filter__section">
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
</section>
</template>

<script>
export default {
data() {
  return {
    toggleFilter:false
  }
},
methods: {
  showFilter() {
    this.toggleFilter = !this.toggleFilter
  }
}
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 1200px) {
  .filter__mobile {
    display: none;
  }
}


img {
  height: 12px;
  width: 12px;
}

 div {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

h3 {
  margin: 0;
  margin-right: 5px;
}

.filter {
  display: flex;
  flex-direction: column;
}


  .filter {
    background-color: $card;
    padding: $M;
    border-radius: $border_radius;
  }

  .filter p {
    font-family: $body_font;
    margin-bottom: 5px;
  }

  h5 {
    color: $site_color;
    margin-bottom: 12px;
  }
</style>