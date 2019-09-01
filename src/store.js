import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 1

    },

    getters: {
        doubleCounter(state) {
            return state.counter * 2
        }
    },

    mutations: {
        mutateCounter(state) {
            state.counter += 1
        }
    },

})

export default store