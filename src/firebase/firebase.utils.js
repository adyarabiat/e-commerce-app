import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD1XooeYE1ADSB2RIk-m6QnUa9agd373TY",
    authDomain: "e-commerce-db-5197b.firebaseapp.com",
    projectId: "e-commerce-db-5197b",
    storageBucket: "e-commerce-db-5197b.appspot.com",
    messagingSenderId: "821835679874",
    appId: "1:821835679874:web:e5ddf5ecf253e766b2cc9b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
