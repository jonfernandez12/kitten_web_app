
<script>

export default {
    name:"Post",
    props:['id','img','likes'],
    data () {
     return {
       counter : 0,
        }
    },
    computed: {
       ...mapState('store', ['posts']),
       

     },
    methods: {
        ...mapActions('store', ['initRealtimeListeners','addPost','updatePost']),
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
            this.$store.dispatch('initRealtimeListeners')
    }
}
</script>

<template>
        <div id="post" class="post">
            <p>{{id}}</p>
            <img v-bind:src="img"/>
            <p>{{likes}}</p>  
            <button v-on:click="addPost('Form cannot be submitted yet.', $event)"> <!--ponia like-->
             Like
            </button>
            <td v-text="counter"></td>
        </div>

</template>





<style>
    .post{
        padding: 1rem;
        border: 1px solid whitesmoke;
        margin: 1rem 0;
    }

    .post:hover{
        background: #2d3435;
        border: 1px solid #6c5ce7;
        cursor: pointer;
    }

    a{
        color: whitesmoke;
        text-decoration :none;
    }
    a:hover {
        color:#6c5ce7 ;    
    }

</style>