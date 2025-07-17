// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAm2XMGY1E2nAmV6VcQtVT9ghNfnCtSHu4",
    authDomain: "e-commerce-web-e5a1e.firebaseapp.com",
    projectId: "e-commerce-web-e5a1e",
    storageBucket: "e-commerce-web-e5a1e.firebasestorage.app",
    messagingSenderId: "628470406994",
    appId: "1:628470406994:web:f79ab3fcd92bd2ef2ee48b",
    measurementId: "G-EM2CMS4JKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { analytics, auth, firestore, storage }; 