<template>
  <section class="gameinfo__streams">
  <h3>Streams</h3>
    <article class="streams__streams">
    <img src="@/assets/streamer_face.png" alt="streamer">
    <p class="p1">Stefan löfven</p>
    <p class="p1">0 watching</p>
    <p class="p1">Swedish</p>
    <button class="ghost_button">Watch</button>
    </article>
    <article class="streams__streams">
    <img src="@/assets/streamer_face.png" alt="streamer">
    <p class="p1">Ulf Kristersson</p>
    <p class="p1">1337 watching</p>
    <p class="p1">Swedish</p>
    <button class="ghost_button">Watch</button>
    </article>
    <article class="streams__streams">
    <img src="@/assets/streamer_face.png" alt="streamer">
    <p class="p1 name">Ebba Busch</p>
    <p class="p1">1337 watching</p>
    <p class="p1">Swedish</p>
    <button class="ghost_button">Watch</button>
    </article>
    <article class="streams__streams">
    <img src="@/assets/streamer_face.png" alt="streamer">
    <p class="p1">Jimmie Åkesson</p>
    <p class="p1">1337 watching</p>
    <p class="p1">Swedish</p>
    <button class="ghost_button">Watch</button>
    </article>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.streams__streams{
    display: grid;
    grid-template-columns: 0.5fr repeat(4, 1fr) ;
    align-items: center;
    width: 700px;
    background-color: $card;
    padding: $S;
    border-radius: $border_radius;
    box-shadow: $small_card_box_shadow;
    margin: 0.2em 0;

        img{
            height: 4em;
        }

      
}
</style>