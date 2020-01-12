<template>
  <div v-if="note">
    <div>{{formatDate}}</div>
    <div>{{note}}</div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "SinglePost",
    props: {
      notes: {
        type: Array
      },
      date: {
        type: Object
      }
    },
    data() {
      return {
        id: null,
        note: {}
      }
    },
    watch: {
      '$route': 'start' // !!!
    },
    mounted() {
      this.start()
    },
    computed: {
      formatDate() {
        let date = moment(String(this.note.date)).format('DD/MMM/YYYY')
        return date
      }
    },
    methods: {
      start() {
        this.$getItem('post').then(res=>{
          const id = this.$route.params.id
          this.note = res[id]
        })
      }
    }
  }
</script>

<style scoped>

</style>