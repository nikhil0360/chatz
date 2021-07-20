// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQbQiofr4KKpv-g5Ey8qYpe0PpnaH9UjE",
    authDomain: "chatz-1268c.firebaseapp.com",
    projectId: "chatz-1268c",
    storageBucket: "chatz-1268c.appspot.com",
    messagingSenderId: "644231568871",
    appId: "1:644231568871:web:194edcab168b1f76e4b142",
    measurementId: "G-1K5KYYHQSM"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;