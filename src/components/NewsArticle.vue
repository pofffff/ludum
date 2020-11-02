<template>
<div>
  <article class="grid_2_column_article">
    <div>
      <img src="https://media.steelseriescdn.com/thumbs/blog/posts/how-to-become-a-professional-gamer/c9af04a1e31c491bbf46f99250ae1654.jpg.1920x1080_q100_crop-scale_optimize_upscale.jpg" alt="">
    </div>
    <div>
      <h3>HOW TO BECOME A PRO PLAYER</h3>
      <p>
        We’ve probably all fantasized about quitting our 9 to 5s to live the dream and become a professional esports gamer. Being paid to play your favorite game all day long? What’s not to love? But it isn’t as easy as just packing up the day job and staying home in your track pants, gaming all hours of the day and not moving from the couch - making a real living out of esports competitions and getting into gaming leagues takes hard work and true dedication. And even if you’re willing to put the work in to become the absolute best in your game, there’s considerations to make, such as giving up a steady salary. But if you’re committed enough to put in the many, many hours (an excuse to game for more hours? Great) it takes to become good enough to make pro gaming your career, you could earn some serious dollar and live the dream. Check out our top tips to help you on your way to becoming an elite of esports.
      </p>
    </div>
    <GhostButton button_text="Read More" class="ghost_button" />
  </article>
   <article class="grid_2_column_article">
    <div>
      <img src="https://s.yimg.com/os/creatr-uploaded-images/2020-06/38ef1100-a472-11ea-9f36-b83076a350df" alt="">
    </div>
    <div>
      <h3>HOW TO BECOME A PRO PLAYER</h3>
      <p>
        We’ve probably all fantasized about quitting our 9 to 5s to live the dream and become a professional esports gamer. Being paid to play your favorite game all day long? What’s not to love? But it isn’t as easy as just packing up the day job and staying home in your track pants, gaming all hours of the day and not moving from the couch - making a real living out of esports competitions and getting into gaming leagues takes hard work and true dedication. And even if you’re willing to put the work in to become the absolute best in your game, there’s considerations to make, such as giving up a steady salary. But if you’re committed enough to put in the many, many hours (an excuse to game for more hours? Great) it takes to become good enough to make pro gaming your career, you could earn some serious dollar and live the dream. Check out our top tips to help you on your way to becoming an elite of esports.
      </p>
    </div>
      <GhostButton button_text="Read More" class="ghost_button" />
  </article>
</div>

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
  @use "main.scss"; 
  article {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    background-color: $card ;
    width: 100%;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
</style>