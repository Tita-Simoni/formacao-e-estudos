import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBw0EbhJtgazAKYE8bStzyCytIGgu-Aw3M",
  authDomain: "fir-auth-8cd3d.firebaseapp.com",
  projectId: "fir-auth-8cd3d",
  storageBucket: "fir-auth-8cd3d.appspot.com",
  messagingSenderId: "384522163313",
  appId: "1:384522163313:web:d1b876a462951e865eb7d0",
  measurementId: "G-FGDQFV7YD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);

