<template>
    <h2>This is MainBottomComponent</h2>
    <p>Hi {{username}}</p>
</template>

<script>
export default {
  name: "MainBottomComponent",
  inject:['username']
};
</script>

<style scoped>
</style>