import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerImage: {
    alignSelf: 'center',
    marginTop: height * 0.2
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 280,
  },
  areaButton: {
    //backgroundColor: 'red',
    width: '100%',
    height: 70,
    marginTop: height * 0.15,
    justifyContent: 'center'
  },
  containerButton: {
    //backgroundColor: 'gray',
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
  }
});
