import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHt5MWnqFdUcRfQx3jpKe8ZQTgNWwPKDU",
  authDomain: "informatica-mv.firebaseapp.com",
  projectId: "informatica-mv",
  storageBucket: "informatica-mv.appspot.com",
  messagingSenderId: "606316361023",
  appId: "1:606316361023:web:39c2f9db3419fcbd16cf8a"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
