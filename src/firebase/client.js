
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKMq56svrAuI9SBuhzqS6jU5y9IBbrxtI",
  authDomain: "kickz-oliva.firebaseapp.com",
  projectId: "kickz-oliva",
  storageBucket: "kickz-oliva.appspot.com",
  messagingSenderId: "1014054473228",
  appId: "1:1014054473228:web:6932887939392ea67e6829",
  measurementId: "G-2N4ZYBVPZB"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
