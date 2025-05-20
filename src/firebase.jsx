import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBg5OqXtuZrYV5qUQQ_xd7mLSae58epzsc",
  authDomain: "eduretrieve-4b630.firebaseapp.com",
  projectId: "eduretrieve-4b630",
  storageBucket: "eduretrieve-4b630.firebasestorage.app",
  messagingSenderId: "362023692609",
  appId: "1:362023692609:web:ede9c6367b435290d619c0",
  measurementId: "G-XH7ZYDSHVY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

