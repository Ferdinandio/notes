<template>
  <div id="app">
    <div class="homeWrap">
      <router-link to="/">Home</router-link>
    </div>
    <router-view :notes="notes"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        notes: []
      }
    }
  }
</script>

<style>

  body, html {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #47b983;
  }

  a.router-link-exact-active.router-link-active {
    color: currentColor;
  }

  .homeWrap {
    background-color: white;
  }

  .textIn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 400px;
    margin: auto;
  }

  .someText {
    margin-left: 5px;
    min-width: 500px;
  }

  .a {
    display: none;
  }

  ul {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
</style>
