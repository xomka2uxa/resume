<template>
  <div class="sidebar-main">
    <div class="sidebar-main--inner">
      <sidebar-block-app
        v-for="icon in icons"
        :key="icon.name"
        :name="icon.name"
        :title="icon.title"
        :fields="icon.fields"
      />
    </div>
  </div>
</template>

<script>
import SidebarBlockApp from "@/components/sidebar/SidebarBlockApp.vue";
export default {
  components: {
    SidebarBlockApp,
  },
  props: {
    icons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-main {
  width: calc(100% - 54px);
  padding-left: 10px;
  background-color: #222222;
  overflow-y: scroll;
  height: 100vh;
  box-sizing: content-box;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 44px;
  padding-left: 10px;

  &::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-main--inner {
    padding-bottom: 30px;
  }
}
</style>
