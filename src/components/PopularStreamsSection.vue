<template>
  <section class="popular__streaming__section wrapper">
    <h3>POPULAR STREAMS</h3>
    <div class="grid_5_columns">
        <StreamingCard />
        <StreamingCard />
        <StreamingCard />
        <StreamingCard />
        <StreamingCard />
    </div>
  </section>
</template>

<script>
import StreamingCard from "@/components/global/cards/StreamingCard"
export default {
  data() {
    return {

    }
  },
  components: {
    StreamingCard
  }
}
</script>

<style lang="scss" scoped>
  article {
    background-color: $card;
  }
</style>