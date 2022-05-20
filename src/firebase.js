import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBtsz3e-PsuClD6Ui3ilqnOeDyipDmH2KU",
  authDomain: "lab-notes-c5136.firebaseapp.com",
  projectId: "lab-notes-c5136",
  storageBucket: "lab-notes-c5136.appspot.com",
  messagingSenderId: "262672175055",
  appId: "1:262672175055:web:642fafa83876b05a18ccba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}