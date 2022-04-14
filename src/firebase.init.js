// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaiNcu5VZJMiLEsTl2WwJ9L96oBGN8qBk",
    authDomain: "ema-john-react-app-61f0e.firebaseapp.com",
    projectId: "ema-john-react-app-61f0e",
    storageBucket: "ema-john-react-app-61f0e.appspot.com",
    messagingSenderId: "917584727362",
    appId: "1:917584727362:web:419d6afa8877091dac0cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;