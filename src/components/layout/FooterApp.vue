<template>
  <div class="footer" :class="{ _hidden: isHeaderHidden }">
    <div class="container">
      <div class="inner">
        <div class="footer-content">
          <p>© 2018, ResuMe. Все права защищены.</p>
          <p class="footer-link" @click="isOpenPolicy = true">
            Политика конфиденциальности
          </p>
          <div class="footer-modal" v-if="isOpenPolicy">
            <div class="policy-close" @click="isOpenPolicy = false">
              <mdicon name="close" class="policy-close__icon" />
            </div>
            <policy-app />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import PolicyApp from "@/components/layout/PolicyApp.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    PolicyApp,
  },
  data() {
    return {
      isOpenPolicy: false,
    };
  },
  computed: {
    ...mapGetters(["isHeaderHidden"]),
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #222222;
  font-family: Roboto Condensed, Arial, sans-serif;
  font-size: 14px;

  &._hidden {
    display: none;
  }

  .inner {
    padding: 5px;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @include lg-down {
      justify-content: center;
    }

    .footer-content {
      color: #a7a7a7;

      .footer-link {
        color: #a7a7a7;
        cursor: pointer;

        &:hover,
        &:active {
          color: #fff;
        }
      }

      .footer-modal {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        color: #2b2b2d;
        padding: 15px;
        z-index: 2;

        .policy-close {
          margin-left: auto;
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
  }
}
</style>
