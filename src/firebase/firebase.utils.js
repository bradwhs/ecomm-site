import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpXnmqyOxFLsLy7LRtoc7bPbob0dfG56Q",
    authDomain: "crwn-db-2d9e0.firebaseapp.com",
    projectId: "crwn-db-2d9e0",
    storageBucket: "crwn-db-2d9e0.appspot.com",
    messagingSenderId: "772526072356",
    appId: "1:772526072356:web:e1b556f0d81001566f2eb1",
    measurementId: "G-VHFF5K2H4M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;