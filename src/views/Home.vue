<template>
  <article class="welcome">
    <h2> Добро пожаловать на мой скромный проект! </h2><hr>
    <h4> Здесь я попытался воспользоваться всеми недавно приобретёнными мной навыками
      программирования и вёрстки. </h4><hr>
    <h4> Буду Вам очень признателен, если познакомитесь с ним поближе;) </h4>
  </article>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="sass">
  .welcome
    height: 400px
    border-radius: 10px
    box-shadow: 0 0 1px 1px grey
    background-color: #F9FFED
    margin: 50px auto
    width: 700px
    color: dimgray
    h2
      padding: 30px 20px 20px 20px
    h4
      padding: 30px 20px 20px 20px

  @media screen and ( max-width: 750px )
    .welcome
      margin: 0 auto
      width: 300px
      h2
        padding: 30px 20px 20px 20px
      h4
        margin: 10px
        padding: 10px


</style>
