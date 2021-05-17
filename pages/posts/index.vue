<template>
    <div>
        <h1>Posts</h1>
        <Post 
            v-for="post of posts"
            v-bind:key="post.id"
            :id="post.id"
            :img="post.img"
            :likes="post.likes"
            />
    </div>
</template>

<script>
import axios from 'axios'
import Post from '../../components/Post'
import postData from "../../gatitos.json";

export default {
    components:{
        Post
    },
    data(){
        return{
            posts:postData
        }
    }
}
</script>