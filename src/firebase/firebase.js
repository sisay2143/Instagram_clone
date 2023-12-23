// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD_OQ7RahcpFij58OZRg65YR-68WTRoYUk",
  authDomain: "instagram-clone-d587a.firebaseapp.com",
  projectId: "instagram-clone-d587a",
  storageBucket: "instagram-clone-d587a.appspot.com",
  messagingSenderId: "487649768156",
  appId: "1:487649768156:web:251443cedce5f1924a7a19",
  measurementId: "G-BZ5GM7X1DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app);


export { app, auth, firestore, storage };

// const analytics = getAnalytics(app);