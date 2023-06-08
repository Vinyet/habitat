import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD1YjnmKz7yxYlj8Rst5Hn22TbuhQLbwO0",
    authDomain: "habitat-4675e.firebaseapp.com",
    projectId: "habitat-4675e",
    storageBucket: "habitat-4675e.appspot.com",
    messagingSenderId: "308511376008",
    appId: "1:308511376008:web:d1b7135c1a5352d3dc553d",
    measurementId: "G-BXEBREY2H2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { auth, db };
export default app;