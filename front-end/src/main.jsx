import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqFWTsY-sybf6jKhIIHIEHGwYw7qaQ4k0",
  authDomain: "full-stack-react-e3b7f.firebaseapp.com",
  projectId: "full-stack-react-e3b7f",
  storageBucket: "full-stack-react-e3b7f.firebasestorage.app",
  messagingSenderId: "905672096229",
  appId: "1:905672096229:web:9698f09102552daf91970c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
