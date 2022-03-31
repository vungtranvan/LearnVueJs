<template>
  <div>
    <h2>Hello {{ name }}</h2>
    <p>{{ like }}</p>
    <p v-bind="$attrs">{{ isLove }}</p>
    <MainTopComponent/>
  </div>
</template>

<script>
import MainTopComponent from './MainTop.vue';

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
    MainTopComponent,
  }
};
</script>

<style scoped>
</style>