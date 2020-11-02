<template>
  <section>
    <FeatureRecommended />
    <div class="grid_4_columns">
  <GamingCard />

    </div>
  </section>
</template>

<script>
import FeatureRecommended from "@/components/global/FeatureRecommended"
import GamingCard from "@/components/global/cards/GamingCard"

export default {
  data() {
    return {

    }
  },
  components: {
   GamingCard,
   FeatureRecommended
  }
}
</script>

<style lang="scss" scoped>

</style>