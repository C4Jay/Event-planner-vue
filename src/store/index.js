import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    user: null,
    hotel: null,
    fhotel: null,
    photography: null,

    hotels: [],
    photographys: [],
    bands: [],
    cars: [],

    hotel_filter: {},

    band: null,
    fband: null,
    car: null,
    fcar: null,

    catering: null,
    fcatering: null,
    caterings: [],
 
    cake: null,
    fcake: null,
    cakes: [],

    bridalwear: null,
    fbridalwear: null,
    bridalwears: [],

    location: null,
    flocation: null,
    locations: [],

    card: null,
    fcard: null,
    cards: [],

    salon: null,
    fsalon: null,
    salons: [],

    flora: null,
    fflora: null,
    floras: [],

    fvendors: [],

    offer: null
  },

  mutations: {

    setUser (state, pay) {
      state.user = pay
    },

    adhotel (state, pay) {
      state.hotel = pay
    },

    fadhotel (state, pay) {
      state.fhotel = pay
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

    fadphotography (state, pay) {
      state.fphotography = pay
    },

    adband (state, pay) {
      state.band = pay
    },

    fadband (state, pay) {
      state.fband = pay
    },

    bandset (state, pay) {
      state.bands = pay
    },

    adcar (state, pay) {
      state.car = pay
    },

    fadcar (state, pay) {
      state.fcar = pay
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

    fadcake (state, pay) {
      state.fcake = pay
    },

    cakeset (state, pay) {
      state.cakes = pay
    },

    adbridalwear (state, pay) {
      state.bridalwear = pay
    },

    fadbridalwear (state, pay) {
      state.fbridalwear = pay
    },

    bridalwearset (state, pay) {
      state.bridalwears = pay
    },

    adlocation (state, pay) {
      state.location = pay
    },

    fadlocation (state, pay) {
      state.flocation = pay
    },

    locationset (state, pay) {
      state.locations = pay
    },

    adcard (state, pay) {
      state.card = pay
    },

    fadcard (state, pay) {
      state.fcard = pay
    },

    cardset (state, pay) {
      state.cards = pay
    },

    adsalon (state, pay) {
      state.salon = pay
    },

    fadsalon (state, pay) {
      state.fsalon = pay
    },

    salonset (state, pay) {
      state.salons = pay
    },

    adflora (state, pay) {
      state.flora = pay
    },

    fadflora (state, pay) {
      state.fflora = pay
    },

    floraset (state, pay) {
      state.floras = pay
    },

    fvendorsset (state, pay) {
      state.fvendors = pay
    },

    adoffer (state, pay) {
      state.offer = pay
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
        type: "hotel",
        hotelname: pay.name,
        hotellocation: pay.location,
        hotelcontact: pay.contact,
        hotelcapacity: pay.capacity,
        hotelhall: pay.hall,
        hoteldescription: pay.description,
        hotelimg: pay.imgurl,
        hotelimg6: pay.imgurl6,
        hotelimg2: pay.imgurl2,
        hotelimg3: pay.imgurl3,
        hotelimg4: pay.imgurl4,
        hotelimg5: pay.imgurl5, verified: "no",
        hotelwebsite: pay.website,
        hotelemail: pay.email,
        time:  moment().format('MMMM Do YYYY, h:mm:ss a')
        
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

    f_ad_hotel({commit},pay) {
      const hotel = {
        type: "hotel",
        name: pay.name,
        location: pay.location,
        contact: pay.contact,
        capacity: pay.capacity,
        hall: pay.hall,
        description: pay.description,
        img: pay.imgurl,
        img6: pay.imgurl6,
        img2: pay.imgurl2,
        img3: pay.imgurl3,
        img4: pay.imgurl4,
        img5: pay.imgurl5, verified: "no",
        website: pay.website,
        email: pay.email
        
      }

      firebase.database().ref('Featured').push(hotel)
      .then((response) => {
        console.log(response),
        commit('fadhotel',{response})
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
              img1: obj[key].hotelimg6,
              img2: obj[key].hotelimg2,
              img3: obj[key].hotelimg3,
              img4: obj[key].hotelimg4,
              img5: obj[key].hotelimg5,
              website: obj[key].hotelwebsite,
              email: obj[key].hotelemail,
              hall: obj[key].hotelhall,
              verified: obj[key].verified

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
      type: "photography",
      phototgraphyname: pay.name,
      phototgraphylocation: pay.location,
      photographycontact: pay.contact,
      photographydescription: pay.description,
      photographyimg: pay.imgurl,
      photographyimg1: pay.imgurl1,
      photographyimg2: pay.imgurl2,
      photographyimg3: pay.imgurl3,
      photographyimg4: pay.imgurl4,
      photographyimg5: pay.imgurl5, verified: "no",
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

  f_ad_photography({commit},pay) {
    const photography = {
      type: "photography",
      name: pay.name,
      location: pay.location,
      contact: pay.contact,
      description: pay.description,
      img: pay.imgurl,
      img1: pay.imgurl1,
      img2: pay.imgurl2,
      img3: pay.imgurl3,
      img4: pay.imgurl4,
      img5: pay.imgurl5, verified: "no",
      website: pay.website,
      email: pay.email,
      categories: pay.categories
      
    }

    firebase.database().ref('Featured').push(photography)
    .then((response) => {
      console.log(response),
      commit('fadphotography',{response})
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
            verified: obj[key].verified
           
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
     type: "band",
     bandsname: pay.name,
     bandslocation: pay.location,
     bandscontact: pay.contact,
     bandsdescription: pay.description,
     bandsimg: pay.imgurl,
     bandsimg1: pay.imgurl1,
     bandsimg2: pay.imgurl2,
     bandsimg3: pay.imgurl3,
     bandsimg4: pay.imgurl4,
     bandsimg5: pay.imgurl5, verified: "no",
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

  f_ad_bands({commit},pay) {
    const band = {
     type: "band",
     name: pay.name,
     location: pay.location,
     contact: pay.contact,
     description: pay.description,
     img: pay.imgurl,
     img1: pay.imgurl1,
     img2: pay.imgurl2,
     img3: pay.imgurl3,
     img4: pay.imgurl4,
     img5: pay.imgurl5, verified: "no",
     website: pay.website,
     email: pay.email,
     category: pay.categories,
     pricemin: pay.pricemin,
     pricemax: pay.pricemax
      
    }

    firebase.database().ref('Featured').push(band)
    .then((response) => {
      console.log(response),
      commit('fadband',{response})
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
            verified: obj[key].verified
           
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
      type: "car",
     carsname: pay.name,
     carslocation: pay.location,
     carscontact: pay.contact,
     carsdescription: pay.description,
     carsimg: pay.imgurl,
     carsimg1: pay.imgurl1,
     carsimg2: pay.imgurl2,
     carsimg3: pay.imgurl3,
     carsimg4: pay.imgurl4,
     carsimg5: pay.imgurl5, verified: "no",
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

  f_ad_cars({commit},pay) {
    const car = {
      type: "car",
     name: pay.name,
     location: pay.location,
     contact: pay.contact,
     description: pay.description,
     img: pay.imgurl,
     img1: pay.imgurl1,
     img2: pay.imgurl2,
     img3: pay.imgurl3,
     img4: pay.imgurl4,
     img5: pay.imgurl5, verified: "no",
     website: pay.website,
     email: pay.email,
     category: pay.categories,
     pricemin: pay.pricemin,
     pricemax: pay.pricemax,
     list: pay.list
      
    }

    firebase.database().ref('Featured').push(car)
    .then((response) => {
      console.log(response),
      commit('fadcar',{response})
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
            verified: obj[key].verified
           
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
     cateringimg5: pay.imgurl5, verified: "no",
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
            verified: obj[key].verified
            
           
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
      type: "cake",
     cakename: pay.name,
     cakelocation: pay.location,
     cakecontact: pay.contact,
     cakedescription: pay.description,
     cakeimg: pay.imgurl,
     cakeimg1: pay.imgurl1,
     cakeimg2: pay.imgurl2,
     cakeimg3: pay.imgurl3,
     cakeimg4: pay.imgurl4,
     cakeimg5: pay.imgurl5, verified: "no",
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

  f_ad_cake({commit},pay) {
    const cake = {
      type: "cake",
     name: pay.name,
     location: pay.location,
     contact: pay.contact,
     description: pay.description,
     img: pay.imgurl,
     img1: pay.imgurl1,
     img2: pay.imgurl2,
     img3: pay.imgurl3,
     img4: pay.imgurl4,
     img5: pay.imgurl5, verified: "no",
     website: pay.website,
     email: pay.email,
    //  cateringcategory: pay.categories,
     pricemin: pay.pricemin,
     pricemax: pay.pricemax,
     category: pay.category
     
      
    }

    firebase.database().ref('Featured').push(cake)
    .then((response) => {
      console.log(response),
      commit('fadcake',{response})
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
            category: obj[key].cakecategory,
            verified: obj[key].verified
            
           
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
      type: "bridalwear",
     bridalwearname: pay.name,
     bridalwearlocation: pay.location,
     bridalwearcontact: pay.contact,
     bridalweardescription: pay.description,
     bridalwearimg: pay.imgurl,
     bridalwearimg1: pay.imgurl1,
     bridalwearimg2: pay.imgurl2,
     bridalwearimg3: pay.imgurl3,
     bridalwearimg4: pay.imgurl4,
     bridalwearimg5: pay.imgurl5, verified: "no",
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


  f_ad_bridalwear({commit},pay) {
    const cake = {
      type: "bridalwear",
     name: pay.name,
     location: pay.location,
     contact: pay.contact,
     description: pay.description,
     img: pay.imgurl,
     img1: pay.imgurl1,
     img2: pay.imgurl2,
     img3: pay.imgurl3,
     img4: pay.imgurl4,
     img5: pay.imgurl5, verified: "no",
     website: pay.website,
     email: pay.email,
    //  cateringcategory: pay.categories,
     pricemin: pay.pricemin,
     pricemax: pay.pricemax,
     category: pay.category,
     weddinglist: pay.weddinglist,
     homecominglist: pay.homecominglist
     
      
    }

    firebase.database().ref('Featured').push(cake)
    .then((response) => {
      console.log(response),
      commit('fadbridalwear',{response})
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
            homecominglist: obj[key].bridalwearhomecominglist,
            verified: obj[key].verified
            
           
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



  //location


  ad_location({commit},pay) {
    const location = {
      type: "location",
     locationname: pay.name,
     locationlocation: pay.location,
     locationcontact: pay.contact,
     locationdescription: pay.description,
     locationimg: pay.imgurl,
     locationimg1: pay.imgurl1,
     locationimg2: pay.imgurl2,
     locationimg3: pay.imgurl3,
     locationimg4: pay.imgurl4,
     locationimg5: pay.imgurl5, verified: "no",
     locationwebsite: pay.website,
     locationemail: pay.email,
    //  cateringcategory: pay.categories,
     locationpricemin: pay.pricemin,
     locationpricemax: pay.pricemax,
    //  locationcategory: pay.category
     
      
    }

    firebase.database().ref('Location').push(location)
    .then((response) => {
      console.log(response),
      commit('adlocation',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  f_ad_location({commit},pay) {
    const location = {
      type: "location",
     name: pay.name,
     location: pay.location,
     contact: pay.contact,
     description: pay.description,
     img: pay.imgurl,
     img1: pay.imgurl1,
     img2: pay.imgurl2,
     img3: pay.imgurl3,
     img4: pay.imgurl4,
     img5: pay.imgurl5, verified: "no",
     website: pay.website,
     email: pay.email,
    //  cateringcategory: pay.categories,
     pricemin: pay.pricemin,
     pricemax: pay.pricemax,
    //  locationcategory: pay.category
     
      
    }

    firebase.database().ref('Featured').push(location)
    .then((response) => {
      console.log(response),
      commit('fadlocation',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  fetchlocation ({commit}) {
    firebase.database().ref('Location').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].locationname,
            location: obj[key].locationlocation,
            /* category: obj[key].cateringcategory, */
            number: obj[key].locationcontact,
            description: obj[key].locationdescription,
            img: obj[key].locationimg,
            img1: obj[key].locationimg1,
            img2: obj[key].locationimg2,
            img3: obj[key].locationimg3,
            img4: obj[key].locationimg4,
            img5: obj[key].locationimg5,
            website: obj[key].locationwebsite,
            email: obj[key].locationemail,
            pricemin: obj[key].locationpricemin,
            pricemax: obj[key].locationpricemax,
            // category: obj[key].locationcategory
            verified: obj[key].verified
          
           
        })

    }
    console.log(band)
    commit('locationset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //cards/gifts

  ad_card({commit},pay) {
    const card = {
      type: "card",
     cardname: pay.name,
     cardlocation: pay.location,
     cardcontact: pay.contact,
     carddescription: pay.description,
     cardimg: pay.imgurl,
     cardimg1: pay.imgurl1,
     cardimg2: pay.imgurl2,
     cardimg3: pay.imgurl3,
     cardimg4: pay.imgurl4,
     cardimg5: pay.imgurl5, verified: "no",
     cardwebsite: pay.website,
     cardemail: pay.email,
    //  cateringcategory: pay.categories,
     cardpricemin: pay.pricemin,
     cardpricemax: pay.pricemax,
     cardcategory: pay.category,
     
      
    }

    firebase.database().ref('CardsGifts').push(card)
    .then((response) => {
      console.log(response),
      commit('adcard',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  f_ad_card({commit},pay) {
    const card = {
      type: "card",
     name: pay.name,
     location: pay.location,
     contact: pay.contact,
     description: pay.description,
     img: pay.imgurl,
     img1: pay.imgurl1,
     img2: pay.imgurl2,
     img3: pay.imgurl3,
     img4: pay.imgurl4,
     img5: pay.imgurl5, verified: "no",
     website: pay.website,
     email: pay.email,
    //  cateringcategory: pay.categories,
     pricemin: pay.pricemin,
     pricemax: pay.pricemax,
     category: pay.category,
     
      
    }

    firebase.database().ref('Featured').push(card)
    .then((response) => {
      console.log(response),
      commit('fadcard',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  fetchcard ({commit}) {
    firebase.database().ref('CardsGifts').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].cardname,
            location: obj[key].cardlocation,
            /* category: obj[key].cateringcategory, */
            number: obj[key].cardcontact,
            description: obj[key].carddescription,
            img: obj[key].cardimg,
            img1: obj[key].cardimg1,
            img2: obj[key].cardimg2,
            img3: obj[key].cardimg3,
            img4: obj[key].cardimg4,
            img5: obj[key].cardimg5,
            website: obj[key].cardwebsite,
            email: obj[key].cardemail,
            pricemin: obj[key].cardpricemin,
            pricemax: obj[key].cardpricemax,
            category: obj[key].cardcategory,
            verified: obj[key].verified
            
           
        })

    }
    console.log(band)
    commit('cardset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //salons


  ad_salon({commit},pay) {
    const salon = {
      type: "salon",
     salonname: pay.name,
     salonlocation: pay.location,
     saloncontact: pay.contact,
     salondescription: pay.description,
     salonimg: pay.imgurl,
     salonimg1: pay.imgurl1,
     salonimg2: pay.imgurl2,
     salonimg3: pay.imgurl3,
     salonimg4: pay.imgurl4,
     salonimg5: pay.imgurl5, verified: "no",
     salonwebsite: pay.website,
     salonemail: pay.email,
    //  cateringcategory: pay.categories,
     salonpricemin: pay.pricemin,
     salonpricemax: pay.pricemax,
    //  saloncategory: pay.category,
     
      
    }

    firebase.database().ref('Salons').push(salon)
    .then((response) => {
      console.log(response),
      commit('adsalon',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  f_ad_salon({commit},pay) {
    const salon = {
      type: "salon",
     name: pay.name,
     location: pay.location,
     contact: pay.contact,
     description: pay.description,
     img: pay.imgurl,
     img1: pay.imgurl1,
     img2: pay.imgurl2,
     img3: pay.imgurl3,
     img4: pay.imgurl4,
     img5: pay.imgurl5, verified: "no",
     website: pay.website,
     email: pay.email,
    //  cateringcategory: pay.categories,
     pricemin: pay.pricemin,
     pricemax: pay.pricemax,
    //  saloncategory: pay.category,
     
      
    }

    firebase.database().ref('Featured').push(salon)
    .then((response) => {
      console.log(response),
      commit('fadsalon',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  fetchsalon ({commit}) {
    firebase.database().ref('Salons').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].salonname,
            location: obj[key].salonlocation,
            /* category: obj[key].cateringcategory, */
            number: obj[key].saloncontact,
            description: obj[key].salondescription,
            img: obj[key].salonimg,
            img1: obj[key].salonimg1,
            img2: obj[key].salonimg2,
            img3: obj[key].salonimg3,
            img4: obj[key].salonimg4,
            img5: obj[key].salonimg5,
            website: obj[key].salonwebsite,
            email: obj[key].salonemail,
            pricemin: obj[key].salonpricemin,
            pricemax: obj[key].salonpricemax,
            // category: obj[key].saloncategory,
            verified: obj[key].verified
            
           
        })

    }
    console.log(band)
    commit('salonset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //flora


  ad_flora({commit},pay) {
    const flora = {
      type: "flora",
     floraname: pay.name,
     floralocation: pay.location,
     floracontact: pay.contact,
     floradescription: pay.description,
     floraimg: pay.imgurl,
     floraimg1: pay.imgurl1,
     floraimg2: pay.imgurl2,
     floraimg3: pay.imgurl3,
     floraimg4: pay.imgurl4,
     floraimg5: pay.imgurl5, verified: "no",
     florawebsite: pay.website,
     floraemail: pay.email,
    //  cateringcategory: pay.categories,
     florapricemin: pay.pricemin,
     florapricemax: pay.pricemax,
    //  saloncategory: pay.category,
     
      
    }

    firebase.database().ref('Flora').push(flora)
    .then((response) => {
      console.log(response),
      commit('adflora',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  f_ad_flora({commit},pay) {
    const flora = {
      type: "flora",
     name: pay.name,
     location: pay.location,
     contact: pay.contact,
     description: pay.description,
     img: pay.imgurl,
     img1: pay.imgurl1,
     img2: pay.imgurl2,
     img3: pay.imgurl3,
     img4: pay.imgurl4,
     img5: pay.imgurl5, verified: "no",
     website: pay.website,
     email: pay.email,
    //  cateringcategory: pay.categories,
     pricemin: pay.pricemin,
     pricemax: pay.pricemax,
    //  saloncategory: pay.category,
     
      
    }

    firebase.database().ref('Featured').push(flora)
    .then((response) => {
      console.log(response),
      commit('fadflora',{response})
    })
    .catch(err => {
      console.log(err)
    })
  },


  fetchflora ({commit}) {
    firebase.database().ref('Flora').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].floraname,
            location: obj[key].floralocation,
            /* category: obj[key].cateringcategory, */
            number: obj[key].floracontact,
            description: obj[key].floradescription,
            img: obj[key].floraimg,
            img1: obj[key].floraimg1,
            img2: obj[key].floraimg2,
            img3: obj[key].floraimg3,
            img4: obj[key].floraimg4,
            img5: obj[key].floraimg5,
            website: obj[key].florawebsite,
            email: obj[key].floraemail,
            pricemin: obj[key].florapricemin,
            pricemax: obj[key].florapricemax,
            // category: obj[key].saloncategory,
            verified: obj[key].verified,
            hall: obj[key].hall
            
           
        })

    }
    console.log(band)
    commit('floraset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },


  //Fvendors


 

  fetchfvendors ({commit}) {
    firebase.database().ref('Featured').once('value')
    .then((data) => {
     
      const band = []
      const obj = data.val()
      for(let key in obj) {
        band.push({
            id: key,
            name: obj[key].name,
            location: obj[key].location,
            category: obj[key].category,
            capacity: obj[key].capacity,
            number: obj[key].contact,
            description: obj[key].description,
            img: obj[key].img,
            img1: obj[key].img1,
            img2: obj[key].img2,
            img3: obj[key].img3,
            img4: obj[key].img4,
            img5: obj[key].floraimg5,
            website: obj[key].website,
            email: obj[key].email,
            pricemin: obj[key].pricemin,
            pricemax: obj[key].pricemax,
            // category: obj[key].saloncategory,
            verified: obj[key].verified,
            list: obj[key].list,
            type: obj[key].type,

           
        })

    }
    console.log(band)
    commit('fvendorsset',band)
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )
    

  },

  messaging({commit},pay) {
    const message = {
      
     name: pay.name,
     email: pay.email,
     number: pay.number,
     vendorname: pay.vendorname,
     vendornumber: pay.vendornumber,
     vendoremail: pay.vendoremail,
     message: pay.message,
     time: moment().format('MMMM Do YYYY, h:mm:ss a')
      
    }

    firebase.database().ref('Messages').push(message)
    .then((response) => {
      console.log(response)
      commit('adcar',response)
    })
    .catch(err => {
      console.log(err)
    })
  },


  ad_offer({commit},pay) {
    const offer = {
      // type: "flora",
     offername: pay.name,
     offerlocation: pay.location,
     offercontact: pay.contact,
     offerdescription: pay.description,
     offerimg: pay.imgurl,
     offerimg1: pay.imgurl1,
     verified: "no",
     offertitle: pay.offertitle
   
    //  cateringcategory: pay.categories,
     
    //  saloncategory: pay.category,
     
      
    }

    firebase.database().ref('Offers').push(offer)
    .then((response) => {
      console.log(response),
      commit('adoffer',{response})
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

    locations (state) {
      return state.locations
    },

    locationsfind (state) {
      return (locationsid) => {
        return state.locations.find((location) => {
          return location.id == locationsid
        })
      }
    },

    cards (state) {
      return state.cards
    },

    cardsfind (state) {
      return (cardsid) => {
        return state.cards.find((card) => {
          return card.id == cardsid
        })
      }
    },

    salons (state) {
      return state.salons
    },

    salonsfind (state) {
      return (salonsid) => {
        return state.salons.find((salon) => {
          return salon.id == salonsid
        })
      }
    },

    floras (state) {
      return state.floras
    },

    florasfind (state) {
      return (florasid) => {
        return state.floras.find((flora) => {
          return flora.id == florasid
        })
      }
    },


    fvendors (state) {
      return state.fvendors
    },

    fvendorsfind (state) {
      return (fvendorsid) => {
        return state.fvendors.find((fvendor) => {
          return fvendor.id == fvendorsid
        })
      }
    },


  }
})
