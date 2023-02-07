<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("toggleHeaderHidden", false);
    this.$store.dispatch("toggleFooterHidden", false);
  },
};
</script>
