<template>
  <div>Option API Lifecycle Hook</div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "LifecycleCComponent",
  setup() {
    onBeforeMount(() => {
      console.log("LifecycleO in onBeforeMount()");
    });
    onMounted(() => {
      console.log("LifecycleO in onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("LifecycleO in onBeforeUpdate()");
    });
    onUpdated(() => {
      console.log("LifecycleO in onUpdated()");
    });
    onBeforeUnmount(() => {
      console.log("LifecycleO in onBeforeUnmount()");
    });
    onUnmounted(() => {
      console.log("LifecycleO in onUnmounted()");
    });
  }
};
</script>

<style scoped>
</style>
