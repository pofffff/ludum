<template>
  <section class="gameinfo__streams">
  <h3>Streams</h3>
    <section class="streams__streams">
    <img src="@/assets/streamer_face.png" alt="streamer">
    <p>Olof Pettersson</p>
    <p>1337 watching</p>
    <p>Swedish</p>
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

        img{
            height: 5em;
        }
}
</style>