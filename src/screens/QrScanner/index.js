import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Cover, H9, H4, Txt2, Button, TextInput} from '../../UI';
import droneX from '../../asset/DroneX.png';
import Cloud1 from '../../asset/clouds1.png';
import droneTxt from '../../asset/DroneTxt.png';
import {Styles} from './styles';

const QrScanner = () => {
  const [searching, setDisplay] = useState(false);
  const {navigate} = useNavigation();

  useEffect(() => {
    if (searching) {
      setTimeout(() => {
        navigate('Info');
      }, 500);
    }
  }, [searching]);

  return (
    <View style={Styles.container}>
      <Image
        source={droneTxt}
        style={{
          width: 120,
          resizeMode: 'contain',
          position: 'absolute',
          top: 20,
          left: 30,
        }}
      />
    </View>
  );
};

export default QrScanner;
