// Follow instructions from Firebase Setup

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRsuUeWf281UVrj1OtEnFefpLKzyY_QKo",
    authDomain: "kiosk-titan.firebaseapp.com",
    projectId: "kiosk-titan",
    storageBucket: "kiosk-titan.appspot.com",
    messagingSenderId: "438116867488",
    appId: "1:438116867488:web:f14bccd344a0ca18d218c5",
    measurementId: "G-R9RY2YY0CW"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp



export {projectFirestore, projectAuth, projectStorage, timestamp}
