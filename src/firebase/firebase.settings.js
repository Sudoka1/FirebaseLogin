// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzdlXoS1U4kEuV-p5KEZE_dfoda9ikDlM",
  authDomain: "livecodingsudoka.firebaseapp.com",
  projectId: "livecodingsudoka",
  storageBucket: "livecodingsudoka.appspot.com",
  messagingSenderId: "918650247239",
  appId: "1:918650247239:web:c3b59b899013b6886cf962",
  measurementId: "G-H9G8K5KPNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);