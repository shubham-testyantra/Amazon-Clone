import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAzFZwNucIShRXTOJII4qP5iRYmvMUH_BQ",
  authDomain: "ty-reactclone.firebaseapp.com",
  databaseURL: "https://ty-reactclone-default-rtdb.firebaseio.com",
  projectId: "ty-reactclone",
  storageBucket: "ty-reactclone.appspot.com",
  messagingSenderId: "89190695073",
  appId: "1:89190695073:web:851a8c759a1a65abc270e0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
