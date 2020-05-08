<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App",
    create() {

    },
    data() {
      return {}
    },
    methods: {},
    mounted() {

    },
  }
</script>
<style lang="less">
  html, body, #app{
    height: 100%;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    font-size: 16px;
    background: #F0F2F5;
    overflow: auto;
  }
</style>
