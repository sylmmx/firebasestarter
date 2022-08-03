// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlLG-3zVveaRwzlM9yIFkndLkQjtlCKhg",
  authDomain: "gettingstartedwithfireba-f0ede.firebaseapp.com",
  projectId: "gettingstartedwithfireba-f0ede",
  storageBucket: "gettingstartedwithfireba-f0ede.appspot.com",
  messagingSenderId: "404614758306",
  appId: "1:404614758306:web:ba01c53dcf7607ffadbcfb",
  measurementId: "G-FYWQG6ZX2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);