import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXkd3qMIAIrftMzlk-M0A2k42QIcSTIGE",
  authDomain: "tienda-maluco.firebaseapp.com",
  projectId: "tienda-maluco",
  storageBucket: "tienda-maluco.appspot.com",
  messagingSenderId: "344914441797",
  appId: "1:344914441797:web:2f495d76b2fd38d369952c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);