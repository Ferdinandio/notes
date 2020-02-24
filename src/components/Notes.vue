<template>
  <section>
    <div class="listPostsHidden">{{pageCount}} / {{notes.length}} / {{pageNumber}}</div>
    <section id="content">
      <div class="content-1" v-if="notes.length">
        <div id="exclude">
          <note v-for="(note, index) in page" :notes="notes" :note="note" :index="index" :key="index"/>
          <button title="sort by importance" class="btnSort" @click="sortRate()">SORT</button>
        </div>
        <paginate
          :page-range="3"
          :margin-pages="2"
          :page-count="pageCount"
          prev-text="prev"
          next-text="next"
          container-class="pagination"
          :hide-prev-next="hidePrevNext"
          :force-page="pageNumber"
          :click-handler="clickCallback">
        </paginate>
      </div>
      <div class="empty" v-else>
        <p>Добро пожаловать на страницу с заметками!</p>
        <p>Пожалуйста, выберите дату, введите заметку и кликните по кнопке "Add Note"</p>
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
            <textarea id="someText" ref="field" rows="5" name="note" v-model="note"
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

  function generateId() {
    return Math.random().toString(36).substring(2, 9)
  }
  export default {
    name: 'Notes',
    components: {
      DatePicker,
      Note
    },
    beforeDestroy() {
      this.$bus.off('removeItem')
    },
    mounted() {
      this.$getItem('post').then(res=>{
        if (res) {
          this.notes = res
          this.page = res.filter((e, index) => index < 2)
        }
      })
      this.$bus.on('removeItem', (id) => {
        const index = this.notes.findIndex(e => e.id === id)
        if (index !== -1) {
          this.notes.splice(index, 1)
          this.clickCallback(this.pageNumber)
          if (this.page.length === 0) {
            this.lastPage()
          }
          this.$setItem('post', this.notes)
        }
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
        const note = { id: generateId(), date: this.date, note: this.note, rate: 5 }
        this.notes.push(note)
        // eslint-disable-next-line no-console
        console.log(this.notes)
        this.note = ''
        this.$refs.field.focus()
        this.date = ''
        this.$setItem('post', this.notes)
        this.lastPage()
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
      },
      lastPage() {
        const last = this.pageCount
        this.clickCallback(last)
        this.pageNumber = last
      }
    },
    computed: {
    pageCount() {
      return Math.ceil(this.notes.length / this.step)
    },
      hidePrevNext() {
        return this.pageNumber === 1 || this.pageNumber >= this.notes.length / this.step
      }
    }
  }
</script>

<style lang="scss" scoped>

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
        color: whitesmoke;
      }
    }
  }
                                            //////////////////
  #content {
    display: flex;
    justify-content: space-around;
    .content-1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      #exclude {
        background-color: #F9FFED;
        min-width: 310px;
        max-width: 400px;
        height: 450px;
        margin-right: 5px;
        margin-left: 5px;
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-evenly;
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
      @media screen and ( max-width: 750px ) {
        max-width: 310px;
      }
    }
                                                    ///////////////////////////////
    .content-2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      h5 {
        width: 100px;
      }

      .dateIn {
        background-color: #F9FFED;
        width: 400px;
        height: 100px;
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        box-shadow: 0 0 2px 2px lightgrey;
        border-radius: 10px;
      }

      @media screen and (max-width: 750px) {
        .content-2 {
          justify-content: space-around;
          margin-left: 5px;
          max-width: 400px;
        }
        .dateIn {
          margin-left: 5px;
          width: 310px;
        }
        h5 {
          width: 200px;
          margin: 10px auto;
        }
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
      }
      @media screen and ( min-width: 750px ) {
        #someText {
          width: 330px;
          height: 250px;
          background-color: #ECF8E4;
          box-shadow: 0 0 1px 1px grey;
          border-radius: 5px;
          overflow: hidden;
        }
        #someText:focus {
          outline: grey;
        }
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
        @media screen and ( max-width: 750px ) {
          .textIn {
            margin-left: 5px;
            width: 310px;
            height: 350px;
          }
        .h5 {
          margin-right: 260px;
          margin-top: 20px;
          margin-bottom: 0;
          width: 300px;
        }
        .btnAdd {
          margin-bottom: 50px;
        }
        @media screen and ( max-width: 750px ) {
          .h5 {
            margin-right: 3%;
          }
        }
        label {
          height: 250px;
        }
        @media screen and ( max-width: 750px ) {
          #someText {
            margin-top: 20px;
            width: 250px;
            height: 200px;
            background-color: #ECF8E4;
            box-shadow: 0 0 1px 1px grey;
            border-radius: 5px;
            overflow: hidden;
          }
          #someText:focus {
            outline: grey;
          }
        }
      }
    }
  }

  .empty {
    background-color: #F9FFED;
    width:500px;
    height: 540px;
    margin-top: 40px;
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: start;
    /**/
    box-shadow: 0 0 2px 2px lightgrey;
    border-radius: 10px;
    p {
      color: darkslategray;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 23px;
      margin-top: 30px;
      height: 100px;
      width: 240px;
      background-color: #ECF8E4;
      box-shadow: 0 0 2px 2px grey;
      border-radius: 5px;
      overflow: hidden;
    }
  }

  .listPostsHidden { display: none; }

  ///////////////////////////////////////////////////////

  @media screen and ( max-width: 750px ) {
    #content {
      max-width: 400px;
      flex-wrap: wrap;
      .empty {
        height: 300px;
        margin-left: 5px;
        width: 310px;
        margin-top: 20px;
      }
    }
  }
</style>
