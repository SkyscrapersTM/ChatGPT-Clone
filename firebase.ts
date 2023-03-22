import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ59L_R_LZz8qReLlKjIhUHFWrQt0eibo",
  authDomain: "chatgpt-clone-6f131.firebaseapp.com",
  projectId: "chatgpt-clone-6f131",
  storageBucket: "chatgpt-clone-6f131.appspot.com",
  messagingSenderId: "619977034244",
  appId: "1:619977034244:web:d182d8ae3418e2b5274351",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
