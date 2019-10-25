import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: ['first', 'second', 'third'],
    tasks: ['task1', 'task2', 'task3'],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
