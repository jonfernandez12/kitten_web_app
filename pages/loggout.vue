<template>
  <h1>Good Bye!</h1>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    loading: false,
    // middleware: 'autenticado', // poner en todas las páginas que requieran autenticacin, menos esta!
    data: () => ({}),
    async fetch({ store }) {
        await store.dispatch('user/logout')
    },
    computed: {
        ...mapGetters('user', ['logout'])
    },
    watch: {
        logged: {
        immediate: false,
        handler(logged) {
            console.log(logged)
            if (!logged) 
            this.next()
        }
        }
    },
    methods: {
        next() {
            this.$router.push('/login')
        }
    }
}
</script>
