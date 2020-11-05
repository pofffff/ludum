<template>
    <section class="browse__section wrapper">
      <div>
      <FilterGames class="filter__games" />
      <FilterResults />
      </div>
    </section>
</template>

<script>
import FilterGames from "@/components/FilterGames"
import FilterResults from "@/components/FilterResults"
export default {
  data() {
    return {

    }
  },
  components: {
    FilterGames,
    FilterResults
  }
}
</script>

<style lang="scss" scoped>
  .browse__section div {
   display: grid;
   grid-template-columns: 18% 82%;
   column-gap: 20px;
  }

  @media only screen and (max-width: 600px) {
    .filter__games {
      display: none;
    }

    .browse__section div {
      grid-template-columns: 100%;
    }

  }
</style>