// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV8SjiFbVALP4aVvdIc8HRTyU4Fmrd9W8",
  authDomain: "e-intern-211b3.firebaseapp.com",
  projectId: "e-intern-211b3",
  storageBucket: "e-intern-211b3.firebasestorage.app",
  messagingSenderId: "616514072926",
  appId: "1:616514072926:web:660c9ccadbcf300f62dfcf",
  measurementId: "G-VVTH6Z321V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
