// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt7U4qD_PiG4TTpttJqBddrFzVUs-f9wg",
    authDomain: "my-netflix-clone-a50d5.firebaseapp.com",
    projectId: "my-netflix-clone-a50d5",
    storageBucket: "my-netflix-clone-a50d5.appspot.com",
    messagingSenderId: "961463814155",
    appId: "1:961463814155:web:46ba99cd96a1dc2cfbdf0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


