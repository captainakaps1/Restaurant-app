import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC5PAAxYSUJ95vylvfyG1ZWEIY2qpH1_AQ",
    authDomain: "restaurant-app-f1057.firebaseapp.com",
    databaseURL: "https://restaurant-app-f1057-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-f1057",
    storageBucket: "restaurant-app-f1057.appspot.com",
    messagingSenderId: "633875291265",
    appId: "1:633875291265:web:99a7529a7c3d3948744180",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, firestore, storage, firebaseAuth, provider };