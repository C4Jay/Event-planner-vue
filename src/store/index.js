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
    cars: [],

    hotel_filter: {},

    band: null,
    car: null,

    catering: null,
    caterings: [],
 
    cake: null,
    cakes: [],

    bridalwear: null,
    bridalwears: []
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

    carset (state, pay) {
      state.cars = pay
    },

    adcatering (state, pay) {
      state.catering = pay
    },

    cateringset (state, pay) {
      state.caterings = pay
    },

    adcake (state, pay) {
      state.cake = pay
    },

    cakeset (state, pay) {
      state.cakes = pay
    },

    adbridalwear (state, pay) {
      state.bridalwear = pay
    },

    bridalwearset (state, pay) {
      state.bridalwears = pay
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


  fetchcars ({commit}) {
    firebase.database().ref('Cars').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].carsname,
            location: obj[key].carslocation,
            category: obj[key].carscategory,
            number: obj[key].carscontact,
            description: obj[key].carsdescription,
            img: obj[key].carsimg,
            img1: obj[key].carsimg1,
            img2: obj[key].carsimg2,
            img3: obj[key].carsimg3,
            img4: obj[key].carsimg4,
            img5: obj[key].carsimg5,
            website: obj[key].carswebsite,
            email: obj[key].carsemail,
            pricemin: obj[key].carspricemin,
            pricemax: obj[key].carspricemax,
            list: obj[key].carslist,
           
        })

    }
    console.log(band)
    commit('carset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //catering

  ad_catering({commit},pay) {
    const cater = {
     cateringname: pay.name,
     cateringlocation: pay.location,
     cateringcontact: pay.contact,
     cateringdescription: pay.description,
     cateringimg: pay.imgurl,
     cateringimg1: pay.imgurl1,
     cateringimg2: pay.imgurl2,
     cateringimg3: pay.imgurl3,
     cateringimg4: pay.imgurl4,
     cateringimg5: pay.imgurl5,
     cateringwebsite: pay.website,
     cateringemail: pay.email,
    //  cateringcategory: pay.categories,
     cateringpricemin: pay.pricemin,
     cateringpricemax: pay.pricemax,
     
      
    }

    firebase.database().ref('Catering').push(cater)
    .then((response) => {
      console.log(response),
      commit('adcatering',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  fetchcatering ({commit}) {
    firebase.database().ref('Catering').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].cateringname,
            location: obj[key].cateringlocation,
            /* category: obj[key].cateringcategory, */
            number: obj[key].cateringcontact,
            description: obj[key].cateringdescription,
            img: obj[key].cateringimg,
            img1: obj[key].cateringimg1,
            img2: obj[key].cateringimg2,
            img3: obj[key].cateringimg3,
            img4: obj[key].cateringimg4,
            img5: obj[key].cateringimg5,
            website: obj[key].cateringwebsite,
            email: obj[key].cateringemail,
            pricemin: obj[key].cateringpricemin,
            pricemax: obj[key].cateringpricemax,
            
           
        })

    }
    console.log(band)
    commit('cateringset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //cake


  ad_cake({commit},pay) {
    const cake = {
     cakename: pay.name,
     cakelocation: pay.location,
     cakecontact: pay.contact,
     cakedescription: pay.description,
     cakeimg: pay.imgurl,
     cakeimg1: pay.imgurl1,
     cakeimg2: pay.imgurl2,
     cakeimg3: pay.imgurl3,
     cakeimg4: pay.imgurl4,
     cakeimg5: pay.imgurl5,
     cakewebsite: pay.website,
     cakeemail: pay.email,
    //  cateringcategory: pay.categories,
     cakepricemin: pay.pricemin,
     cakepricemax: pay.pricemax,
     cakecategory: pay.category
     
      
    }

    firebase.database().ref('Cake').push(cake)
    .then((response) => {
      console.log(response),
      commit('adcake',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  fetchcake ({commit}) {
    firebase.database().ref('Cake').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].cakename,
            location: obj[key].cakelocation,
            /* category: obj[key].cateringcategory, */
            number: obj[key].cakecontact,
            description: obj[key].cakedescription,
            img: obj[key].cakeimg,
            img1: obj[key].cakeimg1,
            img2: obj[key].cakeimg2,
            img3: obj[key].cakeimg3,
            img4: obj[key].cakeimg4,
            img5: obj[key].cakeimg5,
            website: obj[key].cakewebsite,
            email: obj[key].cakeemail,
            pricemin: obj[key].cakepricemin,
            pricemax: obj[key].cakepricemax,
            category: obj[key].cakecategory
            
           
        })

    }
    console.log(band)
    commit('cakeset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //bridalwear

  ad_bridalwear({commit},pay) {
    const cake = {
     bridalwearname: pay.name,
     bridalwearlocation: pay.location,
     bridalwearcontact: pay.contact,
     bridalweardescription: pay.description,
     bridalwearimg: pay.imgurl,
     bridalwearimg1: pay.imgurl1,
     bridalwearimg2: pay.imgurl2,
     bridalwearimg3: pay.imgurl3,
     bridalwearimg4: pay.imgurl4,
     bridalwearimg5: pay.imgurl5,
     bridalwearwebsite: pay.website,
     bridalwearemail: pay.email,
    //  cateringcategory: pay.categories,
     bridalwearpricemin: pay.pricemin,
     bridalwearpricemax: pay.pricemax,
     bridalwearcategory: pay.category,
     bridalwearweddinglist: pay.weddinglist,
     bridalwearhomecominglist: pay.homecominglist
     
      
    }

    firebase.database().ref('Wear').push(cake)
    .then((response) => {
      console.log(response),
      commit('adbridalwear',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },

  fetchbridalwear ({commit}) {
    firebase.database().ref('Wear').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].bridalwearname,
            location: obj[key].bridalwearlocation,
            /* category: obj[key].cateringcategory, */
            number: obj[key].bridalwearcontact,
            description: obj[key].bridalweardescription,
            img: obj[key].bridalwearimg,
            img1: obj[key].bridalwearimg1,
            img2: obj[key].bridalwearimg2,
            img3: obj[key].bridalwearimg3,
            img4: obj[key].bridalwearimg4,
            img5: obj[key].bridalwearimg5,
            website: obj[key].bridalwearwebsite,
            email: obj[key].bridalwearemail,
            pricemin: obj[key].bridalwearpricemin,
            pricemax: obj[key].bridalwearpricemax,
            category: obj[key].bridalwearcategory,
            weddinglist: obj[key].bridalwearweddinglist,
            homecominglist: obj[key].bridalwearhomecominglist
            
           
        })

    }
    console.log(band)
    commit('bridalwearset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

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

    cars (state) {
      return state.cars
    },

    carsfind (state) {
      return (carsid) => {
        return state.cars.find((car) => {
          return car.id == carsid
        })
      }
    },

    catering (state) {
      return state.caterings
    },

    cateringfind (state) {
      return (cateringsid) => {
        return state.caterings.find((catering) => {
          return catering.id == cateringsid
        })
      }
    },

    cakes (state) {
      return state.cakes
    },

    cakesfind (state) {
      return (cakesid) => {
        return state.cakes.find((cake) => {
          return cake.id == cakesid
        })
      }
    },

    bridalwears (state) {
      return state.bridalwears
    },

    bridalwearsfind (state) {
      return (bridalwearsid) => {
        return state.bridalwears.find((bridalwear) => {
          return bridalwear.id == bridalwearsid
        })
      }
    },

  }
})
