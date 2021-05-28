/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/theme';
import App from './src/App';
import {name as appName} from './app.json';

export default function Main() {
  return (
    // <StoreProvider store={store}>
    <PaperProvider theme={theme}>
      <SafeAreaProvider style={{flex: 1}}>
        <App />
      </SafeAreaProvider>
    </PaperProvider>
    // </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
