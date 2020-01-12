import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.use(Vuex, axios, VueAxios)

const store = new Vuex.Store({
  state: {
    page: [],
    allPosts: 0
  },
  getters: {
    page: state => state.page,
    allPosts: state => state.allPosts

  },
  mutations: {
    setPosts(state, {page, allPosts}) {
      state.page = page
      state.allPosts = allPosts
    },
    dec(state, payload) {
      state.count = state.count - payload
    }
  },
  actions: {
    loadPage({commit}, pageNum) {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
        let posts = data.data
        let allPosts = posts.length
        let step = 5
        const start = (pageNum * step) - step
        const end = (pageNum * step)
        const page = posts.filter((e, index) => index >= start && index < end)
        commit('setPosts', {page, allPosts})
      })
    },
    decrement(context, payload) {
      context.commit('dec', payload)
    }
  }
})
export default store
