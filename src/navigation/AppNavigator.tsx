import React from 'react';
import {SplaceScreen} from '../screen/SplaceScreen';
import {ListScreen} from '../screen/ListScreen';
import {AuthProvider} from '../auth/AuthProvider';
import {LoginScreen} from '../screen/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export enum Route {
  SplaceScreen = 'SplashScreen',
  ListScreen = 'listScreen',
  AuthProvider = 'AuthProvider',
  LoginScreen = 'LoginScreen',
}
export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Route.SplaceScreen}>
      <Stack.Screen name={Route.SplaceScreen} component={SplaceScreen}  />
      <Stack.Screen name={Route.ListScreen} component={ListScreen} />
      <Stack.Screen name={Route.AuthProvider} component={AuthProvider} />
      <Stack.Screen name={Route.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};
