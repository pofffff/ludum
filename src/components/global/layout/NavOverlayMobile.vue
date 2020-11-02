<template>
  <nav class="nav__wrapper_overlay">
    <button @click="toggleNavOverlay" class="nav__close_button">
      <i class="fas fa-times"></i>
    </button>
    <ul class="nav__ul"  @click="closeNav">
      <router-link class="nav__link" to="/library">Library</router-link>
      <router-link class="nav__link" to="/store"> Store </router-link>
      <router-link class="nav__link" to="/streams"> Streams </router-link>
      <router-link class="nav__link" to="/profile">Profile</router-link>
      <router-link class="nav__link" to="">Messages</router-link>
      <router-link class="nav__link" to="">Logout</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
    methods: {
        toggleNavOverlay() {
            this.$emit("toggleNav")
        },
        closeNav() {
            this.$emit("toggleNav")
        }
    }
};
</script>

<style lang="scss" scoped>
.nav__wrapper_overlay {
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: $background;
  height: 100%;
  width: 100%;
  padding: $M;

  .nav__close_button {
    background: none;
    color: $text_color;
    border: none;
    align-self: flex-end;
    font-size: $L;
  }

  .nav__ul {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .nav__link {
      @include nav_text_link;
      padding: $L 0;
    }
  }
}

@media only screen and (min-width: 600px) {
  .nav__wrapper_overlay {
    display: none;
  }
}
</style>
