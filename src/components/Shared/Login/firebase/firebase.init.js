import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthencation = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthencation;