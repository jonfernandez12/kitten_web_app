<template>
    <div>
        <h1>Posts</h1>
        <post 
            v-for="post of posts"
            v-bind:key="post.id"
            :id="post.id"
            :img="post.img"
            :likes="post.likes">
        </post>
    </div>
</template>

<script>


import { mapGetters, mapState, mapActions } from 'vuex'
export default {

    data () {
     return {
       counter : 0,
        }
    },
    computed: {
       ...mapState('store', ['posts']),
       

     },
    methods: {
        ...mapActions('store', ['initRealtimeListeners','updatePost']),
        /*like: async function (message, event) {
            
            this.counter = this.counter+1
        },*/
        /*addPost(event) {
            console.log(store)
            this.counter = this.counter+1
            this.$store.dispatch('addPost', {
                id: this.id,
                likes: this.counter,
            })
            }
        */
        
    },
    created() {
        this.initRealtimeListeners()
    }
}

</script>