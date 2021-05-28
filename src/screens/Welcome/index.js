import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Cover, H9, Txt2, Button, TextInput} from '../../UI';
import droneX from '../../asset/DroneX.png';
import droneTxt from '../../asset/DroneTxt.png';
import {Styles} from './styles';

const Welcome = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('Home');
    }, 500);
  }, []);

  return (
    <View style={Styles.container}>
      <Image source={droneTxt} />
      <Image source={droneX} style={{width: 200, height: 200}} />
    </View>
  );
};

export default Welcome;
