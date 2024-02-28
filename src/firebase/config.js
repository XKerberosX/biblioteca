import  firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDc9oiDDgjmWTP4GgQcF-biD_6NWu1EHPk",
  authDomain: "biblioteca-4db4b.firebaseapp.com",
  projectId: "biblioteca-4db4b",
  storageBucket: "biblioteca-4db4b.appspot.com",
  messagingSenderId: "572538555109",
  appId: "1:572538555109:web:323ca9783f84bad462e20c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();

  export{projectFirestore};
