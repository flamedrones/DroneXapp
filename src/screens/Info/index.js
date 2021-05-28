import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Cover, H9, H8M, H4, Txt2, Button, TextInput} from '../../UI';
import droneX from '../../asset/DroneX.png';
import Cloud1 from '../../asset/clouds1.png';
import droneTxt from '../../asset/DroneTxt.png';
import {Styles} from './styles';

const Info = () => {
  const [searching, setDisplay] = useState(false);
  const {navigate} = useNavigation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('Info');
  //   }, 500);
  // }, []);

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
      <H4 style={{color: '#A9AAFF'}}>Time estimation: 2 mins</H4>
      <View
        style={{
          backgroundColor: '#A9AAFF',
          width: '100%',
          padding: 10,
          borderRadius: 10,
          marginTop: 5,
        }}>
        <H8M style={Styles.txt}>-Details order-</H8M>
        <Txt2 style={Styles.txt}>Order: Piza Loto</Txt2>
        <Txt2 style={Styles.txt}>Weight package: 1kg</Txt2>
        <Txt2 style={Styles.txt}>Dimensions: 200 * 350mm</Txt2>
        <Txt2 style={Styles.txt}>Delivery location: Frankfurt Platza</Txt2>
      </View>
      <View></View>
    </View>
  );
};

export default Info;
