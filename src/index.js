import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'firebase/firestore';
// import firebase from "firebase";

// firebase.initializeApp({
// 	apiKey: "AIzaSyAUw72_76LD0_-JTM4Zt5602p8_jraBGgg",
// 	authDomain: "note-c5ef1.firebaseapp.com",
// 	databaseURL: "https://note-c5ef1-default-rtdb.firebaseio.com",
// 	projectId: "note-c5ef1",
// 	storageBucket: "note-c5ef1.appspot.com",
// 	messagingSenderId: "600165577983",
// 	appId: "1:600165577983:web:e1de8301790d0e605088ca",
// 	measurementId: "G-8P3CQ1FWQH"
//   })
// const analytics = getAnalytics(app);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
