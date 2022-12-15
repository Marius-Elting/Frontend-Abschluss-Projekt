// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDIs437w9tOoRyJaSDz9xW3ek4mQ6aKWow",
    authDomain: "moviemania-f6691.firebaseapp.com",
    projectId: "moviemania-f6691",
    storageBucket: "moviemania-f6691.appspot.com",
    messagingSenderId: "794548503740",
    appId: "1:794548503740:web:67a341fbb5e1ff2ee27cb9"
};

initializeApp(firebaseConfig);

// export default firebase;
export const db = getFirestore();