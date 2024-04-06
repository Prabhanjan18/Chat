import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDOZrkZaj2e2FHB2sgkZcqy36wUmuoWjyY",
  authDomain: "chat-9b582.firebaseapp.com",
  projectId: "chat-9b582",
  storageBucket: "chat-9b582.appspot.com",
  messagingSenderId: "549795457245",
  appId: "1:549795457245:web:7951d1015c1425d1c41334",
  measurementId: "G-871N97JWD6",
  databaseURL: "https://chat-9b582-default-rtdb.firebaseio.com",
};
const firebaseApp = firebase.initializeApp(config);
export const auth = firebaseApp.auth();
export const messageRef = firebaseApp.database().ref('messages');
export const roomRef = firebaseApp.database().ref('rooms');
export default firebaseApp;
