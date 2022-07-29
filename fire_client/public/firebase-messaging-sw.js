// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCLqQmyRC7VruJ5jnuYZz3LqqQo--Jbd6k",
  authDomain: "mail3-test-49543.firebaseapp.com",
  projectId: "mail3-test-49543",
  storageBucket: "mail3-test-49543.appspot.com",
  messagingSenderId: "205769995536",
  appId: "1:205769995536:web:6680612b846fe356a2a195"
}

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
