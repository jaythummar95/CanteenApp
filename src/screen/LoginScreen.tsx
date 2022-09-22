import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Route} from '../navigation/AppNavigator';
import auth from '@react-native-firebase/auth';

export const LoginScreen: React.FC = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate(Route.ListScreen);
      }
    });
    return subscribe;
  }, []);

  const handleLogin = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(useCredentials => {
        const user = useCredentials.user;
        console.log('Register in with', user.email);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(useCredentials => {
        const user = useCredentials.user;
        console.log('Logged in with', user.email);
      })
      .catch(error => alert(error.message()));
  };

  return (
    <View style={styles.containerCenter}>
      <View>
        <TextInput
          placeholder={'Email'}
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder={'Password'}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          style={styles.textInputStyle}
        />
      </View>
      <View>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            handleSignIn();
          }}>
          <Text style={{color: 'white', fontSize: 18, alignSelf: 'center'}}>
            Login
          </Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyleTwo}
          onPress={() => {
            handleLogin();
          }}>
          <Text style={{color: 'blue', fontSize: 18, alignSelf: 'center'}}>
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    width: 100,
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  containerCenter: {
    margin: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: 'gray',
  },
  buttonStyleTwo: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    width: 100,
    margin: 10,
    borderColor: 'blue',
  },
});
