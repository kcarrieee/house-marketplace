import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC7qjkSRDUAoZLyqsIRwVtTpFcGMOvULgE",
  authDomain: "house-marketplace-ac5.firebaseapp.com",
  projectId: "house-marketplace-ac5",
  storageBucket: "house-marketplace-ac5.appspot.com",
  messagingSenderId: "758065058109",
  appId: "1:758065058109:web:a9e5e4604ed4c94d6a3554"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();