<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <LifecycleCComponent />
  <ClickCounterComponent />
  <HoverCounterComponent />
  <DemoOneComponent />
  <DemoTwoComponent />
  <TemplateRefComponent />
  <PostListComponent />
</template>

<script>
import PostListComponent from "./components/PostList.vue";
import TemplateRefComponent from "./components/TemplateRef.vue";
import ClickCounterComponent from "./components/ClickCounter.vue";
import HoverCounterComponent from "./components/HoverCounter.vue";
import DemoOneComponent from "./components/DemoOne.vue";
import DemoTwoComponent from "./components/DemoTwo.vue";
import LifecycleCComponent from "./components/LifecycleC.vue";
export default {
  name: "App",
  components: {
    PostListComponent,
    TemplateRefComponent,
    ClickCounterComponent,
    HoverCounterComponent,
    DemoOneComponent,
    DemoTwoComponent,
    LifecycleCComponent
  },
};
</script>

<style>
</style>
