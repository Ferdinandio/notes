<template>
  <transition name="fade">
    <section class="footer" v-show="scrolled">
      <ul class="footerList">
        <li title="About project"><a href="">О проекте</a></li>
        <li title="About me"><a href="">Обо мне</a></li>
        <li title="Email"><a class="letterIcon" href="">✉</a></li>
      </ul>
      <p class="corp">© Klassen D</p>
    </section>
  </transition>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        scrolled: false
      }
    },
    methods: {
      scrollCount() {
        this.scrolled = pageYOffset > 100;
      }
        // if (pageYOffset > 100) {
        //   this.scrolled = true               !!!!!!!!!
        // } else {
        //   this.scrolled = false
        // }
    },
    mounted() {
      // this.$nextTick(() => {                                            !!!!!!!!
      window.addEventListener('scroll', this.scrollCount)
      // })
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollCount)
    }
  }
</script>

<style scoped>

.footer {
  position: fixed;
  background-color: lightgray;
  height: 35px;
  width: 100%;
  min-width: 500px;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footerList {
  margin: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 20px;
}

a {
  padding-right: 15px;
  font-size: small;
  color: dimgray;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: darkgray;
}

.letterIcon {
  margin-bottom: 15px;
  font-size: large;
}

.corp {
  margin: 0;
  color: dimgray;
  font-size: small;
  padding-right: 20px;
  cursor: default;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
