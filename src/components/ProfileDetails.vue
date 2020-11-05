<template>
  <div class="profile__user">
    <img src="../assets/profile.jpg" alt="profile" />
    <section class="profile__user_details">
      <h1>CartMannen</h1>
      <h4>I love piiiiizzza!</h4>
    </section>
    <section class="profile__account_details">
      <h5>Account details</h5>
      <h5>Credits</h5>
      <h5>Edit profile</h5>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.profile__user {
  display: flex;
  justify-content: space-between;

  img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
  }

  h4 {
    color: $secondary_text_color;
  }

  .profile__account_details {
    padding: $L;
    text-align: end;
    cursor: pointer;
  }
}

@media only screen and (max-width: 700px) {
  .profile__user {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
      width: $XXL;
      height: $XXL;
    }

    .profile__account_details {
      margin-top: $XL;
      text-align: center;
width: 100%;
      h5 {
        padding: $S;
      }
    }
  }
}
</style>
