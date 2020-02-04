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

  html {
    margin: 0;
  }

  body {
    background-image: url("./assets/bgr.png");
    background-size: cover;
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
  background: whitesmoke;
  margin: 0 auto;
  max-width: 900px;
  min-width: 300px;
  height: 1024px;
  opacity: 0.95;
  box-shadow: 0 0 100px 100px whitesmoke;
}

</style>
