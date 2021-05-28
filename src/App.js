import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Welcome, Home, Info} from './screens';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={'Welcome'} headerMode={'none'} mode="modal">
        <Screen name={'Welcome'} component={Welcome} />
        <Screen name={'Home'} component={Home} />
        <Screen name={'Info'} component={Info} />
        {/* <Screen name={'Splash'} component={SplashScreen} />
        <Screen name={'Home'} component={HomeStack} />
        <Screen name={'Profile'} component={ProfileScreen} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
