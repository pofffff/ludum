<template>
  <div class="wrapper profile__wrapper grid_3_columns">
    <ProfileDetails />
    <FriendsList />
    <RecentActivity />
    <Addons />
  </div>
</template>

<script>
import ProfileDetails from "@/components/ProfileDetails";
import FriendsList from "@/components/FriendsList";
import RecentActivity from "@/components/RecentActivity";
import Addons from "@/components/Addons";

export default {
  components: { ProfileDetails, FriendsList, Addons, RecentActivity },
};
</script>

<style lang="scss" scoped>

.wrapper {
  margin: $XXL;
}

</style>
