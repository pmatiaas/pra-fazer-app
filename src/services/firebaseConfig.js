import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: env.REACT_API_KEY,
  authDomain: "pra-fazer-app.firebaseapp.com",
  projectId: "pra-fazer-app",
  storageBucket: "pra-fazer-app.appspot.com",
  messagingSenderId: "683990725370",
  appId: "1:683990725370:web:07fa036c7b2f9a0163cf43"
};

const app = initializeApp(firebaseConfig);