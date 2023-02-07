<template>
  <div class="left-sidebar">
    <div class="left-sidebar-content">
      <sidebar-icon
        :icons="icons"
        @scrollHandle="scrollBlock"
        :open="isSidebarMain"
      />
      <sidebar-main
        :icons="icons"
        class="sidebar-text"
        :class="{ __mobile: isSidebarMain }"
      />
      <div class="btn-toggle" @click="isSidebarMain = !isSidebarMain">
        <icon-app :name="nameIcon" :inToggle="true" />
      </div>
    </div>
    <div class="overlay" @click="isSidebarMain = false"></div>
  </div>
</template>

<script>
import SidebarIcon from "@/components/sidebar/SidebarIcon.vue";
import SidebarMain from "@/components/sidebar/SidebarMain.vue";
import IconApp from "@/components/ui/IconApp.vue";

export default {
  components: {
    SidebarIcon,
    SidebarMain,
    IconApp,
  },
  data: () => ({
    isSidebarMain: false,
    icons: [
      {
        name: "account",
        title: "Основное",
        fields: [
          "image",
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
        ],
      },
      {
        name: "map",
        title: "Местоположение",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "instagram",
        title: "Соц. сети",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "briefcase",
        title: "Опыт работы",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "school",
        title: "Образование",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "seal",
        title: "Награды",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "certificate",
        title: "Сертификаты",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "math-compass",
        title: "Навыки",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "book-open-variant",
        title: "Публикации",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "web",
        title: "Знание языков",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "brush",
        title: "Интересы",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "book-account",
        title: "Портфолио",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
      {
        name: "account-group",
        title: "Отзывы",
        fields: [
          "fullName",
          "birthDate",
          "email",
          "telephone",
          "website",
          "image",
        ],
      },
    ],
  }),
  computed: {
    nameIcon() {
      return this.isSidebarMain
        ? "arrow-left-drop-circle"
        : "arrow-right-drop-circle";
    },
  },
  methods: {
    scrollBlock(block) {
      this.isSidebarMain = true;
      document.getElementById(block).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.left-sidebar {
  width: 30%;
  transition: width 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;

  @include xl-down {
    width: 100%;
  }

  .overlay {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: 1;

    @include xl-down {
      display: block;
    }
  }

  .left-sidebar-content {
    display: flex;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }

  .sidebar-text {
    @include xl-down {
      display: none;
    }

    &.__mobile {
      display: block;
      width: 50%;

      @include xl-down {
        width: 45%;
      }

      @include sm-down {
        width: 75%;
      }
    }
  }

  .btn-toggle {
    display: none;
    position: absolute;
    top: 21px;
    left: 44px;
    width: 26px;
    height: 50px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    z-index: 2;
    background-color: #de8e22;

    @include xl-down {
      display: flex;
    }

    &:hover,
    &:active {
      background-color: #c07209;
    }
  }
}
</style>
