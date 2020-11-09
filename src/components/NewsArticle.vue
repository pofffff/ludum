<template>
<div>
  <article class="grid_2_column_article">
    <div>
      <img src="https://media.steelseriescdn.com/thumbs/blog/posts/how-to-become-a-professional-gamer/c9af04a1e31c491bbf46f99250ae1654.jpg.1920x1080_q100_crop-scale_optimize_upscale.jpg" alt="">
    </div>
    <div class="news__article__text">
      <h3>HOW TO BECOME A PRO PLAYER</h3>
      <p class="p1">
        We’ve probably all fantasized about quitting our 9 to 5s to live the dream and become a professional esports gamer. Listen to what the pro players say and how the life as a pro player is on a daily basis. Listen to the best players in the world right now. They know what they are talking about
      </p>
       <GhostButton button_text="Read More" class="ghost_button" />
    </div>
  </article>
   <article class="grid_2_column_article">
    <div>
      <img class="news_image" src="https://s.yimg.com/os/creatr-uploaded-images/2020-06/38ef1100-a472-11ea-9f36-b83076a350df" alt="">
    </div>
    <div class="news__article__text">
      <h3>TOP 3 VALORANT AGENTS</h3>
      <p class="p1">
                 You always wondered which agent is the best right now. Read more here and get insider pro tips on which agent to pick for what battle. Some agents outperm others and you wanna play the best. New patches out that means changes in the agent tier list and i promise you that you dont wanna miss this!
      </p>
       <GhostButton button_text="Read More" class="ghost_button" />
    </div>
     
  </article>
  <article class="grid_2_column_article">
    <div>
      <img src="https://www.xpsports.com/wp-content/uploads/2020/10/xpsports-gamingtrends2021.jpg" alt="">
    </div>
    <div class="news__article__text">
      <h3>GAMES COMING IN 2021!</h3>
      <p class="p1">
        Read up on all the latest info about the coolest and best games coming out in 2021. You dont wanna sit on the side when all your friends go pew pew in the latest games. Play the old classics but be prepare to battle in the new hottest games entering the world 2021.
      </p>
       <GhostButton button_text="Read More" class="ghost_button" />
    </div>
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
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 400px;
    background-color: $card ;
    border-radius: $border_radius;
    box-shadow:$small_card_box_shadow ;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    border-radius: $border_radius;
  }

  .news__article__text {
  text-overflow: ellipsis;
  overflow: hidden;

  }

  .news__article__text p {
    margin-bottom: $S;
  }

  .news_image {
    object-position: top;
  }
</style>