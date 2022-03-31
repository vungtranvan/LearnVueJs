<template>
  <div class="hello">
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<script>
import useCounter from "../mixins/count";

export default {
  name: "HoverCounterComponent",
  setup() {
    const { count, incrementCount } = useCounter();
    return { count, incrementCount };
  },
};
</script>

<style scoped>
</style>
