// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL90O_SBWfizYnE0UC0u_FqINU_30nUB8",
  authDomain: "auth-test-c18c4.firebaseapp.com",
  projectId: "auth-test-c18c4",
  storageBucket: "auth-test-c18c4.appspot.com",
  messagingSenderId: "128308355601",
  appId: "1:128308355601:web:090ee3c1ba5bab875e07b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

const logout = () => {
  return signOut(auth);
};

export { auth, signInWithGoogle, logout, onAuthStateChanged };
