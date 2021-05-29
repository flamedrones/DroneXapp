import {StyleSheet, Dimensions} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 120,
    // linear-gradient(180deg, #000000 62.2%, #2F3A5A 100%);
  },
  txt: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
