import Styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {colors} from '../../theme';

export default Styled(Button)`
    background-color: ${({primary, secondary, tertiary, text}) =>
      primary ? colors.primary : secondary ? 'white' : 'transparent'};
      border: 1px solid ${({primary, secondary, tertiary, text}) =>
        primary
          ? colors.primary
          : secondary
          ? 'white'
          : tertiary
          ? '#fff'
          : 'transparent'};
    justify-content: center;
    width: ${props => (props.iconBtn ? '42px' : '100%')};
`;

export const Styles = StyleSheet.create({
  whiteTxt: {
    color: '#fff',
  },
  tertiaryTxt: {
    color: colors.primary,
  },
  txt: {
    fontFamily: 'yugothic-medium',
    fontSize: 15,
    color: colors.primary,
  },
});
