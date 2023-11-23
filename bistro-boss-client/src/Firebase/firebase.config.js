// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmrP02YrqB26yirQm7lInXxl37Z93w9_4",
  authDomain: "bistro-boss-c7670.firebaseapp.com",
  projectId: "bistro-boss-c7670",
  storageBucket: "bistro-boss-c7670.appspot.com",
  messagingSenderId: "941275969098",
  appId: "1:941275969098:web:f40f6b7c4945c692bb18b3",
  measurementId: "G-VG7Y74HV16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;