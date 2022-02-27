// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApcVkkn4XNzeS7RIVGjM5Hsy_u59mv_aU",
  authDomain: "todo-dapp.firebaseapp.com",
  projectId: "todo-dapp",
  storageBucket: "todo-dapp.appspot.com",
  messagingSenderId: "563834765919",
  appId: "1:563834765919:web:e1ab41c3c571325030d1ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

export {
  auth,
  googleAuthProvider
}