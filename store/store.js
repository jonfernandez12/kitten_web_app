
import {db} from '../services/fireinit'

import { mapGetters, mapState } from 'vuex'


export const state = () => ({
    posts: [],
  })

export const  mutations = {
    addPost(state, post) {
      state.posts.push({
        id: post.id,
        likes: post.likes,
      })
    },
    updatePost(state, post) {
        const index = state.posts.findIndex(item => item.id == post.id)
        state.posts.splice(index, 1, {
        'id': post.id,
        'likes': post.likes,
        })
    }
}


  export const actions = {
    initRealtimeListeners(context) {
      //console.log(db.collection('likes'))
      db.collection("likes").onSnapshot().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().likes}`);
        });
    });
  },
      //.onSnapshot((querySnapshot) => {
      //  querySnapshot.docChanges().forEach(change => {
      //    context.commit('updatePost', {
      //      likes: change.doc.likes
              //title: change.doc.data().title,
              //completed: change.doc.data().completed,
      //      })         
      //     })
      //  })
    //addPost(context, post) {
    // db.collection('likes').add({
    //    likes: post.likes,
    //  })
    //},
    updatePost(context, post) {
      db.collection('likes').doc(post.id).set({
        likes: post.likes
        // timestamp: post.timestamp,
      })
    },
  }
