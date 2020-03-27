import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC-Aidf5QtwfYD92OWIQzTjMhLCAVczTl0",
  authDomain: "crown-8cd78.firebaseapp.com",
  databaseURL: "https://crown-8cd78.firebaseio.com",
  projectId: "crown-8cd78",
  storageBucket: "crown-8cd78.appspot.com",
  messagingSenderId: "655877378702",
  appId: "1:655877378702:web:e84f41ddfddb9d18676fdf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
