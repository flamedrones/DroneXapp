import React from 'react';
import {View, Image, TextInput as NativeInput} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
// import nairaImg from '../../../assets/images/Naira.png';
import {Label} from '../../UI';
import {Styles} from './styles';

const TextInput = ({
  mode,
  label,
  externalLabel,
  withNaira,
  style = {},
  ...props
}) =>
  withNaira ? (
    <View style={{position: 'relative', ...style}}>
      {/* <Image source={nairaImg} style={Styles.nairaImg} /> */}
      <TextInput {...props} style={Styles.nairaTxtInput} />
    </View>
  ) : externalLabel ? (
    <View>
      <Label>{externalLabel}</Label>
      <NativeInput
        label={label}
        {...props}
        style={{...Styles.nativeTxtInput, ...style}}
      />
    </View>
  ) : (
    <NativeInput
      label={label}
      {...props}
      style={{...Styles.nativeTxtInput, ...style}}
    />
  );

export default TextInput;
