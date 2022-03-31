<template>
  <button @click="isShowPopup = true">Show Popup</button>
  <PopupComponent v-show="isShowPopup" @close="closePopup" />
  <input type="text" v-model="name">
</template>

<script>
import PopupComponent from "./components/Popup.vue";

export default {
  name: "App",
  components: {
    PopupComponent,
  },
  data() {
    return {
      isShowPopup: false,
      name: "",
    };
  },
  methods: {
    closePopup(author) {
      this.isShowPopup = false;
      console.log("name", author);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
