<template>
  <article class="welcome">
    <h2> Добро пожаловать на мой скромный проект! </h2><br>
    <h4> Здесь я попытался воспользоваться всеми недавно приобретёнными мной навыками
      программирования и вёрстки. </h4><br>
    <h4> Буду Вам очень признателен, если познакомитесь с ним поближе;) </h4>
  </article>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss">
  .welcome {
    height: 400px;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px grey;
    background-color: #F9FFED;
    margin: 50px auto;
    width: 800px;
    color: dimgray;
    h2 {
      padding-top: 50px;
    }
    h4 {
      margin-top: 50px;
    }
  }
</style>
