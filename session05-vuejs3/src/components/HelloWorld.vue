<template>
  <Teleport to="body">
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
