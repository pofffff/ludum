<template>
  <div class="wrapper profile__wrapper grid_2_columns">
    <ProfileDetails />
    <FriendsList />
    <Addons />
  </div>
</template>

<script>
import ProfileDetails from "@/components/ProfileDetails";
import FriendsList from "@/components/FriendsList";
import Addons from "@/components/Addons";

export default {
  components: { ProfileDetails, FriendsList, Addons },
};
</script>

<style lang="scss" scoped></style>
