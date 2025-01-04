// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX37BsosDwzQOv26JmRylE5bjVKfeqLJ4",
  authDomain: "assignment-10-5f7fc.firebaseapp.com",
  projectId: "assignment-10-5f7fc",
  storageBucket: "assignment-10-5f7fc.firebasestorage.app",
  messagingSenderId: "196110045168",
  appId: "1:196110045168:web:a7bbc1b4a05ff7b869d735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);