<template>
  <div>
    <h2>{{ firstName }} - {{ lastName }}</h2>
    <h2>{{ fname }} - {{ lname }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
export default {
  name: "DemoTwoComponent",
  setup() {
    const state = reactive({
      firstName: "Tran",
      lastName: "Vung",
    });

    setTimeout(() => {
      state.firstName = "Đạt";
      state.lastName = "Tran";
      console.log(state);
    }, 5000);

    watch(
      () => {
        return { ...state };
      },
      (newValue, oldValue) => {
        console.log("new value 1: ", newValue);
        console.log("old value 1: ", oldValue);
      }
    );

    // watch(
    //   () => state.firstName,
    //   (newValue, oldValue) => {
    //     console.log("new value 1: ", newValue);
    //     console.log("old value 1: ", oldValue);
    //   }
    // );

    return { ...toRefs(state) };
  },
  data() {
    return {
      fname: "Tran",
      lname: "Vung",
    };
  },
};
</script>

<style scoped>
</style>
