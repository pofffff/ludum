<template>
  <div>
    <DesktopHeader />
    <router-view />
  </div>
</template>

<script>
import DesktopHeader from "@/components/global/layout/DesktopHeader";
export default {
  components: { DesktopHeader },
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
