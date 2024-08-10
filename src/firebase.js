import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0ISPYtCJA32G82E4bGrRPqDpqgpF8BH8",
  authDomain: "autherization-eaca5.firebaseapp.com",
  projectId: "autherization-eaca5",
  storageBucket: "autherization-eaca5.appspot.com",
  messagingSenderId: "277274352713",
  appId: "1:277274352713:web:f429200f3cff038abc3398"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
