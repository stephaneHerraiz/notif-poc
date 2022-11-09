// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyC_ZZUoaK4y0ItFDPEo0QroSubHUKcVOag",
  authDomain: "bi-poc-49f29.firebaseapp.com",
  projectId: "bi-poc-49f29",
  storageBucket: "bi-poc-49f29.appspot.com",
  messagingSenderId: "874655815853",
  appId: "1:874655815853:web:72c03ab49be85e09bc4e24",
  measurementId: "G-JRH3DPK160",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();