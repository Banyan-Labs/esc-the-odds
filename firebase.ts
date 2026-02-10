// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAK4Q9nPN3nKMuLYOrOLMe_SYCZjvX91bo",
    authDomain: "escape-the-odds.firebaseapp.com",
    projectId: "escape-the-odds",
    storageBucket: "escape-the-odds.firebasestorage.app",
    messagingSenderId: "510095706046",
    appId: "1:510095706046:web:9ed93fc331087000335bef",
    measurementId: "G-M30DCX43YG",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
