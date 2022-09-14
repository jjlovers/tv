/**
 * States
 * *************************/
const state = () => ({
  categories: []
})

/**
 * Mutations
 * *************************/
const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  }
}

/**
 * Getters
 * *************************/
const getters = {
  getCategories(state) {
    return state.categories
  }
}

/**
 * Actions
 * *************************/
const actions = {
  readCategories({ commit }) {
    try {
      this.$api.media.readCategories().then((res) => {
        commit('SET_CATEGORIES', res.data)
      })
    } catch (e) {}
  }
}

export default { state, mutations, getters, actions }
