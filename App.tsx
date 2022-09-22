import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation/AppNavigator';
import firebase from '@react-native-firebase/app';

const App: React.FC = () => {

  const initFirebase = ()=> {
    const RNfirebaseConfig = {
      apiKey: 'AIzaSyCMbJlmatpV010T3jFKjgCpwyWcm9aOu1s',
      authDomain: 'canteenapp-b8a4d.firebaseapp.com',
      projectId: 'canteenapp-b8a4d',
      storageBucket: 'note-app-rn.appspot.com',
      messagingSenderId: '.....',
      appId: '1:609046363316:android:2e4a4f1a71e7e00a766be1',
    };
    firebase.initializeApp(RNfirebaseConfig);

  }
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
