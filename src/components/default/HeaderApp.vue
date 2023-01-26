<template>
  <div class="header">
    <div class="container">
      <div class="inner flex">
        <div class="header-logo col-8">
          <router-link to="/">
            <img src="../../assets/logo-resume.png" />
          </router-link>
        </div>
        <div class="header-nav col-70">
          <header-menu />
        </div>
        <div class="header-right col-8">
          <header-login />
        </div>
        <div class="header-right_mobile col-8">
          <div class="header-burger">
            <transition
              name="fade"
              mode="out-in"
              @click="isOpenMenu = !isOpenMenu"
            >
              <div class="burger-icon" v-if="!isOpenMenu">
                <mdicon name="menu" class="header__icon" />
              </div>
              <div class="menu-close" v-else>
                <mdicon name="close" class="menu-close__icon" />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header-nav v-if="isOpenMenu" @close="closeMenuToggle" />
</template>

<script lang="js">
import HeaderMenu from "@/components/default/HeaderMenu.vue";
import HeaderLogin from "@/components/default/HeaderLogin.vue";
import HeaderNav from "@/components/default/HeaderNav.vue";

export default {
  components: {
    HeaderMenu,
    HeaderLogin,
    HeaderNav
  },
  data() {
    return {
      isOpenMenu: false,
    };
  },
  methods: {
    closeMenuToggle() {
      this.isOpenMenu = false;
      console.log(55)
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #e1d9d0;
  .inner {
    padding: 5px;
    align-items: center;

    .header-logo {
      width: 85px;
      img {
        width: 100%;
      }
    }

    .header-right {
      display: flex;
      justify-content: flex-end;

      @include lg-down {
        display: none;
      }
    }

    .header-right_mobile {
      display: none;

      @include lg-down {
        display: flex;
        justify-content: flex-end;
      }
      .header-burger {
        .burger-icon,
        .menu-close {
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: content-box;
          width: 24px;
          height: 24px;
          padding: 10px 10px;
          cursor: pointer;
        }
      }
    }
    .header-nav {
      @include lg-down {
        display: none;
      }
    }
  }
}
</style>
