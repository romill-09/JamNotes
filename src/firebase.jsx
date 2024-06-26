import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSh-UIbrTYEWNhi_HmO0n0rkXl8RppjjI",
  authDomain: "jam-notes-b9053.firebaseapp.com",
  projectId: "jam-notes-b9053",
  storageBucket: "jam-notes-b9053.appspot.com",
  messagingSenderId: "849753858113",
  appId: "1:849753858113:web:7c16e74da8b78590c366c0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  db,
  provider,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp
};
