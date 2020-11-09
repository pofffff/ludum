<template>
  <div class="footer__wrapper grid_4_columns">
    <div class="footer__logo_container">
      <img src="../../../assets/ludum_logo.png" alt="" />
    </div>
    <section class="footer__customer_service">
      <h5>Customer service</h5>
      <p class="p1 secondary">Contact</p>
      <p class="p1 secondary">FAQ</p>
      <p class="p1 secondary">Privacy policy</p>
    </section>
    <section class="footer__payment">
      <h5>Payment</h5>
      <p class="p1 secondary">Paypal</p>
      <p class="p1 secondary">Mastercard</p>
      <p class="p1 secondary">American Express</p>
    </section>
    <section class="footer__about">
      <h5>About Ludum</h5>
      <p class="p1 secondary">About us</p>
      <p class="p1 secondary">News</p>
      <p class="p1 secondary">Security</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.footer__wrapper {
  padding: $XL;
  height: 180px;
  box-shadow: $footer_shadow;

  .secondary {
    color: $secondary_text_color;
    margin-bottom: $S;
  }

  .footer__logo_container {
    width: 100%;
    @include flexCenterEvenly;

    img {
      width: 100px;
    }
  }
}

@media only screen and (max-width: 700px) {
  .grid_4_columns {
    grid-template-columns: 1fr 1fr;
    column-gap: $XL;
    row-gap: $S;

  }

  .footer__wrapper {
    padding: $M $XL;
    height: 220px;

    .secondary {
      margin-bottom: $XS;
    }
    .footer__logo_container {
      width: 100%;
      display: flex;
      align-items: flex-start;

      img {
        width: $XL;
      }
    }
  }

  
}
</style>
