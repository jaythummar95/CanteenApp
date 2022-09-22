import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Route} from '../navigation/AppNavigator';

export const SplaceScreen: React.FC = ({navigation}) => {
  useEffect(() => {
    checkAndNavigate();
  }, []);

  const checkAndNavigate = async () => {
    setTimeout(async () => {
      navigation.navigate(Route.LoginScreen);
    }, 2000);
  };
  return (
    <View
      flex={1}
      backgroundColor={'white'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Text>SplaceScreen</Text>
    </View>
  );
};
