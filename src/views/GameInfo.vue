<template>
  <section class="game__info wrapper">
  <GameTrailer />
  <GameDescription />
  <PcRequirement />
  <GameStreams />
  </section>
</template>

<script>
import GameTrailer from "@/components/GameTrailer"
import PcRequirement from "@/components/PcRequirement"
import GameDescription from "@/components/GameDescription"
import GameStreams from "@/components/GameStreams"
export default {
components: { GameTrailer, PcRequirement, GameDescription, GameStreams }
}
</script>

<style lang="scss" scoped>

</style>