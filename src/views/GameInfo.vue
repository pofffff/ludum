<template>
  <section class="game__info wrapper">
  <GameTrailer />
  <GameEdition />
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
import GameEdition from "@/components/GameEdition"
export default {
components: { GameTrailer, PcRequirement, GameDescription, GameStreams, GameEdition }
}
</script>

<style lang="scss" scoped>

</style>