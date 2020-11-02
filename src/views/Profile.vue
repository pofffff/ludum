<template>
  <div class="wrapper profile__wrapper grid_2_columns">
    <ProfileDetails />
    <FriendsList />
  </div>
</template>

<script>
import ProfileDetails from "@/components/ProfileDetails";
import FriendsList from "@/components/FriendsList";

export default {
  components: { ProfileDetails, FriendsList },
};
</script>

<style lang="scss" scoped>

.profile__wrapper {

}
    </style>
