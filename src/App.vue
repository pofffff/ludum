<template>
  <div class="about">
    <h1>This is an about page</h1>
    <GhostButton :button_text="button_text" />
    <PrimaryButton :button_text="button_text" />
    <SecondaryButton :button_text="button_text" />
  </div>
</template>

<script>
import GhostButton from "@/components/global/buttons/GhostButton";
import PrimaryButton from "@/components/global/buttons/PrimaryButton";
import SecondaryButton from "@/components/global/buttons/SecondaryButton";

export default {
  components: { GhostButton, PrimaryButton, SecondaryButton },
  data: () => {
    return {
      button_text: "Primary",
    };
  },
};
</script>

<style lang="scss" scoped>
@use "main.scss";

.about {
  background: $background;
}
</style>
