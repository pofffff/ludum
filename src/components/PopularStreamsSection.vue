<template>
  <section class="popular__streaming__section wrapper">
    <h3>POPULAR STREAMS</h3>
    <div class="grid_5_columns">
        <StreamingCard v-for="(stream,index) in streams" :key="index" :stream="stream" />
    </div>
  </section>
</template>

<script>
import json from "@/data/streams.json"
import StreamingCard from "@/components/global/cards/StreamingCard"
export default {
  data() {
    return {  
      streams: json.streams
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