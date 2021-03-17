import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyAincmEJiURJBg7lNTUP7NcBvNTWnE730M",
  authDomain: "my-second-project-ef30c.firebaseapp.com",
  databaseURL: "https://my-second-project-ef30c.firebaseapp.com",
  projectId: "my-second-project-ef30c",
  storageBucket: "my-second-project-ef30c.appspot.com",
  messagingSenderId: "747388649058",
  appId: "1:747388649058:web:4dd875b7514d1aaf185b3b",
};

firebase.initializeApp(config);

export default firebase.firestore();