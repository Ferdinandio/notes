<!--<template>-->
<!--  -->
<!--</template>-->

<!--<script>-->
<!--  import Vue from 'vue'-->
<!--  import Note from '../components/Note.vue'-->
<!--  import DatePicker from 'vue2-datepicker'-->
<!--  import Paginate from 'vuejs-paginate'-->

<!--  Vue.component('paginate', Paginate)-->
<!--  export default {-->
<!--    name: 'NotesX',-->
<!--    components: {-->
<!--      DatePicker,-->
<!--      Note-->
<!--    },-->
<!--    mounted() {-->
<!--      this.$getItem('post').then(res=>{-->
<!--        this.notes = res-->
<!--        this.page = res.filter((e, index) => index < 2)-->
<!--        this.notesNew = this.notes.length % 2 === 0 ? this.notes.length : this.notes.length + 1-->
<!--      })-->
<!--      this.$bus.on('removeItem', (id) => {-->
<!--        const index = this.notes.findIndex(e => e.id === id)-->
<!--        if (index !== -1) {-->
<!--          this.notes.splice(index, 1)-->
<!--          this.notesNew = this.notes.length % 2 === 0 ? this.notes.length : this.notes.length + 1-->
<!--          this.clickCallback(this.notesNew / this.step)-->
<!--        }-->
<!--      })-->
<!--    },-->
<!--    data() {-->
<!--      return {-->
<!--        date: '',-->
<!--        notes: [],-->
<!--        note: '',-->
<!--        page: [],-->
<!--        pageNumber: 1,-->
<!--        step: 2,-->
<!--        notesNew: 1-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      add() {-->
<!--        const note = { date: this.date, note: this.note, rate: 5 }-->
<!--        this.notes.push(note)-->
<!--        this.note = ''-->
<!--        this.$refs.field.focus()-->
<!--        this.date = ''-->
<!--        this.$setItem('post', this.notes)-->
<!--        this.notesNew = this.notes.length % 2 === 0 ? this.notes.length : this.notes.length + 1-->
<!--        this.clickCallback(this.notesNew / this.step)-->
<!--      },-->
<!--      sortRate() {-->
<!--        this.notes.sort((a, b) => b.rate - a.rate)-->
<!--        this.clickCallback(this.pageNumber)-->
<!--      },-->
<!--      clickCallback(pageNum) {-->
<!--        const start = (pageNum * this.step) - this.step-->
<!--        const end = (pageNum * this.step)-->
<!--        this.pageNumber = pageNum-->
<!--        this.page = this.notes.filter((e, index) => index >= start && index < end)-->
<!--      }-->
<!--    },-->
<!--    computed: {-->
<!--      pageCount() {-->
<!--        return this.notesNew / this.step-->
<!--      },-->
<!--      hidePrevNext() {-->
<!--        return this.pageNumber === 1 || this.pageNumber >= this.notes.length / this.step-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
