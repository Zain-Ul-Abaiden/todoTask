import { createStore } from 'vuex'
import axios from "axios"
export default createStore({
  state: {
    todo: []
  },
  getters: {
    getTasks(state) {
      return state.todo
    }
  },
  mutations: {
    SET_TODO(state, payload) {
      state.todo = payload
    },
    REMOVE_TODO(state,todoId){
      state.todo.splice(todoId,1)
    }
  },
  actions: {
    async createTask(_,payload){
      try {
        console.log("paylod>>>>>>>>",payload)
        const {data} = await axios.post("http://localhost:3000/api/todoList",payload)
        console.log("data>>>>>>>>", data)
      } catch (error) {
        console.error('Error creating todo:', error)
      }
    },
    async getTask({ commit }) {
      try {
        const { data } = await axios.get('http://localhost:3000/api/todoList')
        console.log("hello ",data)
        commit('SET_TODO', data)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    },
    async deleteTask({ commit},payload) {
      try {
        await axios.delete(`http://localhost:3000/api/todoList/${payload.id}`)
        console.log("hello ",payload)
        commit('REMOVE_TODO', payload.index)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }
  },
  modules: {
  }
})