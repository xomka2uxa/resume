<template>
  <div class="wrapper">
    <header-app />
    <slot />
  </div>
</template>

<script lang="js">
import HeaderApp from "@/components/layout/HeaderApp.vue";
export default {
  name: "DefaultLayout",
  components: {
    HeaderApp,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    },
  },
};
</script>

<style lang="scss"></style>
