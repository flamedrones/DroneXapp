import {configureFonts, DefaultTheme} from 'react-native-paper';

const fontConfig = {
  regular: {
    fontFamily: 'yugothib',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'yugothib',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'yugothib',
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: 'yugothib',
    fontWeight: 'normal',
  },
};

export const colors = {
  primary: '#5D5FEF',
  secondary: '#ffff',
};

const theme = {
  ...DefaultTheme,
  roundness: 25,
  fonts: configureFonts({ios: {fontConfig}, android: {fontConfig}}),
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
  },
};

export default theme;
