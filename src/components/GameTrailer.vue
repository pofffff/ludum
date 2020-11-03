<template>
<section clasS="game__trailer">
  <h3>Valorant</h3>
<iframe width="750" height="400" src="https://www.youtube.com/embed/e_E9W2vsRbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<section class="examples">
<iframe src="https://www.youtube.com/embed/e_E9W2vsRbQ" class="small__examples" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<img src="@/assets/valorant/valorant_1.jpg" alt="" class="small__examples" >
<img src="@/assets/valorant/valorant_2.jpg" alt="" class="small__examples" >
<img src="@/assets/valorant/valorant_3.jpg" alt="" class="small__examples" >
<img src="@/assets/valorant/valorant_4.jpg" alt="" class="small__examples" >
<img src="@/assets/valorant/valorant_5.jpg" alt="" class="small__examples" >
</section>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.examples {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 750px;

  .small__examples{
    width: 100px;
    height: 70px;
  }
}
</style>