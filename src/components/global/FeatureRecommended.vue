<template>
  <section class="featured__section wrapper">
    <h3>FEATURE & RECOMMENDED</h3>
      <img src="https://i.gadgets360cdn.com/large/league_1572258716331.jpg?output-quality=80&output-format=webp" alt="">
      <img class="feature__selector" src="@/assets/feature_selector.png" alt="">
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }

  .feature__selector {
    display: block;
    margin:auto;
    width: auto;
    height: 15px;
    transform: translateY(-30px);
  }
</style>