<template>
  <div class="main">
    <first-main-app />
    <tabs-screen-app />
    <posts-app />
  </div>
</template>

<script>
import FirstMainApp from '@/components/default/FirstMainApp.vue';
import TabsScreenApp from '@/components/default/TabsScreenApp.vue';
import PostsApp from '@/components/default/PostsApp.vue';

export default {
  name: 'HomeView',
  components: {
    FirstMainApp,
    TabsScreenApp,
    PostsApp,
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-bottom: 120px;
}
</style>
