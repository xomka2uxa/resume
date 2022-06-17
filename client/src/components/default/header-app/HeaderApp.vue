<template>
  <div class="header">
    <div class="header__container">
      <div class="header__inner">
        <header-logo />
        <header-burger @open="openMenuToggle"/>
        <header-nav-wrapper :is-open-menu="isOpenMenu" @close="openMenuToggle" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from '@/components/default/header-app/HeaderLogo.vue';
import HeaderBurger from '@/components/default/header-app/HeaderBurger.vue';
import HeaderNavWrapper from '@/components/default/header-app/HeaderNavWrapper.vue';

export default {
  name: 'HeaderApp',

  data() {
    return {
      isOpenMenu: false,
    };
  },

  components: {
    HeaderLogo,
    HeaderBurger,
    HeaderNavWrapper,
  },

  methods: {
    openMenuToggle() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
  .header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 10px 0;
    width: 100%;

    /*
    576
    768
    992
    1200
    */

    &__container {
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      padding: 0 10px;
    }

    &__inner {
      display: flex;
      min-height: 60px;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;

      @media(min-width: 992px) {
        flex-direction: row;
      }
    }
  }
</style>
