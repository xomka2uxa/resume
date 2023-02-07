<template>
  <div class="creating-resume">
    <div class="inner">
      <left-sidebar />
      <div class="main">eere</div>
      <!-- <div class="right-sidebar col-30">555</div> -->
    </div>
  </div>
</template>

<script>
import LeftSidebar from "@/components/sidebar/LeftSidebar.vue";
export default {
  components: {
    LeftSidebar,
  },
  mounted() {
    this.$store.dispatch("toggleHeaderHidden", true);
    this.$store.dispatch("toggleFooterHidden", true);
  },
};
</script>

<style lang="scss" scoped>
.creating-resume {
  height: 100%;

  .inner {
    height: 100%;

    .right-sidebar {
      background-color: #222222;
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      overflow: hidden;
      z-index: 2;
    }

    .main {
      background-color: #fbf9f7;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
