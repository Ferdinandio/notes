<template>
  <section>
    <paginate
      :page-range="5"
      :margin-pages="3"
      :page-count="notes.length / step"
      prev-text="prev"
      next-text="next"
      container-class="pagination"
      :hide-prev-next="hidePrevNext"
      :click-handler="clickCallback">
    </paginate>
    <div class="listPostsHidden">{{notes}}</div>
    <p>Choose Date
      <date-picker class="someDate" v-model="date" lang="en" type="date" name="date" format="DD-MM-YYYY" width="200"/>
    </p>
    <div class="textIn">
      <p>Let's write</p>
      <label>
        <textarea class="someText" ref="field" rows="5" name="note" v-model="note"
                  placeholder="write text"/>
      </label>
    </div>
    <button @click="add()">save</button>
    <button @click="sortRate()">sort by importance</button>
    <div id="exclude" v-if="notes.length">
      <note v-for="(note, index) in page" :notes="notes" :note="note" :index="index" :key="index"/>
    </div>
    <router-view/>
  </section>
</template>

<script>
  import Vue from 'vue'
  import Note from '../components/Note.vue'
  import DatePicker from 'vue2-datepicker'
  import Paginate from 'vuejs-paginate'

  Vue.component('paginate', Paginate)

  export default {
    name: 'Home',
    components: {
      DatePicker,
      Note
    },
    mounted() {
      this.$getItem('post').then(res=>{
        this.notes = res
        this.page = res.filter((e, index) => index < 2)
      })
    },
    data() {
      return {
        date: '',
        notes: [],
        note: '',
        page: [],
        pageNumber: 1,
        step: 2
      }
    },
    methods: {
      add() {
        const note={date:this.date, note:this.note, rate: 5}
        this.notes.push(note)
        this.note = ''
        this.$refs.field.focus()
        this.date = ''
        this.$setItem('post', this.notes)
      },
      sortRate() {
        this.notes.sort((a, b) => b.rate - a.rate)
        this.clickCallback(this.pageNumber)
      },
      clickCallback(pageNum) {
        const start = (pageNum * this.step) - this.step
        const end = (pageNum * this.step)
        this.pageNumber = pageNum
        this.page = this.notes.filter((e, index) => index >= start && index < end)
      }
    },
    computed: {
      hidePrevNext() {
        return this.pageNumber === 1 || this.pageNumber >= this.notes.length / this.step
      }
    }
  }
</script>

<style lang="scss">

  .pagination {
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: whitesmoke;

    li {
      padding: 10px;
      list-style: none;
      color: blue;
    }

    a {
      color: lightsteelblue;
    }

    .active {
      a {
        color: #2c3e50;
      }
    }
  }

  .someDate {

  }

  .textIn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 400px;
    margin: auto;
  }

  .someText {

  }

  .listPostsHidden {
    display: none;
  }

</style>
