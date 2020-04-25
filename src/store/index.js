import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    user: null
  },

  mutations: {

    setUser (state, pay) {
      state.user = pay
    }
  },

  actions: {
    signUserup ({commit}, pay) {
      firebase.auth().createUserWithEmailAndPassword(pay.email, pay.password)
      .then(
        user => {
          const newUser = {
            id: user.user.uid
          }

          commit ('setUser', newUser)
        }
      )

      .catch(
        error => {
          console.log(error)
        }
      )
    }
  },


  modules: {
  }
})
