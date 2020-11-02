<template>
  <section class="gaminfo__requirement ">
    <h3>PC requirement</h3>
    <div class="buttons">
      <button class="ghost_button">Windows</button>
      <button class="ghost_button">Mac OS</button>
    </div>
    <div class="requirement__requirements">
      <h5>MINIMUM:</h5>
      <p>OS: Windows 10 - 64 bit</p>
      <p>Processor: Intel i5 or new-gen i3 / AMD equivalent</p>
      <p>Memory: 4 GB RAM</p>
      <p>Graphics: 2GB Video RAM</p>
      <p>DirectX: Version 10</p>
      <p>Storage: 4 GB free space</p>
      <br>
      <h5>RECOMMENDED:</h5>
      <p>OS: Windows 10 - 64 bit</p>
      <p>Processor: Intel i7 or AMD equivalent (AMD FX 9500+ Series)</p>
      <p>Memory: 8 GB RAM</p>
      <p>Graphics: 4GB Video RAM</p>
      <p>DirectX: Version 11</p>
      <p>Storage: 4 GB free space</p>

    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gaminfo__requirement {
  height: auto;
  border-radius: $border_radius;
  padding: $S;
  width: 400px;

  h3 {
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    margin: $M 0;
  }
  .requirement__requirements{
      margin: $S;

      p{
        color: $secondary_text_color;

      }
  }
}
</style>
