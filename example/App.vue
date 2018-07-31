<template>
  <div id="app">
    <img src="./assets/logo.png">
    <VEditor msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
/* eslint-disable */
import VEditor from "@/components/VEditor.vue";

export default {
  name: "app",
  components: {
    VEditor
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
