<template>
  <section class="gameinfo__streams">
  <h3>Streams</h3>
    <section class="streams__streams">
    <img src="@/assets/streamer_face.png" alt="streamer">
    <p class="p1">Olof Pettersson</p>
    <p class="p1">1337 watching</p>
    <p class="p1">Swedish</p>
    <button class="ghost_button">Watch now</button>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.streams__streams{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50em;
    justify-content: space-between;
    background-color: $card;
    padding: $S;
    border-radius: $border_radius;

        img{
            height: 5em;
        }
}
</style>