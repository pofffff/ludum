<template>
  <article class="popular__streaming__card">
    <div>
      <div class="watching">
           <img class="stream__image" :src="require(`@/assets/${stream.image}`)" alt="">
           <div class="watch">
            <img class="eye" src="@/assets/eye.png" alt="">
            <p class="watch_count">{{stream.viewers}} viewers</p>
        </div>
      </div>
    </div>
    <div class="popular__streaming__card__text">
      <p class="p1">{{stream.streamName}}</p>
      <p class="p1">{{stream.streamer}}</p>
      <h3>{{stream.game}}</h3>
      <GhostButton button_text="Watch" />
    </div>
  </article>
</template>

<script>
import GhostButton from "@/components/global/buttons/GhostButton"
export default {
  data() {
    return {

    }
  },
  props: {
    stream: Object
  },
  components: {
    GhostButton
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
  }

  .eye {
    margin-right: 5px;
    width: 13px;
    height: 13px;
  }

  .watch {
    border-radius: $border-radius;
    font-size: 12px;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.774);
    position: absolute;
    top: 5px;
    left: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    z-index: 1;
  }

  .watching {
    position: relative;
  }

  .popular__streaming__card__text p {
    margin-bottom: $S;
  }

      img {
    border-radius: $border-radius;
    object-fit: fill;
    object-position: center;
    height: 200px;
    width: 100%;
  }

  .watching p {
    color: $text-color;
  }

  .watch_count {
    font-family: $body_font;
    z-index:1;
  }

  .stream__image {
     margin-bottom: $S;
  }
</style>