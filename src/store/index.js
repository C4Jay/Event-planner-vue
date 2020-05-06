import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    user: null,
    hotel: null,
    photography: null,

    hotels: [],
    photographys: [],
    bands: [],

    hotel_filter: {},

    band: null,
    car: null
  
  },

  mutations: {

    setUser (state, pay) {
      state.user = pay
    },

    adhotel (state, pay) {
      state.hotel = pay
    },

    hotelset (state, pay) {
      state.hotels = pay
    },

    filter_hotel(state, pay) {
      state.hotel_filter = pay
    },

    photographyset (state, pay) {
      state.photographys = pay
    },

    adphotography (state, pay) {
      state.photography = pay
    },

    adband (state, pay) {
      state.band = pay
    },

    bandset (state, pay) {
      state.bands = pay
    },

    adcar (state, pay) {
      state.car = pay
    },
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



//Hotel

    ad_hotel({commit},pay) {
      const hotel = {
        hotelname: pay.name,
        hotellocation: pay.location,
        hotelcontact: pay.contact,
        hotelcapacity: pay.capacity,
        hotelhall: pay.hall,
        hoteldescription: pay.description,
        hotelimg: pay.imgurl,
        hotelimg1: pay.imgurl1,
        hotelimg2: pay.imgurl2,
        hotelimg3: pay.imgurl3,
        hotelimg4: pay.imgurl4,
        hotelimg5: pay.imgurl5,
        hotelwebsite: pay.website,
        hotelemail: pay.email
        
      }

      firebase.database().ref('Hotels').push(hotel)
      .then((response) => {
        console.log(response),
        commit('adhotel',{response})
      })
      .catch(err => {
        console.log(err)
      })
    },


    fetchHotels ({commit}) {
      firebase.database().ref('Hotels').once('value')
      .then((data) => {
       
        const hotel = []
        const obj = data.val()
        for(let key in obj) {
          hotel.push({
              id: key,
              name: obj[key].hotelname,
              location: obj[key].hotellocation,
              capacity: obj[key].hotelcapacity,
              number: obj[key].hotelcontact,
              description: obj[key].hoteldescription,
              img: obj[key].hotelimg,
              img1: obj[key].hotelimg1,
              img2: obj[key].hotelimg2,
              img3: obj[key].hotelimg3,
              img4: obj[key].hotelimg4,
              img5: obj[key].hotelimg5,
              website: obj[key].hotelwebsite,
              email: obj[key].hotelemail,
              hall: obj[key].hotelhall

          })

      }
      console.log(hotel)
      commit('hotelset',hotel)
      })
      .catch(
          (error) => {
              console.log(error)
          }
      )
      

    },


    filterhotel ({commit}, pay) {
      commit('filter_hotel',pay)
    },
  

//Photography

  ad_photography({commit},pay) {
    const photography = {
      phototgraphyname: pay.name,
      phototgraphylocation: pay.location,
      photographycontact: pay.contact,
      photographydescription: pay.description,
      photographyimg: pay.imgurl,
      photographyimg1: pay.imgurl1,
      photographyimg2: pay.imgurl2,
      photographyimg3: pay.imgurl3,
      photographyimg4: pay.imgurl4,
      photographyimg5: pay.imgurl5,
      photographywebsite: pay.website,
      photographyemail: pay.email,
      photographycategories: pay.categories
      
    }

    firebase.database().ref('Photography').push(photography)
    .then((response) => {
      console.log(response),
      commit('adphotography',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  fetchPhotography ({commit}) {
    firebase.database().ref('Photography').once('value')
    .then((data) => {
     
      const photography = []
      const obj = data.val()
      for(let key in obj) {
        photography.push({
            id: key,
            name: obj[key].phototgraphyname,
            location: obj[key].phototgraphylocation,
            categories: obj[key].photographycategories,
            number: obj[key].photographycontact,
            description: obj[key].photographydescription,
            img: obj[key].photographyimg,
            img1: obj[key].photographyimg1,
            img2: obj[key].photographyimg2,
            img3: obj[key].photographyimg3,
            img4: obj[key].photographyimg4,
            img5: obj[key].photographyimg5,
            website: obj[key].photographywebsite,
            email: obj[key].photographyemail,
           
        })

    }
    console.log(photography)
    commit('photographyset',photography)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //bands

  ad_bands({commit},pay) {
    const band = {
     bandsname: pay.name,
     bandslocation: pay.location,
     bandscontact: pay.contact,
     bandsdescription: pay.description,
     bandsimg: pay.imgurl,
     bandsimg1: pay.imgurl1,
     bandsimg2: pay.imgurl2,
     bandsimg3: pay.imgurl3,
     bandsimg4: pay.imgurl4,
     bandsimg5: pay.imgurl5,
     bandswebsite: pay.website,
     bandsemail: pay.email,
     bandscategory: pay.categories,
     bandspricemin: pay.pricemin,
     bandspricemax: pay.pricemax
      
    }

    firebase.database().ref('Bands').push(band)
    .then((response) => {
      console.log(response),
      commit('adband',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  fetchbands ({commit}) {
    firebase.database().ref('Bands').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].bandsname,
            location: obj[key].bandslocation,
            category: obj[key].bandscategory,
            number: obj[key].bandscontact,
            description: obj[key].bandsdescription,
            img: obj[key].bandsimg,
            img1: obj[key].bandsimg1,
            img2: obj[key].bandsimg2,
            img3: obj[key].bandsimg3,
            img4: obj[key].bandsimg4,
            img5: obj[key].bandsimg5,
            website: obj[key].bandswebsite,
            email: obj[key].bandsemail,
            pricemin: obj[key].bandspricemin,
            pricemax: obj[key].bandspricemax,
           
        })

    }
    console.log(band)
    commit('bandset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //cars

  ad_cars({commit},pay) {
    const car = {
     carsname: pay.name,
     carslocation: pay.location,
     carscontact: pay.contact,
     carsdescription: pay.description,
     carsimg: pay.imgurl,
     carsimg1: pay.imgurl1,
     carsimg2: pay.imgurl2,
     carsimg3: pay.imgurl3,
     carsimg4: pay.imgurl4,
     carsimg5: pay.imgurl5,
     carswebsite: pay.website,
     carsemail: pay.email,
     carscategory: pay.categories,
     carspricemin: pay.pricemin,
     carspricemax: pay.pricemax,
     carslist: pay.list
      
    }

    firebase.database().ref('Cars').push(car)
    .then((response) => {
      console.log(response),
      commit('adcar',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },

},


  modules: {
  },

  getters: {
    hotels (state) {
      return state.hotels
    },

    hotelsfind (state) {
      return (hotelid) => {
        return state.hotels.find((hotel) => {
          return hotel.id == hotelid
        })
      }
    },

    hotelfilter (state) {
      return state.hotel_filter
    },

    photographys (state) {      
      return state.photographys    
    },

    photographysfind (state) {
      return (photographyid) => {
        return state.photographys.find((photography) => {
          return photography.id == photographyid
        })
      }
    },

    bands (state) {
      return state.bands
    },

    bandsfind (state) {
      return (bandsid) => {
        return state.bands.find((band) => {
          return band.id == bandsid
        })
      }
    },
  }
})
