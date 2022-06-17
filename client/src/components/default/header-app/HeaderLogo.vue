<template>
  <div class="logo">
    <a href="index.html">
      <img class="logo__img" src="@/assets/img/logo1.png" alt="PIX4ART">
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .logo {
    &__img {
      width: 100%x;
      height: 50px;

      @media(min-width: 500px) {
        height: 59px;
        width: 123px;
      }
    }
  }

</style>
