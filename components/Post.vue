
<script>
export default {
    name:"Post",
    props:['id','img','likes'],
    data () {
        return {
        counter : 0,
            }
        },
        methods: {
            like: function (message, event) {

                this.counter = this.counter+1
            }
        }
}
</script>

<template>
        <div id="post" class="post">
            <p>{{id}}</p>
            <v-img :src="img"/>
            <p>{{likes}}</p>  
            <button v-on:click="like('Form cannot be submitted yet.', $event)">
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