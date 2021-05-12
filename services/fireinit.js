import firebase from 'firebase/app'
import {Config}  from '~/services/config'
// copia en /services/config.js el fichero .json con la configuración de firebase
// similar al ejemplo /services/config.js.example
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import  {firebaseConfig}  from './config'

if (!firebase.apps.length) {
  console.log("Holaaaaa")
  console.log(firebaseConfig)
  firebase.initializeApp(firebaseConfig)
  
} else {
  console.log("hola")
  firebase.app() // if already initialized, use that one
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()

export const db = firebase.firestore()
export const storage = firebase.storage()

function getCurrentUserPromise(auth) {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

export const getCurrentUser = async () => {
  if (auth.currentUser) return auth.currentUser
  const result = await getCurrentUserPromise(auth)
  return result
}

export default firebase
