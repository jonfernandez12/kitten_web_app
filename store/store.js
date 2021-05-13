import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
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
  },
  actions: {
    initRealtimeListeners(context) {
      db.collection('posts').onSnapshot(snapshot => {
          snapshot.docChanges.forEach(change => {
            if (change.type === 'added') {
              const source = change.doc.metadata.hasPendingWrites ? 'Local' : 'Server'

              if (source === 'Server') {
                context.commit('addPost', {
                  id: change.doc.id,
                  title: change.doc.data().title,
                  completed: false,
                })
              }
            }
            if (change.type === 'modified') {
              context.commit('updatePost', {
                id: change.doc.id,
                title: change.doc.data().title,
                completed: change.doc.data().completed,
              })
            }
            if (change.type === 'removed') {
              context.commit('deletePost', change.doc.id)
            }
          })
        })
    },
    retrievePosts(context) {
      context.commit('updateLoading', true)
      db.collection('posts').get()
      .then(querySnapshot => {
        let tempPosts = []
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            title: doc.data().title,
            completed: doc.data().completed,
            timestamp: doc.data().timestamp,
          }
          tempposts.push(data)
        })

        context.commit('updateLoading', false)
        const tempPostsSorted = tempPosts.sort((a, b) => {
          return a.timestamp.seconds - b.timestamp.seconds
        })

        context.commit('retrievePosts', tempPostsSorted)
      })
    },
    addPost(context, post) {
      db.collection('posts').add({
        likes: post.likes,
      })
      .then(docRef => {
        context.commit('addPost', {
          id: docRef.id,
          likes: post.likes,
        })
      })

    },
    updatePost(context, post) {
      db.collection('posts').doc(post.id).set({
        id: post.id,
        likes: post.likes,
        // timestamp: post.timestamp,
      }, { merge: true })
      .then(() => {
        context.commit('updatePost', post)
      })
    },
  }
})