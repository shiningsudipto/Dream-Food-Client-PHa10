// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLjZi8BBKkYcFt6ViS05AEvpBhHVxhKQs",
    authDomain: "dream-food.firebaseapp.com",
    projectId: "dream-food",
    storageBucket: "dream-food.appspot.com",
    messagingSenderId: "378237143554",
    appId: "1:378237143554:web:164d30f2f45a9b8f47f51b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;