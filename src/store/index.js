import { createStore } from 'vuex'

export default createStore({
  state: {
    Fav: {
        items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('Fav')) {
        state.Fav = JSON.parse(localStorage.getItem('Fav'))
      } else {
        localStorage.setItem('Fav', JSON.stringify(state.Fav))
      }

      if (localStorage.getItem('token')) {
          state.token = localStorage.getItem('token')
          state.isAuthenticated = true
      } else {
          state.token = ''
          state.isAuthenticated = false
      } 
    },
    addToFav(state, item) {
      const exists = state.Fav.items.filter(i => i.product.id === item.product.id)
      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.Fav.items.push(item)
      }

      localStorage.setItem('Fav', JSON.stringify(state.Fav))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
    },  
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },
    clearFav(state) {
      state.Fav = { items: [] }

      localStorage.setItem('Fav', JSON.stringify(state.Fav))
    },
  },
  actions: {
  },
  modules: {
  }
})
