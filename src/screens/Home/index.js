import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Cover, H9, H4, Txt2, Button, TextInput} from '../../UI';
import droneX from '../../asset/DroneX.png';
import Cloud1 from '../../asset/clouds1.png';
import droneTxt from '../../asset/DroneTxt.png';
import {Styles} from './styles';

const Home = () => {
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
      {!searching ? (
        <>
          <View style={{width: '100%'}}>
            <Txt2>Tracking ID</Txt2>
          </View>
          <TextInput style={{width: '100%', marginTop: 10, marginBottom: 40}} />
          <Button secondary onPress={() => setDisplay('searching')}>
            <Txt2>Find your order</Txt2>
          </Button>
        </>
      ) : (
        <View>
          <H4
            style={{
              textAlign: 'center',
              position: 'absolute',
              top: '40%',
              left: '28%',
              color: '#fff',
            }}>
            Searching for {'\n'} order...
          </H4>
          <Image source={Cloud1} />
        </View>
      )}
    </View>
  );
};

export default Home;
