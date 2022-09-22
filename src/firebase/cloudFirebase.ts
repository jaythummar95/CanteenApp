import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const RNfirebaseConfig = {
  apiKey: 'AIzaSyCMbJlmatpV010T3jFKjgCpwyWcm9aOu1s',
  authDomain: 'canteenapp-b8a4d.firebaseapp.com',
  projectId: 'canteenapp-b8a4d',
  storageBucket: 'note-app-rn.appspot.com',
  messagingSenderId: '.....',
  appId: '1:609046363316:android:2e4a4f1a71e7e00a766be1',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(RNfirebaseConfig);
} else {
  app = firebase.app();
  console.log('app', app);
}

// const db = firebase.firestore();
// const auth = firebase.auth();
