<template>
  <div>
    <h2>This is a popup</h2>
    <button @click="$emit('close','vung')">Close popup</button>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  emits: ["close"],
};
</script>

<style scoped>
</style>
