<template>
  <div id="app">
    <div class="wrapper">
      <section class="header">
        <router-link to="/">Home</router-link>
        <router-link tag="button" :to="`/wp`">WebPosts</router-link>
      </section>
      <router-view :notes="notes"/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      Footer
    },
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
  color: #000000;
}

.wrapper {
  background: #ff6262;
  margin: 0 auto;
  max-width: 900px;
  height: 1024px;
}
</style>
