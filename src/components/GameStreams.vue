<template>
  <section class="gameinfo__streams">
    <h3>Streams</h3>
    <article class="streams__streams">
      <img src="@/assets/streamer_face.png" alt="streamer" />
      <p class="p2 name">Stefan löfven</p>
      <p class="p2 watching">0 watching</p>
      <p class="p2 lang">Swedish</p>
      <button class="ghost_button">Watch</button>
    </article>
    <article class="streams__streams">
      <img src="@/assets/streamer_face.png" alt="streamer" />
      <p class="p2 name">Pelle Johansson</p>
      <p class="p2 watching">157 watching</p>
      <p class="p2 lang">Swedish</p>
      <button class="ghost_button">Watch</button>
    </article>
    <article class="streams__streams">
      <img src="@/assets/streamer_face.png" alt="streamer" />
      <p class="p2 name">Asgard</p>
      <p class="p2 watching">31k watching</p>
      <p class="p2 lang">Norwegian</p>
      <button class="ghost_button">Watch</button>
    </article>
    <article class="streams__streams">
      <img src="@/assets/streamer_face.png" alt="streamer" />
      <p class="p2 name">MegaKiller</p>
      <p class="p2 watching">1337 watching</p>
      <p class="p2 lang">USA</p>
      <button class="ghost_button">Watch</button>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.streams__streams {
  display: grid;
  grid-template-columns: 0.5fr repeat(4, 1fr);
  align-items: center;
  background-color: $card;
  padding: $S;
  border-radius: $border_radius;
  box-shadow: $small_card_box_shadow;
  margin: 0.2em 0;

  img {
    height: 4em;
  }
  .name {
    padding-left: 1em;
  }
}
@media only screen and (max-width: 700px) {
  .streams__streams {
    width: 85vw;
    grid-template-columns: 0.8fr repeat(3, 1fr);

    p {
      font-size: 10px;
    }
    img {
      height: 3em;
    }

    .lang {
      display: none;
    }
  }
}
</style>
