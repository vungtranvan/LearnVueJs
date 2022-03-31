<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "DemoOneComponent",
  setup() {
    const name = ref("Vung");

    setTimeout(() => {
      name.value = "Đạt";
    }, 5000);

    watch(name, (newValue, oldValue) => {
      console.log("new value", newValue);
      console.log("old value", oldValue);
    }),
      {
        immediate: true,
      };

    return { name };
  },
};
</script>

<style scoped>
</style>
