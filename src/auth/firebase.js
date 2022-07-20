// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (
  email,
  password,
  firstname,
  lastName,
  navigate
) => {
  //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      firstname,
      lastName
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (
  email,
  password,
  navigate,
  firstname,
  lastName
) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
      firstname,
      lastName
    );
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};
