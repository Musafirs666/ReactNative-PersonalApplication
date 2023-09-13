// Import the functions you need from the SDKs you need
import { initializeApp, setLogLevel } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"
import {getStorage} from 'firebase/storage'
import { API_KEY } from '@env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
setLogLevel('silent')

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "webprofile-ad5de.firebaseapp.com",
  projectId: "webprofile-ad5de",
  storageBucket: "webprofile-ad5de.appspot.com",
  messagingSenderId: "855772013692",
  appId: "1:855772013692:web:4e595a5edd5bb859a595f9",
  measurementId: "G-9CN1QWJ61B"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DATABASE = getDatabase(FIREBASE_APP)
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP)
