import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBKwF2elImbKSG_vzL1dJ7yR7zN11uaRHg",
  authDomain: "p-73-851df.firebaseapp.com",
  projectId: "p-73-851df",
  storageBucket: "p-73-851df.appspot.com",
  messagingSenderId: "1051022807414",
  appId: "1:1051022807414:web:0354b91d9b8c44b264ea57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.firestore();
