<template>
  <nav class="nav__wrapper_mobile">
    <ul class="nav__ul">
      <router-link class="nav__link" to="/">
        <img
          class="nav__ul_logo"
          src="../../../assets/ludum_logo.png"
          alt="ludum logo"
        />
      </router-link>
      <button @click="toggleNavOverlay" class="nav__ul_hamburger">
        <i class="fas fa-bars"></i>
      </button>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNavOverlay() {
      this.$emit("toggleNav");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav__wrapper_mobile {
  box-shadow: $nav_box_shadow;

  .nav__ul {
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 60px;
    padding: $L;

    .nav__ul_logo {
      width: $L;
      height: auto;
    }

    .nav__ul_hamburger {
        background: none;
        color: $text_color;
        border: none;
        outline: none;
        font-size: $L;
    }
  }
}

@media only screen and (min-width: 600px) {
  .nav__wrapper_mobile {
    display: none;
  }
}
</style>
