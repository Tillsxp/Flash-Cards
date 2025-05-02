import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjLYLu4UlUlZYPeEj8fbKrs0EqnK5QvNE",
  authDomain: "reactflash-c49e6.firebaseapp.com",
  databaseURL: "https://reactflash-c49e6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactflash-c49e6",
  storageBucket: "reactflash-c49e6.appspot.com",
  messagingSenderId: "33217453328",
  appId: "1:33217453328:web:8336e5400defce5189d995"
};

const app = initializeApp(firebaseConfig);
export default app;