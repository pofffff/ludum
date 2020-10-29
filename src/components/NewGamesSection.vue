<template>
  <section class="new__game__section wrapper">
    <H3>NEW GAMES</H3>
  <GamingCard />
  </section>
</template>

<script>
import GamingCard from "@/components/global/cards/GamingCard"
export default {
  data() {
    return {

    }
  },
  components: {
    GamingCard
  }
}
</script>

<style lang="scss" scoped>

</style>