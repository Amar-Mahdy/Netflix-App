import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAi64SiCE6B5t3YYyTDNAGibML_FBQntEw",
  authDomain: "movie-app-463cf.firebaseapp.com",
  projectId: "movie-app-463cf",
  storageBucket: "movie-app-463cf.appspot.com",
  messagingSenderId: "517038606880",
  appId: "1:517038606880:web:70a2cec6e14249299c4a45",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { auth,provider,storage};
export default db;
