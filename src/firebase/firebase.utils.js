// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKhSnzUaDs5UkUgOOmGYtJUJBac0YvgMU",
    authDomain: "avi-express-32488.firebaseapp.com",
    projectId: "avi-express-32488",
    storageBucket: "avi-express-32488.firebasestorage.app",
    messagingSenderId: "95734803443",
    appId: "1:95734803443:web:94f65cee5249695f168086",
    measurementId: "G-9D6L3ZQREZ"
  };

const firebaseApp = initializeApp(config);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider)
