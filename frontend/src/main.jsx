import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*
const firebaseConfig = {
  apiKey: "AIzaSyCilFV-8w4756da8CO-zntKPPXR-EGZS3E",
  authDomain: "srp-project-eef44.firebaseapp.com",
  projectId: "srp-project-eef44",
  storageBucket: "srp-project-eef44.firebasestorage.app",
  messagingSenderId: "822562962715",
  appId: "1:822562962715:web:ec0da1ca93981a7cade7be",
  measurementId: "G-M99XPMHSX6"
};
*/