<template>
  <div>
    <div>{{formatDate}}</div>
    <div>{{note.note}}</div>
    <div>{{note.rate}}</div>
    <button @click="setRate(button.rate)" v-for="(button, index) in buttons" :key="index">{{button.name}}</button><br>
    <router-link tag="button" :to="`/sp/${index}`">more</router-link>
    <button @click="remove()">remove</button>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "Post",
    props: {
      notes: {
        type: Array
      },
      note: {
        type: Object
      },
      index: {
        type: Number
      }
    },
    data() {
      return {
        buttons: [{name:'Lastly',rate:2},{name:'Simple',rate:5},{name:'Firstly',rate:10}]
      }
    },
    methods: {
      setRate(rate) {
        this.note.rate = rate
        this.$setItem('post', this.notes)
      },
      remove() {
        this.notes.splice(this.index, 1)
        this.$setItem('post', this.notes)
      }
    },
    computed: {
      formatDate() {
        let date = moment(String(this.note.date)).format('DD/MMM/YYYY')
        return date
      }
    }
  }
</script>

<style scoped>

</style>
