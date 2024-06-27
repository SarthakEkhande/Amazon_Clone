// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi50Amp-JL1EuewP11UW4Qjy142cWxJl8",
  authDomain: "clone-99162.firebaseapp.com",
  projectId: "clone-99162",
  storageBucket: "clone-99162.appspot.com",
  messagingSenderId: "1048040675809",
  appId: "1:1048040675809:web:a22ebb0e9c8660035e5aa0",
  measurementId: "G-L35ZZLV80W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
