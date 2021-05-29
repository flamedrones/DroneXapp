import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from '../../App';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {H4, Txt2, Button, TextInput} from '../../UI';
import Cloud1 from '../../asset/clouds1.png';
import droneTxt from '../../asset/DroneTxt.png';
import {Styles} from './styles';

const Home = () => {
  const {trackingData, setOrderId} = useContext(AppContext);
  const [trackId, setTrackingId] = useState('');
  const [searching, setDisplay] = useState(false);
  const {navigate} = useNavigation();

  useEffect(() => {
    if (searching && trackingData) {
      navigate('Info');
    }
  }, [navigate, trackingData, searching]);

  return (
    <View style={Styles.container}>
      <Image source={droneTxt} style={Styles.img} />
      {!searching ? (
        <>
          <View style={{width: '100%'}}>
            <Txt2
              style={{
                color: '#fff',
              }}>
              Tracking ID
            </Txt2>
          </View>
          <TextInput
            onChange={value => setTrackingId(value)}
            style={{width: '100%', marginTop: 10, marginBottom: 40}}
          />
          <Button
            onPress={() => {
              setDisplay('searching');
              setOrderId(trackId);
            }}>
            <Txt2
              style={{
                color: '#fff',
              }}>
              Find your order
            </Txt2>
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
