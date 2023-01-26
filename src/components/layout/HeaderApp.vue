<template>
  <div class="header">
    <div class="container">
      <div class="inner flex">
        <div class="header-logo col-15">
          <router-link to="/">
            <img src="../../assets/logo-resume.png" />
          </router-link>
        </div>
        <div class="header-nav">
          <div class="header-routes" :class="{ _mobile: isAddClass }">
            <header-menu @click="closeMenuToggle" />
          </div>
          <div class="header-right">
            <div class="header-burger">
              <transition name="fade" mode="out-in">
                <div
                  class="burger-icon"
                  v-if="!isOpenMenu"
                  @click="openMenuToggle"
                >
                  <mdicon name="menu" class="header__icon" />
                </div>
                <div class="menu-close" v-else @click="closeMenuToggle">
                  <mdicon name="close" class="menu-close__icon" />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import HeaderMenu from "@/components/layout/HeaderMenu.vue";

export default {
  components: {
    HeaderMenu,
  },
  data() {
    return {
      isOpenMenu: false,
      isAddClass: false,
    };
  },
  methods: {
    closeMenuToggle() {
      this.isOpenMenu = false;
      this.isAddClass = false;
    },
    openMenuToggle() {
      this.isOpenMenu = true;
      this.isAddClass = true;
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
      width: 85%;

      @include lg-down {
        width: 50%;
      }
    }
    .header-routes {
      @include lg-down {
        display: none;
      }

      &._mobile {
        @include lg-down {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 100%;
          width: 100%;
          position: fixed;
          top: 63px;
          left: 0;
          background-color: rgb(0, 0, 0);
          padding: 15px;
        }
      }
    }
  }
}
</style>
