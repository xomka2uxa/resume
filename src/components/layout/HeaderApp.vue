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
          <div class="header-menu">
            <header-menu />
          </div>
          <div class="header-right">
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
  </div>
  <div class="header-modal" v-if="isOpenMenu">
    <header-menu @click="closeMenuToggle" />
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
    .header-menu {
      @include lg-down {
        display: none;
      }
    }
  }
}
.header-modal {
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
</style>
