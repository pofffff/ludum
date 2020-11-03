<template>
  <article class="special__offers__card">
    <div class="card__image">
      <img :src="require(`@/assets/${game.images[0]}`)" alt=""> 
    </div>
    <div class="special__offers__card__text">
      <h3>{{game.name}}</h3>
      <p class="p1">Offer ends at November 3rd</p>
      <p class="price p1">-50% 20,00£ now only 10,00£</p>
    <PrimaryButton button_text="Buy 10,00 £" />
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
  components: {
    PrimaryButton
  },
  props: {
    game: Object
  }
}
</script>

<style lang="scss" scoped>
    img {
      border-radius: $border-radius;
    object-fit: fill;
    object-position: center;
    height: 200px;
    width: 100%;
  }

  .card__image {
    margin-bottom: $S
  }

  .price {
  margin-bottom: $M;
}

</style>