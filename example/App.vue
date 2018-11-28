<template>
  <div id="app">
    <img src="./assets/logo.png">
    <VEditor msg="Welcome to Your Vue.js App"/>
    <VInput id="input1" type="text" v-model="input1Val" label="Input 1"/>
    <div v-html="input1Val"></div>
  </div>
</template>

<script>
/* eslint-disable */
import VEditor from "@/components/VEditor";
import VInput from "@/components/VInput";

export default {
  name: "app",
  components: {
    VEditor,
    VInput
  },
  data: () => ({
    input1Val: ''
  })
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
