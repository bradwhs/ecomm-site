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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        // get the name, email from the user object from authentication (not firestore)
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;