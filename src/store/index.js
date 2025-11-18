import { createStore } from 'vuex'

export default createStore({
  state: {
    userVitals: {
      weight: 0,
      heartRate: 0,
      bloodPressure: ''
    },
    history: [],
    // NEW: Track if we are currently saving data
    isLoading: false 
  },

  mutations: {
    UPDATE_VITALS(state, payload) {
      state.userVitals = { ...state.userVitals, ...payload }
    },
    LOG_HISTORY(state) {
      state.history.push({
        ...state.userVitals,
        timestamp: new Date().toLocaleTimeString()
      })
    },
    // NEW: Toggle loading status
    SET_LOADING(state, status) {
      state.isLoading = status
    }
  },

  actions: {
    // We turn this into an 'async' function to simulate a real API call
    async saveVitals({ commit }, payload) {
      commit('SET_LOADING', true) // 1. Turn on loading spinner

      // 2. Simulate a 1-second delay (like waiting for a server)
      await new Promise(resolve => setTimeout(resolve, 1000))

      commit('UPDATE_VITALS', payload)
      commit('LOG_HISTORY')
      
      commit('SET_LOADING', false) // 3. Turn off loading spinner
    }
  },

  getters: {
    getLatestVitals: (state) => state.userVitals,
    getHistoryCount: (state) => state.history.length,
    // NEW: Helper to let components know if we are loading
    isSaving: (state) => state.isLoading
  }
})