import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-bAzD01y0fTlP08EYGgx38R1EC7XDHTQ",
  authDomain: "twitter-clone-1155.firebaseapp.com",
  projectId: "twitter-clone-1155",
  storageBucket: "twitter-clone-1155.appspot.com",
  messagingSenderId: "1058863743297",
  appId: "1:1058863743297:web:390bd16bf4d11ae6a461c0",
  measurementId: "G-1YE0B9T6RF",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;
