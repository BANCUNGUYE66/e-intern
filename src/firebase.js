import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV8SjiFbVALP4aVvdIc8HRTyU4Fmrd9W8",
  authDomain: "e-intern-211b3.firebaseapp.com",
  projectId: "e-intern-211b3",
  storageBucket: "e-intern-211b3.appspot.com",
  messagingSenderId: "616514072926",
  appId: "1:616514072926:web:660c9ccadbcf300f62dfcf",
  measurementId: "G-VVTH6Z321V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Connect to emulators in development
if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
}

export default app; 