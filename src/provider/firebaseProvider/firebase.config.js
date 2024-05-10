
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDoKdiUjbGL-ljtn1OEV5zvj53FfBad1uM",
  authDomain: "hotel-booking-f7554.firebaseapp.com",
  projectId: "hotel-booking-f7554",
  storageBucket: "hotel-booking-f7554.appspot.com",
  messagingSenderId: "288359334356",
  appId: "1:288359334356:web:45cae46db3583005459641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;