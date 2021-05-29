import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from '../../App';
import {View, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {useNavigation} from '@react-navigation/native';
import {Snackbar} from 'react-native-paper';
import {H8M, H4, Txt2} from '../../UI';
import droneTxt from '../../asset/DroneTxt.png';
import {Styles} from './styles';

MapboxGL.setAccessToken(
  'sk.eyJ1IjoicmFyZXNwb3BhIiwiYSI6ImNrcDlqeHJ5ZzBrdmcybm54cmRicnNnam8ifQ.nrmXpGcWGMOQONr09KNk7A',
);

const Info = () => {
  const {
    trackingData: {delivery_pos, pos, dimension, delivery_time},
  } = useContext(AppContext);
  const [searching, setDisplay] = useState(false);
  const {navigate} = useNavigation();

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <View style={Styles.container}>
      <Snackbar
        visible={true}
        onDismiss={console.log}
        action={{
          label: 'Checkout',
          onPress: () => {
            alert('sdjksdskdj');
            navigate('QrScreen');
          },
        }}>
        Product has arrived
      </Snackbar>
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
        <Txt2 style={Styles.txt}>
          Dimensions: {dimension.width}mm * {dimension.height}mm
        </Txt2>
        <Txt2 style={Styles.txt}>Delivery time: {delivery_time._seconds}</Txt2>
        <Txt2 style={Styles.txt}>Delivery location: Frankfurt Platza</Txt2>
      </View>

      <View
        style={{
          flex: 1,
          borderRadius: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: 15,
        }}>
        <MapboxGL.MapView style={Styles.map}>
          <MapboxGL.PointAnnotation
            id="delivery location"
            coordinate={[delivery_pos._latitude, delivery_pos._longitude]}
          />
          <MapboxGL.PointAnnotation
            id="drone location"
            coordinate={[pos._latitude, pos._longitude]}
          />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default Info;
