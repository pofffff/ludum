<template>
  <div>
    <DesktopHeader />
    <MobileHeader @toggleNav="toggleNav" v-if="!this.showNavOverlay" />
    <NavOverlayMobile @toggleNav="toggleNav" v-if="this.showNavOverlay" />
    <router-view />
    <DesktopFooter />
  </div>
</template>

<script>
import DesktopHeader from "@/components/global/layout/DesktopHeader";
import MobileHeader from "@/components/global/layout/MobileHeader";
import NavOverlayMobile from "@/components/global/layout/NavOverlayMobile";
import DesktopFooter from "@/components/global/layout/DesktopFooter";

export default {
  components: { DesktopHeader, MobileHeader, NavOverlayMobile, DesktopFooter },
  data: () => {
    return {
      showNavOverlay: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNavOverlay = !this.showNavOverlay;
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
</style>
