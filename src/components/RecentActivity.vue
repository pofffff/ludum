<template>
  <div class="recent-activity__wrapper">
    <h5>Recent Activity</h5>
    <section class="recent-activity__container">
      <li class="recent-activity__card">
        <img src="@/assets/wow/wow_1.jpg" alt="game" />
        <section class="activity__game_details">
          <h5>World Of Warcraft</h5>
          <div>
            <p class="p2">689 hours total playtime</p>
            <p class="p2">Last played 3 hours ago</p>
          </div>
        </section>
      </li>
      <li class="recent-activity__card">
        <img src="@/assets/fortnite/fortnite_1.jpg" alt="game" />
        <section class="activity__game_details">
          <h5>Fortnite</h5>
          <div>
            <p class="p2">135 hours total playtime</p>
            <p class="p2">Last played 2 Nov - 2020</p>
          </div>
        </section>
      </li>
      <li class="recent-activity__card">
        <img src="@/assets/lol/lol_1.jpg" alt="game" />
        <section class="activity__game_details">
          <h5>League of Legends</h5>
          <div>
            <p class="p2">105 hours total playtime</p>
            <p class="p2">Last played 29 Oct - 2020</p>
          </div>
        </section>
      </li>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.recent-activity__wrapper {
    grid-column: 1/2;

  .recent-activity__card {
    box-shadow: $small_card_box_shadow;
    width: 500px;
    height: 120px;
    border-radius: 6px;
    margin: $S 0;
    display: flex;
    background: $dark;
    cursor: pointer;

    img {
      height: 120px;
      width: 200px;
      object-fit: cover;
      overflow: hidden;
    }

    .activity__game_details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: $S;
    }

    .activity__game_details > div {
      .p2 {
        color: $secondary_text_color;
        margin-bottom: $S;
      }
    }
  }
}
</style>
