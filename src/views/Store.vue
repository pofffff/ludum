<template>
  <section>
    <FeatureRecommended />
    <BrowseGames />
    <div class="grid_4_columns">
  <GamingCard />

    </div>
  </section>
</template>

<script>
import FeatureRecommended from "@/components/global/FeatureRecommended"
import GamingCard from "@/components/global/cards/GamingCard"
import BrowseGames from "@/components/BrowseGames"

export default {
  data() {
    return {

    }
  },
  components: {
   GamingCard,
   FeatureRecommended,
   BrowseGames
  }
}
</script>

<style lang="scss" scoped>

</style>