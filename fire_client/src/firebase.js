import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyCLqQmyRC7VruJ5jnuYZz3LqqQo--Jbd6k",
  authDomain: "mail3-test-49543.firebaseapp.com",
  projectId: "mail3-test-49543",
  storageBucket: "mail3-test-49543.appspot.com",
  messagingSenderId: "205769995536",
  appId: "1:205769995536:web:6680612b846fe356a2a195"
}

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BAS7b9VWyRUs8MHMEtDoNE-5r0h5eaU-ppBmGLLVwp8zwXgoW-bywhIe-GOLL7q-2FeQBRcGMjXDlPvlSvRTwY4'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = (callback) => {
  return onMessage(messaging, (payload) => {
    callback(payload);
  })
};