import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfDhwXlizSU6OKYlRIB-VK8AhmbYVTdRM",
  authDomain: "house-marketplace-application.firebaseapp.com",
  projectId: "house-marketplace-application",
  storageBucket: "house-marketplace-application.appspot.com",
  messagingSenderId: "153422282823",
  appId: "1:153422282823:web:af5f6e000c61d236f67162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();