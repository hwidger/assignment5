import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyD3EqDiVTIn6Fqdl_WA_XxCbZJNc_OuvdI",
  authDomain: "maverick-a28c2.firebaseapp.com",
  databaseURL: "https://maverick-a28c2-default-rtdb.firebaseio.com",
  projectId: "maverick-a28c2",
  storageBucket: "maverick-a28c2.appspot.com",
  messagingSenderId: "437757010537",
  appId: "1:437757010537:web:3c0963e84ab83aa88cb8f8"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
