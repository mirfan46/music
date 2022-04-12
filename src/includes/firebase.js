import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC5N2hR7wnlZUTJIQdLrh8FQgq2aTInVVE',
  authDomain: 'music-c6dd5.firebaseapp.com',
  projectId: 'music-c6dd5',
  storageBucket: 'music-c6dd5.appspot.com',
  appId: '1:1036868181946:web:7e76e4f13515d999bd4783',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection('users');
const songCollection = db.collection('songs');

export {
  auth, db, userCollection, storage, songCollection,
};
