<template>
  <article>
    <h1> Здесь могло бы быть Ваше тестовое задание... </h1>
  </article>
</template>

<script>
  export default {
    name: "Additional"
  }
</script>

<style lang="sass" scoped>
  article
    width: 700px
    height: 400px
    margin: 0 auto
    border-radius: 10px
    background-color: #F9FFED
    box-shadow: 0 0 1px 1px grey
    text-align: center

  h1
    padding-top: 180px
    color: dimgray



  @media screen and ( max-width: 750px )
    article
      margin: 0 auto
      width: 300px
      h1
        padding: 150px 20px 20px 20px
</style>
