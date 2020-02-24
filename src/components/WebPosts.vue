<template>
  <section>
      <paginate
        :page-range="3"
        :margin-pages="2"
        :page-count="allPosts / step"
        prev-text="prev"
        next-text="next"
        container-class="pagination"
        :hide-prev-next="hidePrevNext"
        :click-handler="clickCallback">
      </paginate>
    <div id="exclude" v-if="allPosts">
      <div class="pageWrap">
        <div v-for="(item, index) in page" :key="index" class="item" :class="selectColor(index)">{{ item.body }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import Paginate from 'vuejs-paginate'
  import { mapActions, mapGetters } from 'vuex'


  Vue.component('paginate', Paginate)

  export default {
    name: "WebPosts",
    data: () => ({
      pageNumber: 1,
      step: 5
    }),
    methods: {
      ...mapActions(['loadPage']),
      clickCallback(pageNum) {
        this.pageNumber = pageNum
        this.loadPage(pageNum)
      },
      selectColor(index) {
        return this.pageNumber === 2 && index === 0 && 'active'
      }
    },
    computed: {
      ...mapGetters(['page', 'allPosts']),
      hidePrevNext() {
      return this.pageNumber === 1 || this.pageNumber >= this.allPosts / this.step
      }
    },
    mounted() {
      this.loadPage(this.pageNumber)
    }
  }
</script>

<style lang="sass">

  .pagination
    margin: 0 auto
    display: flex
    justify-content: center
    background-color: whitesmoke
    li
      padding: 7px
      list-style: none
      color: blue

    a
      color: gray
      outline: none

    .active
      a
        border-radius: 2px
        padding: 2px 2px 2px 2px
        background-color: dimgray
        color: whitesmoke

  .item
    border: black solid 1px
    width: fit-content
    margin: 10px auto
    padding: 5px

  .active
    color: black
  /* color of item which you want to change!!!*/
</style>
