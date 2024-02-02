
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2qHNX2TGsPfnnkn35w1HCYuWNmDVRN9U",
  authDomain: "hungerhero-1940c.firebaseapp.com",
  projectId: "hungerhero-1940c",
  storageBucket: "hungerhero-1940c.appspot.com",
  messagingSenderId: "159017617561",
  appId: "1:159017617561:web:c666d55a6dd2ce4312d008",
  measurementId: "G-5VMC3WS7B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);