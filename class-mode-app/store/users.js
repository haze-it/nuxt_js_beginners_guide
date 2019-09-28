export const state = () => ({
  list: []
})

export const mutations = {
  addUser(state, user) {
    state.list.push(user)
  }
}

export const actions = {
  adduser({ commit }, { user }) {
    commit('addUser', user)
  }
}