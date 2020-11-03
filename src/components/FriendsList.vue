<template>
  <div class="profile__friends_list">
    <div class="header__friends_list">
      <h5>Friends</h5>
      <i class="fas fa-user-plus"></i>
    </div>
    <section class="container__friends_list">
      <li
        class="friend__card"
        v-for="friend in this.friendsOnline"
        :key="friend.name"
      >
        <i class="fas fa-user"></i>
        <section class="friend__details online">
          <h5>{{ friend.name }}</h5>
          <p class="p1 online">{{ friend.playing }}</p>
        </section>
      </li>
      <li
        class="friend__card"
        v-for="friend in this.friendsOffline"
        :key="friend.name"
      >
        <i class="fas fa-user"></i>
        <section class="friend__details offline">
          <h5>{{ friend.name }}</h5>
          <p class="p1 offline">{{ friend.playing }}</p>
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
        { name: "Executioner", playing: "World Of Warcraft" },
        {
          name: "Cartman",
          playing: "Counter Strike",
        },
        { name: "Stisen", playing: "Heartstone" },
        { name: "DonaldChump", playing: "World Of Warcraft" },
        { name: "Bumbibjörnen", playing: "The Long Dark" },
        { name: "Hejhopp", playing: "Fifa 2020" },
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
  margin-bottom: $M;
}

.container__friends_list {
  overflow: scroll;
  height: 550px;
  padding-right: $S;

  .friend__card {
  box-shadow: $small_card_box_shadow;
  border-radius: 3px;
  height: 75px;
  margin: $XS 0;
  display: flex;
  align-items: center;
  padding: $S;

  .online {
    color: $site_color;
  }

  .offline {
    color: $secondary_text_color;
  }

  i {
    font-size: $L;
    margin-right: $M;
  }

  h5 {
    margin-bottom: $XS;
  }
  
}

.friend__card:hover {
  background: $dark;
}
}




</style>
