<template>
    <section class="browse__section wrapper">
      <div>
      <FilterGames />
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
</style>