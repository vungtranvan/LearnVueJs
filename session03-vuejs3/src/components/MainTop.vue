<template>
  <h2>This is MainComponent</h2>
  <MainBottomComponent />
</template>

<script>
import MainBottomComponent from "./MainBottom.vue";
export default {
  name: "MainTopComponent",
  components: {
    MainBottomComponent,
  },
};
</script>

<style scoped>
</style>