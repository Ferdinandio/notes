<template>
  <div id="app">
    <div class="wrapper">
      <Header/>
      <router-view class="content" :notes="notes"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Footer from "./components/Footer";
  import Header from "./components/Header";

  export default {
    name: 'App',
    components: {
      Footer,
      Header
    },
    data() {
      return {
        notes: []
      }
    }
  }
</script>

<style>

* {
  box-sizing: border-box;
}

body, html {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

.wrapper {
  position: center;
  top: 0;
  background: gold;
  margin: 0 auto;
  max-width: 900px;
  height: 1024px;
}

</style>
