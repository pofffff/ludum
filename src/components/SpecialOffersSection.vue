<template>
  <section class="special__offer__section wrapper">
    <h3>SPECIAL OFFERS</h3>
    <div clasS="grid_5_columns">
         <SpecialOfferCard />
    </div>
  </section>
</template>

<script>
import SpecialOfferCard from "@/components/global/cards/SpecialOfferCard"
export default {
  data() {

  },
  components: {
    SpecialOfferCard
  }
}
</script>

<style lang="scss scoped">

</style>