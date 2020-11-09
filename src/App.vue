<template>
  <div>
    <DesktopHeader />
    <MobileHeader @toggleNav="toggleNav" v-if="!this.showNavOverlay" />
    <NavOverlayMobile @toggleNav="toggleNav" v-if="this.showNavOverlay" />
      <transition name="welcome">
    <router-view :class="{active: isActive}" />
     </transition>
    <Footer />
  </div>
</template>

<script>
import DesktopHeader from "@/components/global/layout/DesktopHeader";
import MobileHeader from "@/components/global/layout/MobileHeader";
import NavOverlayMobile from "@/components/global/layout/NavOverlayMobile";
import Footer from "@/components/global/layout/Footer";

export default {
  components: { DesktopHeader, MobileHeader, NavOverlayMobile, Footer },
  data: () => {
    return {
      showNavOverlay: false,
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNavOverlay = !this.showNavOverlay;
      this.isActive = !this.isActive
    },
  },
};
</script>

<style lang="scss">
@use "main.scss";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $dark;
  border-radius: 6px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $background;
  border-radius: 6px;
}

.active {
  position: fixed;
}

</style>
