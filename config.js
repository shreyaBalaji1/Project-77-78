import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7qBO7ZLE0kbA7wc9sI4ENKP1xJkSGCy4",
    authDomain: "bartersystemapp-3624e.firebaseapp.com",
    projectId: "bartersystemapp-3624e",
    storageBucket: "bartersystemapp-3624e.appspot.com",
    messagingSenderId: "31018279713",
    appId: "1:31018279713:web:28c367ffbc3566462b5460"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();