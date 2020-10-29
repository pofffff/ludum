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
  display: flex;
  height: 85px;
  padding: $L;
  box-shadow: $nav_box_shadow;

  .nav__link {
    @include nav_text_link;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav__link:hover {
    @include nav_text_link_hover;
  }

  .nav__ul_left {
    display: flex;

    .nav__ul_logo {
      width: 45px;
      height: auto;
    }
  }

  .nav__ul_right {
    display: flex;
    margin-left: auto;
    .nav__ul_profile-image {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
</style>