
import db from '../firebase'
import { mapGetters, mapState } from 'vuex'


export const state = () => ({
    posts: [],
  }),

  export const  mutations = {
    addPost(state, posts) {
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
      db.collection('likes').onSnapshot(snapshot => {
          snapshot.docChanges.forEach(change => {
            if (change.type === 'added') {
                context.commit('addPost', {
                  id: change.doc.id,
                  title: change.doc.data().title,
                  completed: false,
                })

            }
            if (change.type === 'modified') {
              context.commit('updatePost', {
                id: change.doc.id,
                title: change.doc.data().title,
                completed: change.doc.data().completed,
              })
            }
          })
        })
    },
    addPost(context, post) {
      db.collection('likes').add({
        likes: post.likes,
      })
    },
    updatePost(context, post) {
      db.collection('likes').doc(post.id).set({
        id: post.id,
        likes: post.likes,
        // timestamp: post.timestamp,
      })
    },
  }
