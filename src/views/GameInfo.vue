<template>
  <section class="game__info wrapper">
  <h2 class="heading">Valorant</h2>
  <GameTrailer class="gametrailer" />
  <GameEdition class="gameeditions" />
  <GameDescription class="gamedescription" />
  <PcRequirement class="pcrequirement" />
  <GameStreams class="gamestreams"/>
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
.game__info {
  display: grid;
  justify-content: center;
  grid-template-areas: 
  'heading .'
  'trailer description'
  'edition requirement'
  'streams .';
  grid-template-columns: 50% 50%;

.heading {
  grid-area: heading;
}
  .gametrailer{
    grid-area: trailer;
  }

  .gameeditions {
    grid-area: edition;
 
  }
  .gamedescription{
    grid-area: description;
    justify-self: center;
  }
  .pcrequirement{
    grid-area: requirement;
    justify-self: center;
  }
  .gamestreams{
    grid-area: streams;

  }
}
@media only screen and (max-width: 700px) {
  .game__info{
    display: grid;
    justify-content: center;
    grid-template-areas: 
    'heading'
  'description'
  'trailer'
  'edition'
  'requirement'
  'streams ';
  grid-template-columns: 85vw;
  }
}
</style>