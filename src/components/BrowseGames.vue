<template>
    <section class="browse__section wrapper">
      <div>
        <FilterGamesMobile />
      <FilterGames class="filter__games" />
      <FilterResults />
      <TopSellingGames v-if="showTopGames" />
      </div>
    </section>
</template>

<script>
import FilterGames from "@/components/FilterGames"
import FilterResults from "@/components/FilterResults"
import TopSellingGames from "@/components/TopSellingGames"
import FilterGamesMobile from "@/components/global/layout/FilterGamesMobile"
export default {
  data() {
    return {
      showTopGames: false
    }
  },
  components: {
    FilterGames,
    FilterResults,
    FilterGamesMobile,
    TopSellingGames
  }
}
</script>

<style lang="scss" scoped>
  .browse__section div {
   display: grid;
   grid-template-columns: 18% 82%;
   column-gap: 20px;
  }

  @media only screen and (max-width: 1200px) {
    .filter__games {
      display: none;
    }

    .browse__section div {
      grid-template-columns: 100%;
    }
  }




</style>