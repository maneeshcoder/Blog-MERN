import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:getEvn('VITE_FIREBASE_API'),
  authDomain: "blog-19685.firebaseapp.com",
  projectId: "blog-19685",
  storageBucket: "blog-19685.firebasestorage.app",
  messagingSenderId: "213299403007",
  appId: "1:213299403007:web:284b8d73616368e2bbd4ca",
  measurementId: "G-LBGTC2J98W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }