<template>
  <section class="header">
    <input id="toggle" type="checkbox">
    <img class="logoButtonBurger" src="../assets/burgerButton.png" alt="Menu">
    <label class="toggleContainer" for="toggle">
      <img class="buttonCloseHid" src="../assets/buttonClose.png" alt="Close" title="Open"/>
      <img class="buttonClose" src="../assets/buttonClose.png" alt="Close" title="Close"/>
    </label>
    <nav class="nav">
      <router-link tag="div" class="a" title="Домашняя страница" to="/">Home</router-link>
      <router-link tag="div" class="a" title="Записная книжка" to="/notes">Notes</router-link>
      <router-link tag="div" class="a" title="Загруженные посты" :to="`/wp`">WebPosts</router-link>
      <router-link tag="div" class="a" title="Дополнительный компонент (возможно, здесь находится Ваше тестовое задание)"
                   :to="`/further`">Additional</router-link>
    </nav>
  </section>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>

  .header {
    position: relative;
    height: 50px;
    background-color: whitesmoke;
    width: 100%;
  }

  .logoButtonBurger {
    float: left;
    opacity: 0;
    height: 50px;
    margin-left: 20px;
    transition-duration: 0.5s;
  }

  .nav {
    z-index: 1;
    max-width: 350px;
    top: 15px;
    margin-left: 25px;
    position: absolute;
    transition-duration: 0.5s;
  }

  .a {
    float: left;
    color: grey;
    padding-right: 15px;
    text-decoration: none;
    transition-duration: 0.5s;
  }
  .a:hover { cursor: pointer; color: darkslategray; }

  .toggleContainer {
    display: none;
    .buttonCloseHid {
      position: absolute;
      z-index: 1;
      left: 20px;
      height: 50px;
      transition-duration: 0.5s;
    }
    .buttonClose {
      position: absolute;
      left: 20px;
      height: 50px;
      transition-duration: 0.5s;
    }
  }
  .toggleContainer:hover { cursor: pointer; }

  @media screen and ( max-width: 400px ) {
    .nav { opacity: 0; top: 60px; width: 100px; }

    .a { transform: rotate(720deg);  height: 40px; margin-left: -120px }

    .logoButtonBurger { opacity: 1; transform: rotate(180deg) }

    .toggleContainer {
      opacity: 0;
      display: block;
      position: absolute;
      height: 50px;
      margin-left: 0;
      transition-duration: 0.5s;
      .buttonCloseHid {
        transform: rotate(180deg);
        opacity: 0;
        position: absolute;
        left: 20px;
        height: 50px;
        transition-duration: 0.5s;
      }
      .buttonClose {
        opacity: 0;
        left: 20px;
        transition-duration: 0.5s;
      }
    }
  }

  @media screen and ( min-width: 400px ) {
    .nav {
      position: relative;
      display: inline;
      width: 350px;
    }
  }

  #toggle:checked {
    & ~ .nav {
      max-width: 100px;
      opacity: 1;
      .a {
        margin-left: 0;
        display: block;
        height: 40px;
      }
    }
    & ~ .logoButtonBurger {
      float: left;
      opacity: 0;
      height: 50px;
      width: 50px;
      margin-left: 20px;
      transform: rotate(-180deg);
      transition-duration: 0.5s;
    }
    & ~ .toggleContainer {
      opacity: 1;
      height: 200px;
      width: 120px;
      text-align: left;
      background-color: whitesmoke;
      transition-duration: 0.5s;
      .buttonClose {
        opacity: 1;
        position: absolute;
        transform: rotate(-180deg);
        left: 20px;
        height: 50px;
        transition-duration: 0.5s;
      }
      .buttonCloseHid {
        opacity: 1;
        position: absolute;
        z-index: 0;
        transform: rotate(-180deg);
        left: 20px;
        height: 50px;
        transition-duration: 0.5s;
      }
    }
  }

  #toggle {
    display: none;
  }

  label {
    z-index: 1;
    box-shadow: 1px 1px 1px 1px dimgray;
    border-radius: 0 0 5px 0;
  }

</style>
