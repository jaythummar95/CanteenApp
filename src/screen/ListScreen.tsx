import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import {Route} from '../navigation/AppNavigator';
import auth from '@react-native-firebase/auth';

export const ListScreen: React.FC = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [count, setcount] = useState(0);
  const [canteenList, setCanteenList] = useState([]);
  console.log('lkclknl', canteenList);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Canteen')
      .onSnapshot(querySnapshot => {
        const data = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push({...documentSnapshot.data(), key: documentSnapshot.id});
        });
        setCanteenList(data);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace(Route.LoginScreen);
      });
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 10,
        }}>
        Canteen list
      </Text>
      <View
        style={{
          height: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={{color: 'black'}}>Sr.No</Text>
        <Text style={{color: 'black'}}>Snacks</Text>
        <Text style={{color: 'black'}}>Price</Text>
        <Text style={{color: 'black'}}>expenses</Text>
      </View>
      <FlatList
        data={canteenList}
        renderItem={({item, index}) => (
          <View
            style={{
              height: 30,
              flex: 1,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text>{item.no}</Text>
            <Text>{item.snacks}</Text>
            <Text>{item.price}</Text>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  setcount(count + 1);
                }}>
                <Text style={{marginRight: 5}}>Add</Text>
              </Pressable>

              <Text style={{marginRight: 5}}>{count}</Text>
              <Pressable
                onPress={() => {
                  setcount(count - 1);
                }}>
                <Text style={{marginRight: 5}}>Sub</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
      <Pressable
        style={styles.buttonStyleTwo}
        onPress={() => {
          navigation.navigate(Route.LoginScreen);
        }}>
        <Text style={{color: 'black', fontSize: 18, alignSelf: 'center'}}>
          Login
        </Text>
      </Pressable>

      <Pressable
        style={styles.buttonStyleTwo}
        onPress={() => {
          handleSignOut();
        }}>
        <Text style={{color: 'blue', fontSize: 18, alignSelf: 'center'}}>
          LogOut
        </Text>
      </Pressable>
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
