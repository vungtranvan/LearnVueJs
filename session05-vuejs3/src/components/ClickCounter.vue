<template>
  <div class="hello">
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<script>
import useCounter from "../mixins/count";

export default {
  name: "ClickCounterComponent",
  setup() {
    const { count, incrementCount } = useCounter();
    return { count, incrementCount };
  },
};
</script>

<style scoped>
</style>
