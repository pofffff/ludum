<template>
  <div class="about">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/global/layout/DesktopHeader";
export default {
  components: { Header },
  data: () => {
    return {};
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
</style>
