<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="js">
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  components: { DefaultLayout },
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    },
  },
};
</script>
<style lang="scss"></style>
