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

// How to use

// So first and after we wrote the above code how we can use it

// 1. we go to the sign in component and we import signInWithGoogle and we put it in the button as onClick now the use can sign in with google now how we want to let the app know if the user did that or not

// 2. to know that we go to the app.js and we import the auth we create it here there .. and we set the state there as currentUser to know who is the user there and we doing that by:

// componentDidMount() {
//     auth.onAuthStateChanged((user) => {
//         this.setState({ currentUser: user });
//         console.log(user);
//     });
// }

// so this one we call it an open messaging system between our app and firebase and when ever changing occur on firebase from any source related to my app : Firebase sends out that a message that says that the auth status change the user has updated whether they've signed in through some service such as our Google sign or our email and password sign up they will give us this user and it will call it.

// so becouse it is open subscription we do not want always to be open so we use
//  unsubscribeFromAuth method and we call it when unMount
