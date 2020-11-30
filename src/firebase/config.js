import  firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCRB0C6uIFhhzxO20v-mGUuefTAEaametM",
  authDomain: "libreria3er.firebaseapp.com",
  databaseURL: "https://libreria3er.firebaseio.com",
  projectId: "libreria3er",
  storageBucket: "libreria3er.appspot.com",
  messagingSenderId: "1026720350916",
  appId: "1:1026720350916:web:44cd00745e56bec7c73f91"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();

  export{projectFirestore};