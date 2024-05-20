import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBf3CQOozUNedTus8I0SuLjWC_7YT-dZ_U",
    authDomain: "pra-fazer-app.firebaseapp.com",
    databaseURL: "https://pra-fazer-app-default-rtdb.firebaseio.com",
    projectId: "pra-fazer-app",
    storageBucket: "pra-fazer-app.appspot.com",
    messagingSenderId: "683990725370",
    appId: "1:683990725370:web:07fa036c7b2f9a0163cf43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);