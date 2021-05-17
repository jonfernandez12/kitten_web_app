<template>
  <div id="firebaseui-auth-container" />
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import firebaseConfig, { auth } from '~/services/fireinit'
export default {
  loading: false,
  // middleware: 'autenticado', // poner en todas las páginas que requieran autenticacin, menos esta!
  data: () => ({}),
  async fetch({ store }) {
    await store.dispatch('user/initAuth')
  },
  computed: {
    ...mapGetters('user', ['logged']),
    ...mapState('user', ['afterLogin'])
  },
  watch: {
    logged: {
      immediate: true,
      handler(logged) {
        if (logged) this.next()
      }
    }
  },
  mounted() {
    const firebaseui = require('firebaseui')
    this.showLogin(firebaseui)
  },
  methods: {
    next() {
      this.$router.push(this.afterLogin)
    },
    showLogin(firebaseui) {
      const uiConfig = {
         //signInSuccessUrl: '/posts', //En Nuxt esto sería un problema, ya que firebase-ui no usa vue-route
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebaseConfig.auth.GoogleAuthProvider.PROVIDER_ID,
          // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          // firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebaseConfig.auth.EmailAuthProvider.PROVIDER_ID,
          // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '/posts',
        // Privacy policy url/callback.
        // privacyPolicyUrl: function() {
        //  window.location.assign('<your-privacy-policy-url>')
        // }
        callbacks: {
          signInSuccessWithAuthResult() {
            return 0
          }
        }
      }
      const ui =
        firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  }
}
</script>

<style src="~/node_modules/firebaseui/dist/firebaseui.css"></style>
<!-- The core Firebase JS SDK is always required and must be listed first -->
