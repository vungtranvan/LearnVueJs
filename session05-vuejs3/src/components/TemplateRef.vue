<template>
  <div class="hello">
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "TemplateRefComponent",
  setup() {
    onMounted(() => {
     // this.$refs.inputRef.focus();
    });
  },
};
</script>

<style scoped>
</style>
