// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCCZX1RAkaqJsE_8XDkcgXFjmFnL8cyOSE",
  authDomain: "clone-bc171.firebaseapp.com",
  projectId: "clone-bc171",
  storageBucket: "clone-bc171.appspot.com",
  messagingSenderId: "191881514712",
  appId: "1:191881514712:web:b95ece8c561983573e51ad",
  measurementId: "G-XS3SMXZQGW"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth};