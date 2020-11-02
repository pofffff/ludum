<template>
  <div class="wrapper__friends_list">
    <div class="header__friends_list">
      <h5>Friends</h5>
      <i class="fas fa-user-plus"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.wrapper__friends_list {
    grid-column: 3/4;
}

.header__friends_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>
