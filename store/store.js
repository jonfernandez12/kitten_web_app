
import {db, firebase1} from '../services/fireinit'

import { mapGetters, mapState } from 'vuex'


export const state = () => ({
    posts: [],
    listening: false
  })

export const  mutations = {
    updatePosts(state, posts){
      state.posts = posts
    },
    setListening(state, listening) {
      state.listening = listening
    }
}


  export const actions = {
    
    initRealtimeListeners(context) {
      if (!context.state.listening) {
        context.commit('setListening', true)
      
      //console.log(db.collection('likes'))
        db.collection("likes").onSnapshot((querySnapshot) => {
  
         const datos = querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data()}) )
       
          context.commit('updatePosts',datos)         
        });
     }
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
      
      db.collection('likes').doc(post.id).update({"likes" : firebase1.firestore.FieldValue.increment(1)})
    
    
    }
  }

