import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {Welcome, Home, Info, QrScanner} from './screens';

const {Navigator, Screen} = createStackNavigator();

export const AppContext = React.createContext('light');

const App = () => {
  const [orderId, setOrderId] = useState('order1');
  const [trackingData, setTrackingData] = useState('');
  console.log(trackingData, 'sdjskdjsdkj');

  useEffect(() => {
    if (orderId) {
      const subscriber = firestore()
        .collection('orders')
        .doc(orderId)
        .onSnapshot(documentSnapshot => {
          console.log('User data: ', documentSnapshot.data());
          setTrackingData(documentSnapshot.data());
        });

      return () => subscriber();
    }
  }, [orderId]);

  return (
    <AppContext.Provider value={{trackingData, setOrderId}}>
      <NavigationContainer>
        <Navigator
          initialRouteName={'Welcome'}
          headerMode={'none'}
          mode="modal">
          <Screen name={'Welcome'} component={Welcome} />
          <Screen name={'Home'} component={Home} />
          <Screen name={'Info'} component={Info} />
          <Screen name={'QrScreen'} component={QrScanner} />
          {/* 
        <Screen name={'Home'} component={HomeStack} />
        <Screen name={'Profile'} component={ProfileScreen} /> */}
        </Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
