<template>
  <div>
    <div class="wrapper grid_3_columns">
      <MobileProfileNav @toggleProfileNav="toggleProfileNav" />
      <ProfileDetails
        :class="[{ profile: isActive.profile }, 'mobile_class']"
      />
      <FriendsList :class="[{ friends: isActive.friends }, 'mobile_class']" />
      <RecentActivity :class="[{ game: isActive.game }, 'mobile_class']" />
      <Addons :class="[{ game: isActive.game }, 'mobile_class']" />
    </div>
  </div>
</template>

<script>
import ProfileDetails from "@/components/ProfileDetails";
import FriendsList from "@/components/FriendsList";
import RecentActivity from "@/components/RecentActivity";
import Addons from "@/components/Addons";
import MobileProfileNav from "@/components/global/layout/MobileProfileNav";

export default {
  components: {
    ProfileDetails,
    FriendsList,
    Addons,
    RecentActivity,
    MobileProfileNav,
  },
  data: () => {
    return {
      isActive: { profile: true, friends: false, game: false },
    };
  },
  methods: {
    toggleProfileNav(to) {
      Object.keys(this.isActive).forEach((v) => (this.isActive[v] = false));

      console.log(to);
      if (to === "profileActive") {
        this.isActive.profile = true;
      }
      if (to === "friendsActive") {
        this.isActive.friends = true;
      }
      if (to === "gameActive") {
        this.isActive.game = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>


@media only screen and (max-width: 700px) {
  .mobile_class {
    display: none;
  }

  .profile,
  .friends,
  .game {
    display: inherit;
    margin-top: $XL;
  }
}
</style>
