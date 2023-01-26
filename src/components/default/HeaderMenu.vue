<template>
  <ul class="header-menu">
    <li v-for="(item, i) in menu" :key="i" class="menu-link">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  components: {},

  data: () => ({
    menu: [
      { path: "/", title: "Главная" },
      { path: "/about", title: "О сервисе" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.header-menu {
  display: flex;
  justify-content: center;

  @include lg-down {
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 15px;
  }
}
.menu-link {
  padding: 2px;

  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
