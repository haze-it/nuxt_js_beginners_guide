export const store = () => ({
  isLoading: false
})

export const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  }
}