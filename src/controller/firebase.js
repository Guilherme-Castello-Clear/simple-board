// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAO4oGJ2OIlJkXsftFqtAdLJxgNpYhNsyo",

  authDomain: "simple-board-75d8d.firebaseapp.com",

  databaseURL: "https://simple-board-75d8d-default-rtdb.firebaseio.com",

  projectId: "simple-board-75d8d",

  storageBucket: "simple-board-75d8d.appspot.com",

  messagingSenderId: "429961479063",

  appId: "1:429961479063:web:474ac760c1dca2f62dbad2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
if (app){
  console.log("Firebase burning!")
}


export default app