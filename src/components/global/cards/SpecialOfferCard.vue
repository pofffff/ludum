<template>
  <article class="special__offers_card">
    <img src="https://cdn.mos.cms.futurecdn.net/3H8Ur89ptqGLvNcCShW6Dh.jpg" alt="">
    <h4>VALORANT</h4>
    <p>Offer ends at November 3rd</p>
    <p>-50% 20,00£ now only 10,00£</p>
    <PrimaryButton button_text="Buy 10,00 £" />
  </article>
</template>

<script>
import PrimaryButton from "@/components/global/buttons/PrimaryButton"
export default {
  data() {
  },
  components: {
    PrimaryButton
  }
}
</script>

<style lang="scss" scoped>
    img {
    height: 100%;
    width: 100%;
  }

  article {
    background-color: $card;
  }
</style>