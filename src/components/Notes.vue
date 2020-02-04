<template>
  <section>
    <div class="listPostsHidden">{{notes}}</div>
    <section id="content">
      <div class="content-1">
        <div id="exclude" v-if="notes.length">
          <note v-for="(note, index) in page" :notes="notes" :note="note" :index="index" :key="index"/>
          <button title="sort by importance" class="btnSort" @click="sortRate()">SORT</button>
        </div>
        <paginate
          :page-range="3"
          :margin-pages="2"
          :page-count="lengthCount / step"
          prev-text="prev"
          next-text="next"
          container-class="pagination"
          :hide-prev-next="hidePrevNext"
          :click-handler="clickCallback">
        </paginate>
      </div>
      <div class="content-2">
        <div class="dateIn">
          <h5>Choose Date</h5>
          <date-picker v-model="date" lang="en" type="date"
                       name="date" format="DD-MM-YYYY"/>
        </div>

        <div class="textIn">

          <h5 class="h5">Let's write</h5>

          <label>
            <textarea class="someText" ref="field" rows="5" name="note" v-model="note"
                      placeholder="write text"/>
          </label>

          <button class="btnAdd" @click="add()">Add Note</button>
        </div>
      </div>
    </section>
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
        this.lengthCount = this.notes.length % 2 === 0 ? this.notes.length : this.notes.length + 1
      })
    },
    data() {
      return {
        date: '',
        notes: [],
        note: '',
        page: [],
        pageNumber: 1,
        step: 2,
        lengthCount: 1
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
        if (this.notes.length % 2 === 0) {
          this.lengthCount = this.notes.length
        } else { this.lengthCount = this.notes.length + 1 }
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
    padding: 0;
    margin-top: 30px;
    margin-bottom: 0;
    width: 300px;
    display: flex;
    justify-content: center;
    background-color: whitesmoke;

    li {
      padding: 10px;
      list-style: none;
      color: blue;
    }

    a {
      color: gray;
      outline: none;
    }

    .active {
      a {
        color: #2c3e50;
      }
    }
  }

  #content {
    display: flex;
    justify-content: space-around;
    .content-1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      #exclude {
        background-color: #F9FFED;
        width:400px;
        height: 450px;
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-evenly;
        /**/
        box-shadow: 0 0 2px 2px lightgrey;
        border-radius: 10px;
        .btnSort {
          width: 200px;
          box-shadow: 0 0 1px 1px grey;
          color: white;
          font-weight: bolder;
          background-color: grey;
          font-size: large;
        }
        .btnSort:hover {
          cursor: pointer;
        }
        .btnSort:focus {
          outline: grey;
        }
      }
    }

    .content-2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .dateIn {
        background-color: #F9FFED;
        width:400px;
        height: 100px;
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        box-shadow: 0 0 2px 2px lightgrey;
        border-radius: 10px;
      }
      .mx-datepicker {
        display: flex;
        align-items: center;
      }
      .mx-input {
        background-color: #ECF8E4;
        box-shadow: 1px 1px 1px 1px grey;
        border-radius: 5px;
      }
      .mx-calendar {
        background-color: #F9FFED;
      }
      .textIn {
        background-color: #F9FFED;
        width:400px;
        height: 400px;
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
        box-shadow: 0 0 2px 2px lightgrey;
        border-radius: 10px;
        .h5 {
          margin-right: 260px;
          margin-top: 20px;
          margin-bottom: 0;
          width: 300px;
        }
        label {
          height: 250px;
        }
        .someText {
          background-color: #ECF8E4;
          max-width: 330px;
          min-width: 330px;
          max-height: 250px;
          min-height: 250px;
          box-shadow: 0 0 1px 1px grey;
          border-radius: 5px;
          overflow: hidden;
        }
        .someText:focus {
          outline: grey;
        }
        .btnAdd {
          width: 200px;
          box-shadow: 0 0 1px 1px grey;
          color: white;
          font-weight: bolder;
          background-color: grey;
          font-size: large;
        }
        .btnAdd:hover {
          cursor: pointer;
        }
        .btnAdd:focus {
          outline: grey;
        }
      }
    }
  }

  .listPostsHidden { display: none; }
</style>
