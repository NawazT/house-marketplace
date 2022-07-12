import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3s8F2cxJfdFLzgHUbLqI0ozBsVoBwpWI",
  authDomain: "house-marketplace-app-6743f.firebaseapp.com",
  projectId: "house-marketplace-app-6743f",
  storageBucket: "house-marketplace-app-6743f.appspot.com",
  messagingSenderId: "323505292956",
  appId: "1:323505292956:web:3a2aec3750c96ec94ccf59"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()