<template>
  <div>
    <h2>Hello {{ name }}</h2>
    <p>{{ like }}</p>
    <p v-bind="$attrs">{{ isLove }}</p>
    <ComponentA/>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue';

export default {
  name: "HeaderComponent",
  props: {
    name: {
      type: String,
      required: false,
      default: "Vung o",
    },
    isLove: Boolean,
    like: Number,
  },
  inheritAttrs: false,
  components: {
    ComponentA,
  }
};
</script>

<style scoped>
</style>