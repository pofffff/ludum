<template>
  <div class="addons__wrapper">
    <div class="header__addons_list">
      <h5>Addons</h5>
      <i class="fas fa-plus-circle"></i>
    </div>
    <section class="container__addons_list">
      <li class="addon__card" v-for="addon in this.addons" :key="addon.name">
        <img :src="require(`@/assets/${addon.img}`)" alt="" />
        <section class="addon__details">
          <h5>{{ addon.name }}</h5>
          <p class="p1">{{ addon.installed }}</p>
        </section>
      </li>
    </section>
  </div>
</template>

<script>
import friends from "@/data/friends.json";
export default {
  data: () => {
    return {
      addons: [
        {
          name: "World Of Warcraft",
          installed: "6 addons installed",
          img: "wow/wow_1.jpg",
        },
        {
          name: "Minecraft",
          installed: "2 addons installed",
          img: "minecraft/minecraft_1.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.addons__wrapper {
  grid-column: 3/4;
  padding: $L 0;
}

.header__addons_list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $M;
}

.container__addons_list {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 220px;
  padding-right: $S;

  .addon__card {
    box-shadow: $small_card_box_shadow;
    border-radius: 3px;
    height: 75px;
    margin: $XS 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      height: 75px;
      width: 75px;
      object-fit: cover;
      overflow: hidden;
      margin-right: $S;
    }

    .p1 {
      color: $secondary_text_color;
    }
  }

  .addon__card:hover {
    background: $dark;
  }
}
</style>
