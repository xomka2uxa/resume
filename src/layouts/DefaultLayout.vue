<template>
  <div class="wrapper">
    <header-app />
    <slot />
    <footer-app />
  </div>
</template>

<script lang="js">
import HeaderApp from "@/components/layout/HeaderApp.vue";
import FooterApp from "@/components/layout/FooterApp.vue";
export default {
  name: "DefaultLayout",
  components: {
    HeaderApp,
    FooterApp,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    },
  },
};
</script>

<style lang="scss"></style>
