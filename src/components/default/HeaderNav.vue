<template>
  <div class="header-nav">
    <header-menu @click="$emit('close')" />
    <header-login @click="$emit('close')" />
  </div>
</template>

<script>
import HeaderMenu from "@/components/default/HeaderMenu.vue";
import HeaderLogin from "@/components/default/HeaderLogin.vue";

export default {
  components: {
    HeaderMenu,
    HeaderLogin,
  },

  props: ["isOpenMenu"],

  emits: ["close"],
};
</script>

<style lang="scss" scoped>
.header-nav {
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
