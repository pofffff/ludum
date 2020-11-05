<template>
  <div class="mobile__profile_nav">
    <h4
      @click="toggleNav('profileActive')"
      :class="{ nav__active: profileActive }"
    >
      Profile
    </h4>
    <h4
      @click="toggleNav('gameActive')"
      :class="{ nav__active: gameActive }"
    >
      Game
    </h4>
    <h4
      @click="toggleNav('friendsActive')"
      :class="{ nav__active: friendsActive }"
    >
      Friends
    </h4>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      profileActive: true,
      gameActive: false,
      friendsActive: false,
    };
  },
  methods: {
    toggleNav(to) {
      this.$emit("toggleProfileNav", to);
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile__profile_nav {
  display: none;
}

@media only screen and (max-width: 700px) {
  .mobile__profile_nav {
    display: flex;
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 64px;
    left: 0;
    height: 64px;
    padding: $M 0;
    justify-content: space-around;

    h4 {
        cursor: pointer;
    }

    .nav__active {
    color: $site_color;
  }
  }
}
</style>
