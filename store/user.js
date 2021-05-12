import { auth, getCurrentUser } from '~/services/fireinit'

export const state = () => ({
  user: {
    displayName: '',
    uid: null, // no null si está logueado
    email: null
  },
  afterLogin: '/about', // donde dirigirse una vez complete el login (si accedió y no tenía permiso)
  listeningAuth: false
})

export const getters = {
  logged: (state, getters, rootState) => state.user.uid !== null
}

export const mutations = {
  setUser(state, user) {
    if (user) {
      state.user.displayName = user.displayName
      state.user.uid = user.uid
    } else {
      // clearUserState
      state.user.displayName = ''
      state.user.uid = null
    }
  },
  setListeningAuth(state, listening) {
    state.listeningAuth = listening
  },
  setAfterLogin(state, payload) {
    state.afterLogin = payload
  }
}

export const actions = {
  async initAuth({ state, commit, dispatch }) {
    if (!state.listeningAuth) {
      commit('setListeningAuth', true)
      auth.onAuthStateChanged(user => {
        commit('setUser', user)
      })
      const user = await getCurrentUser() // Obtiene el usuario si no se cerrá sesión
      const prevUid = state.user.uid
      const newUid = user ? user.uid : null
      if (prevUid !== newUid) commit('setUser', user)
    }
  },
  async logout({ commit, dispatch }) {
    commit('setUser', null)
    await auth.signOut()
  }
}
