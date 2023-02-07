<template>
  <div class="block-content" :id="title">
    <div class="block-title">
      <icon-app :name="name" />
      {{ title }}
    </div>
    <field-app v-for="field in fields" :key="field" :fieldName="field" />
  </div>
</template>

<script>
import FieldApp from "@/components/ui/FieldApp.vue";
import IconApp from "@/components/ui/IconApp.vue";
export default {
  components: {
    FieldApp,
    IconApp,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.block-content {
  @include xl-down {
    padding-left: 25px;
  }
}
.block-title {
  min-height: 77.22px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Roboto Condensed, Arial, sans-serif;
  font-size: 20px;
  font-weight: 300;
  padding: 10px 0;
}
</style>
