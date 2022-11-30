import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUTptKJSUjeUvaoZFvciinOyD7xm2dF4o",
  authDomain: "disney-clone-15ab8.firebaseapp.com",
  projectId: "disney-clone-15ab8",
  storageBucket: "disney-clone-15ab8.appspot.com",
  messagingSenderId: "1011684487291",
  appId: "1:1011684487291:web:6af676e98b73024f04b2de",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
