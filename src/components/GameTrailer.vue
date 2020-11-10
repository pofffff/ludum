<template>
  <section clasS="game__trailer">
    <iframe
      src="https://www.youtube.com/embed/e_E9W2vsRbQ"
      class="video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <section class="examples">
      <iframe
        src="https://www.youtube.com/embed/e_E9W2vsRbQ"
        class="small__examples"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img
        src="@/assets/valorant/valorant_1.jpg"
        alt=""
        class="small__examples"
      />
      <img
        src="@/assets/valorant/valorant_2.jpg"
        alt=""
        class="small__examples"
      />
      <img
        src="@/assets/valorant/valorant_3.jpg"
        alt=""
        class="small__examples"
      />
      <img
        src="@/assets/valorant/valorant_4.jpg"
        alt=""
        class="small__examples"
      />
      <img
        src="@/assets/valorant/valorant_5.jpg"
        alt=""
        class="small__examples"
      />
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video {
  height: 400px;
  width: 100%;
}

.examples {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: $XL;

  .small__examples {
    width: 15%;
    height: 70px;
    margin-top: $M;
    transition: ease-in-out;
    transition: 0.2s;
    padding-bottom: $S;
  }
  .small__examples:hover{ 
 transform: scale(1.2);
}
}
@media only screen and (max-width: 700px) {
  .video {
    width: 85vw;
  }
  .small__examples {
    margin: 0 0.2em;
  }
  .examples {
    width: 85vw;
    overflow-x: scroll;
    overflow-y: hidden;
      justify-content: space-between;
  }
}
</style>
