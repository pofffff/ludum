<template>
  <nav class="nav__wrapper_desktop">
    <ul class="nav__ul_left">
      <router-link class="nav__link" to="/">
        <img
          class="nav__ul_logo"
          src="../../../assets/ludum_logo.png"
          alt="ludum logo"
        />
      </router-link>
      <router-link class="nav__link" to="/library">Library</router-link>
      <router-link class="nav__link" to="/store"> Store </router-link>
      <router-link class="nav__link" to="/streams"> Streams </router-link>
    </ul>
    <ul class="nav__ul_right">
      <router-link class="nav__link" to="/profile"
        ><img
          class="nav__ul_profile-image"
          src="../../../assets/profile.jpg"
          alt="profile"
      /></router-link>
      <router-link class="nav__link" to=""
        ><i class="fas fa-envelope"></i
      ></router-link>
      <router-link class="nav__link" to=""
        ><i class="fas fa-sign-out-alt"></i
      ></router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav__wrapper_desktop {
  position: sticky;
  top:0;
  background-color: $background;
  display: flex;
  height: 85px;
  padding: $M;
  box-shadow: $nav_box_shadow;
  z-index: 1000;


  .nav__link {
    @include nav_text_link;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 $L;
  }

  .nav__link:hover {
    @include nav_text_link_hover;
  }

  .nav__ul_left {
    display: flex;

    .nav__ul_logo {
      width: $XL;
      height: auto;
    }
  }

  .nav__ul_right {
    display: flex;
    margin-left: auto;

    .nav__ul_profile-image {
      width: $XL;
      height: $XL;
      border-radius: 50%;
    }
  }
}

@media only screen and (max-width: 700px) {
  .nav__wrapper_desktop {
    display: none;
  }
}
</style>
