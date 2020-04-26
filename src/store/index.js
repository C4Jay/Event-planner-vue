import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    user: null,
    hotel: null
  },

  mutations: {

    setUser (state, pay) {
      state.user = pay
    },

    adhotel (state, pay) {
      state.hotel = pay
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
    },


    signUserin ({commit}, pay) {
      firebase.auth().signInWithEmailAndPassword(pay.email,pay.password)
      .then(
        user => {
          const newUser = {
            id: user.user.uid
          }
          console.log(user)

          commit ('setUser', newUser)
        }
      )
      .catch(err => {
        console.log(err)
      })
    },

    signUserout ({commit}) {
      firebase.auth().signOut()
      .then(response => {
        console.log(response)

        commit ('setUser', null)
      }
      ).catch(err => {
        console.log(err)
      })
    },

    ad_hotel({commit},pay) {
      const hotel = {
        hotelname: pay.name,
        hotellocation: pay.location,
        hotelcontact: pay.contact,
        hotelcapacity: pay.capacity,
        hoteldescription: pay.description,
        hotelimg: pay.imgurl
      }

      firebase.database().ref('Hotels').push(hotel)
      .then((response) => {
        console.log(response),
        commit('adhotel',{response})
      })
      .catch(err => {
        console.log(err)
      })
    }
  },


  modules: {
  }
})
