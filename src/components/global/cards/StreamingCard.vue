<template>
  <article class="streaming__card">
    <div>
      <div class="watching">
           <img src="https://cdn.ccn.com/wp-content/uploads/2020/04/valorant-twitch-beta.jpg" alt="">
           <div class="watch">
            <img class="eye" src="@/assets/eye.png" alt="">
            <p>341 watching</p>
        </div>
      </div>
    </div>
    <div>
      <p>Casual monday stream with Mjay</p>
      <p>MjayMonkey</p>
      <h3>LEAGUE OF LEGENDS</h3>
      <GhostButton button_text="Start Watching" />
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
    width: 20px;
    height: 20px;
  }

  .watch {
    position: absolute;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .watching {
    position: relative;
  }

</style>