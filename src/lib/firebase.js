import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAvF5aLaRF1FACobIj9_CgOFenbI8yMrI",
  authDomain: "itss-react.firebaseapp.com",
  projectId: "itss-react",
  storageBucket: "itss-react.appspot.com",
  messagingSenderId: "962747998663",
  appId: "1:962747998663:web:cf55c4fa9d45f1a68139e2",
  measurementId: "G-HN5MHJXJR2"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);