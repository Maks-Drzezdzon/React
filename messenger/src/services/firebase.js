import firebase from "firebase";

const config = {
  apiKey: "key here",
  authDomain: "key here",
  databaseURL: "key here"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
