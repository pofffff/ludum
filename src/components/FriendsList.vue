<template>
  <div class="profile__friends_list">
    <div class="header__friends_list">
      <h5>Friends</h5>
      <i class="fas fa-user-plus"></i>
    </div>
    <section class="container__friends_list">
      <li
        class="friend__card"
        v-for="(friend, index) in this.friendsOnline"
        :key="index"
      >
        <i class="fas fa-user"></i>
        <section class="friend__details online">
          <h5>{{ friend.name }}</h5>
          <p>{{ friend.playing }}</p>
        </section>
      </li>
      <li
        class="friend__card"
        v-for="(friend, index) in this.friendsOffline"
        :key="index"
      >
        <i class="fas fa-user"></i>
        <section class="friend__details offline">
          <h5>{{ friend.name }}</h5>
          <p>{{ friend.playing }}</p>
        </section>
      </li>
    </section>
  </div>
</template>

<script>
import friends from "@/data/friends.json";
export default {
  data: () => {
    return {
      friendsOnline: [
        { name: "Executioner", playing: "Playing: World Of Warcraft" },
        {
          name: "Cartman",
          playing: "Playing: Counter Strike - Global Offensive",
        },
        { name: "Stisen", playing: "Playing: Heartstone" },
        { name: "DonaldChump", playing: "Playing: World Of Warcraft" },
        { name: "Bumbibjörnen", playing: "Playing: The Long Dark" },
        { name: "Hejhopp", playing: "Playing: Fifa 2020" },
      ],
      friendsOffline: [
        { name: "ThisIsMyAlias", playing: "last seen 6 hours ago" },
        { name: "Berntisen", playing: "last seen 1 day ago" },
        { name: "Alibaba", playing: "last seen 2 days ago" },
        { name: "Påsen", playing: "last seen 5 days ago" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.profile__friends_list {
  grid-column: 3/4;
  padding: $L 0;
}

.header__friends_list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container__friends_list {
  overflow: scroll;
  height: 550px;
}
</style>
