<template>
  <div id="note">
<!--    <div class="noteNum" title="note number" v-if="note.id">{{notes.id}}</div>-->
    <div class="date" title="date">{{formatDate}}</div>
    <div class="textPart" title="click more-button for read whole text">{{note.note}}</div>
    <div class="rate" title="importance">{{note.rate}}</div>
    <div class="setRate">
      <button class="btnRate" @click="setRate(button.rate)" v-for="(button, index) in buttons"
              :key="index" title="rate">{{button.name}}</button>
    </div>
    <router-link class="more" tag="button" :to="`/sp/${index}`">
      <img src="../assets/more.svg" alt="more" title="more">
    </router-link>
    <button class="remove" @click="remove()">
      <img src="../assets/trash.svg" alt="remove" title="remove">
    </button>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "Note",
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
        buttons: [{name:'Lastly', rate:2},{name:'Simple', rate:5},{name:'Firstly', rate:10}]
      }
    },
    methods: {
      setRate(rate) {
        this.note.rate = rate
        this.$setItem('post', this.notes)
      },
      remove() {
        this.$bus.emit('removeItem', this.note.id)
      }
    },
    computed: {
      formatDate() {
        let date = moment(String(this.note.date)).format('DD MMM YYYY')
        return date
      }
    }
  }
</script>

<style lang="scss" scoped>

  #note {
    background-color: #ECF8E4;
    position: relative;
    height: 140px;
    width: 300px;
    box-shadow: 1px 1px 1px 1px grey;
    border-radius: 5px;
  }

  .date {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 20px;
    width: 150px;
    box-shadow: 1px 1px 1px 1px grey;
    border-radius: 3px;
    padding-top: 2px;
  }
  .date:hover {
    cursor: default;
  }

  .textPart {
    position: absolute;
    top: 40px;
    left: 10px;
    height: 20px;
    width: 150px;
    overflow: hidden;
    text-overflow: clip;
    box-shadow: 1px 1px 1px 1px grey;
    border-radius: 3px;
    padding-top: 2px;
  }
  .textPart:hover {
    cursor: default;
  }

  .setRate {
    position: absolute;
    bottom: 10px;
    left: 25px;
  }

  .btnRate {
    color: black;
    font-weight: normal;
    background-color: #DFF8D2;
    height: 35px;
    border-radius: 5px;
    border: 1px solid grey;
    margin-right: 10px;
  }
  .btnRate:hover {
    cursor: pointer;
  }
  .btnRate:focus {
    outline: grey;
  }

  .rate {
    box-shadow: 0 0 1px 1px grey;
    color: white;
    font-weight: bolder;
    font-size: large;
    background-color: grey;
    position: absolute;
    right: 70px;
    bottom: 70px;
    padding-top: 7px;
    height: 35px;
    width: 35px;
    border: 1px solid grey;
    border-radius: 50%;
  }
  .rate:hover {
    cursor: default;
  }

  .more {
    width: 35px;
    border-radius: 5px;
    border: 1px solid grey;
    background-color: #A7BFDE;
    position: absolute;
    bottom: 10px;
    right: 10px;
    height: 35px;
    img {
      padding-top: 2px;
      height: 20px;
    }
  }
  .more:hover {
    cursor: pointer;
  }

  .remove {
    width: 35px;
    border-radius: 5px;
    border: 1px solid grey;
    background-color: #F4ACA0;
    position: absolute;
    top: 10px;
    right: 10px;
    height: 35px;
    img {
      padding-top: 1px;
      height: 20px;
    }
  }
  .remove:hover {
    cursor: pointer;
  }

</style>
