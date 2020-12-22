import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD1XooeYE1ADSB2RIk-m6QnUa9agd373TY",
    authDomain: "e-commerce-db-5197b.firebaseapp.com",
    databaseURL: "https://e-commerce-db-5197b-default-rtdb.firebaseio.com",
    projectId: "e-commerce-db-5197b",
    storageBucket: "e-commerce-db-5197b.appspot.com",
    messagingSenderId: "821835679874",
    appId: "1:821835679874:web:e5ddf5ecf253e766b2cc9b",
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// All this you can get from the docs in the auth then sginIn with Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Store the user info
// we are using it in the app.js to store the user data and to update the state
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if the user not signed in it will return null
    // so here we say if !null which is true just return
    if (!userAuth) {
        return;
    }
    // now here if the user signed in :

    // we give here the path and where to place it
    const userRef = firestore.doc(`user/${userAuth.uid}`);

    // then here give it a snapshot to get the actual data from firestore
    const snapShot = await userRef.get();
    console.log(snapShot); //will find a propirty called exosts and it is true or false depends if the user exist in our firestore or not

    // here we check if the user exist or not if not we will userRef.set() so we create data for that user
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
};

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
