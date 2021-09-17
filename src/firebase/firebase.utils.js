import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCv0-v5I6wMUZe1vJD5ic9FLTzJHODNf4M',
  authDomain: 'crown-db-310a3.firebaseapp.com',
  projectId: 'crown-db-310a3',
  storageBucket: 'crown-db-310a3.appspot.com',
  messagingSenderId: '782566532126',
  appId: '1:782566532126:web:4c7af351f90e55262f3a0f',
  measurementId: 'G-82Z32HDMHZ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
