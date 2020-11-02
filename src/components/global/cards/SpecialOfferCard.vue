<template>
  <article class="special__offers_card">
    <div>
      <img :src="require(`@/assets/${game.images[0]}`)" alt=""> 
    </div>
    <div>
      <h4>{{game.name}}</h4>
      <p>Offer ends at November 3rd</p>
      <p>-50% 20,00£ now only 10,00£</p>
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
      object-fit: cover;
    height: 100%;
    width: 100%;
  }

  article {
    background-color: $card;
  }
</style>