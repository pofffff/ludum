<template>
  <section class="game__info wrapper">
  <GameTrailer />
  <PcRequirement />
  <GameStreams />
  </section>
</template>

<script>
import GameTrailer from "@/components/GameTrailer"
import PcRequirement from "@/components/PcRequirement"
import GameStreams from "@/components/GameStreams"
export default {
components: { GameTrailer, PcRequirement, GameStreams }
}
</script>

<style>

</style>