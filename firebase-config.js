// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrfQLE0brzq39L3xz7vrGG3wnJN3H9dvU",
  authDomain: "inscripciones-web-c01bc.firebaseapp.com",
  databaseURL: "https://inscripciones-web-c01bc-default-rtdb.firebaseio.com",
  projectId: "inscripciones-web-c01bc",
  storageBucket: "inscripciones-web-c01bc.firebasestorage.app",
  messagingSenderId: "733432094108",
  appId: "1:733432094108:web:6d506f9ffba24f36ebbc59",
  measurementId: "G-M6FLK914VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
