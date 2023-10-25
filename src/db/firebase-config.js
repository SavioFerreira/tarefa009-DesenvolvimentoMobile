import firebase  from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFaDOXm1pEY7VRDAEdQzO27vXDAzktJ-I",
  authDomain: "tarefa009-6578f.firebaseapp.com",
  projectId: "tarefa009-6578f",
  storageBucket: "tarefa009-6578f.appspot.com",
  messagingSenderId: "175049240703",
  appId: "1:175049240703:web:7ab7460919eebe765b0f4a",
  measurementId: "G-03PF1NP452"
};

if(firebase.app.length == 0){
    Firebase  = firebase(firebaseConfig);   
}

export default Firebase;